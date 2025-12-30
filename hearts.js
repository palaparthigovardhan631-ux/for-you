setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = "22px";
  heart.style.animation = "float 4s linear";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
