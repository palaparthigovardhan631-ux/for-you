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
const captions=[
 "You are my calm, my chaos, my home.",
 "Every smile of yours feels like magic.",
 "With you, time forgets to rush.",
 "You make ordinary days beautiful.",
 "I found my forever in your eyes.",
 "Loving you feels easy and right.",
 "Every heartbeat whispers your name.",
 "You are my favorite feeling.",
 "My soul recognized you instantly.",
 "Forever feels perfect with you."
];

let i=0;
const slide=document.getElementById("slide");
const line2=document.getElementById("line2");
const fade=document.getElementById("fade");
const ending=document.getElementById("ending");
const bgm=document.getElementById("bgm");

bgm.volume=0.55;

/* Slideshow */
const show=setInterval(()=>{
  i++;
  if(i>=photos.length){
    clearInterval(show);
    endWonder();
  }else{
    slide.src=photos[i];
    line2.innerText=captions[i];
  }
},5000);

/* Ending wonder */
function endWonder(){
  fade.style.opacity="1";
  setTimeout(()=>{
    bgm.volume=0.35;
    ending.style.display="flex";
  },5000);
}
