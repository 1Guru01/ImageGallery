
const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((v) => {
      if (v !== video) v.pause();
    });
  });

  // Optional: play on hover
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
