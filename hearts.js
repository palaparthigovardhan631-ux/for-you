/*************************************************
 * CINEMATIC LOVE HEARTS ANIMATION
 * Created for Munna ❤️
 * Smooth, romantic, dreamy, premium effect
 *************************************************/

/* ===== CONFIGURATION ===== */
const HEART_CONFIG = {
  emojis: ["💖", "❤️", "💕", "💘", "💞", "💓"],
  minSize: 14,
  maxSize: 36,
  minDuration: 6,
  maxDuration: 14,
  spawnInterval: 350, // lower = more hearts
  windStrength: 40,   // horizontal drift
  glowColors: [
    "rgba(255,182,193,0.8)",
    "rgba(255,105,180,0.7)",
    "rgba(255,20,147,0.6)"
  ]
};

/* ===== UTILITY FUNCTIONS ===== */
function random(min, max) {
  return Math.random() * (max - min) + min;
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ===== CREATE HEART ===== */
function createHeart() {
  const heart = document.createElement("div");

  // Emoji
  heart.innerText = randomItem(HEART_CONFIG.emojis);

  // Base styles
  const size = random(HEART_CONFIG.minSize, HEART_CONFIG.maxSize);
  heart.style.position = "fixed";
  heart.style.left = random(0, 100) + "vw";
  heart.style.bottom = "-40px";
  heart.style.fontSize = size + "px";
  heart.style.opacity = random(0.4, 1);
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "50";

  // Glow
  const glow = randomItem(HEART_CONFIG.glowColors);
  heart.style.textShadow = `
    0 0 10px ${glow},
    0 0 20px ${glow},
    0 0 30px ${glow}
  `;

  // Animation timing
  const duration = random(
    HEART_CONFIG.minDuration,
    HEART_CONFIG.maxDuration
  );

  // Wind sway direction
  const sway = random(-HEART_CONFIG.windStrength, HEART_CONFIG.windStrength);

  // Apply animation
  heart.style.animation = `
    floatUp ${duration}s linear forwards,
    sway ${duration / 2}s ease-in-out infinite,
    fadeHeart ${duration}s linear forwards
  `;
  heart.style.setProperty("--sway", sway + "px");

  document.body.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

/* ===== SPARKLE HEARTS (SPECIAL) ===== */
function createSparkleHeart() {
  const sparkle = document.createElement("div");
  sparkle.innerText = "✨";

  sparkle.style.position = "fixed";
  sparkle.style.left = random(0, 100) + "vw";
  sparkle.style.bottom = random(10, 40) + "vh";
  sparkle.style.fontSize = random(12, 20) + "px";
  sparkle.style.opacity = random(0.4, 0.8);
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "40";

  sparkle.style.animation = `
    sparkleFade 4s ease-out forwards,
    sparkleMove 4s ease-in-out forwards
  `;

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 4000);
}

/* ===== HEART GENERATOR LOOP ===== */
setInterval(() => {
  createHeart();

  // Occasionally add sparkles
  if (Math.random() > 0.7) {
    createSparkleHeart();
  }
}, HEART_CONFIG.spawnInterval);

/* ===== CSS ANIMATIONS (INJECTED) ===== */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(-110vh) scale(1.2);
  }
}

@keyframes sway {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(var(--sway));
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes fadeHeart {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

@keyframes sparkleFade {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 0.8;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

@keyframes sparkleMove {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-60px);
  }
}
`;
document.head.appendChild(style);

/*************************************************
 * END OF HEARTS.JS
 * Love coded with care ❤️
 *************************************************/
