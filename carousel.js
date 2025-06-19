document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let timer;

function showSlides(n) {
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

function autoPlay() {
  nextSlide(1);
  timer = setTimeout(autoPlay, 3000);
}

document.querySelector(".prev").addEventListener("click", () => {
  clearTimeout(timer);
  nextSlide(-1);
  autoPlay();
});

document.querySelector(".next").addEventListener("click", () => {
  clearTimeout(timer);
  nextSlide(1);
  autoPlay();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearTimeout(timer);
    currentSlide(index);
    autoPlay();
  });
});

showSlides(slideIndex);
autoPlay();
