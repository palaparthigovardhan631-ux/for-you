const photos = [
  "photo1.jpg.jpeg",
  "photo2.jpg.jpeg",
  "photo3.jpg.jpeg",
  "photo4.jpg.jpeg",
  "photo5.jpg.jepg",
  "photo6.jpg.jpeg",
  "photo7.jpg.jpeg",
  "photo8.jpg.jpeg",
  "photo9.jpg.jpeg",
  "photo10.jpg.jpeg"
];


let index = 0;
const slide = document.getElementById("slide");
const fade = document.getElementById("fade");
const proposal = document.getElementById("proposal");
const bgm = document.getElementById("bgm");

bgm.volume = 0.6;

/* SLIDESHOW */
const slideshow = setInterval(() => {
  index++;
  if (index >= photos.length) {
    clearInterval(slideshow);
    startClimax();
  } else {
    slide.src = photos[index];
  }
}, 3500);

/* CLIMAX */
function startClimax() {
  fade.style.opacity = "1";
  setTimeout(() => {
    bgm.volume = 0.3;
    proposal.style.display = "flex";
  }, 3000);
}

function finalYes() {
  alert("She said YES 💍❤️");
}

/* COUNTER */
const startDate = new Date("2023-01-01"); // CHANGE
setInterval(() => {
  const days = Math.floor((new Date() - startDate) / 86400000);
  document.getElementById("counter").innerText =
    `${days} days of love ❤️`;
}, 1000);