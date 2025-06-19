document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

const gallery = document.getElementById("infinite-gallery");
const loader = document.getElementById("loader");

let imageCount = 0;

function loadImages(count = 6) {
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/400/300?random=${imageCount++}`;
    img.alt = "Random image";
    gallery.appendChild(img);
  }
}

function isBottomOfPage() {
  return (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
  );
}

loadImages();

window.addEventListener("scroll", () => {
  if (isBottomOfPage()) {
    loader.style.display = "block";
    setTimeout(() => {
      loadImages();
      loader.style.display = "none";
    }, 1000);
  }
});
