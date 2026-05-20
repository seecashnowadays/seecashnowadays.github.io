// about.js

const images = [
  "images/about_01.jpg",
  "images/about_02.jpg",
  "images/about_03.jpg",
  "images/about_04.jpg",
  "images/about_05.jpg"
];

let current = 0;

const image = document.getElementById("aboutImage");

const counter = document.getElementById("counter");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

/* UPDATE IMAGE */

function updateImage() {
  image.src = images[current];
  counter.textContent = `${current + 1} of ${images.length}`;
}

/* NEXT */

nextBtn.addEventListener("click", () => {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  updateImage();
});

/* PREVIOUS */

prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  updateImage();
});

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextBtn.click();
  }
  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
  
/* LIVE DATE */

const today = new Date();

const formattedDate = today.toLocaleDateString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric"
});

document.querySelector(".date").textContent = formattedDate;
