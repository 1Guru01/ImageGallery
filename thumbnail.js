const current = document.getElementById("current");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    
    current.src = thumb.getAttribute("data-full");

    
    thumbnails.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
