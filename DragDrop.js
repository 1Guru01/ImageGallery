document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

const gallery = document.getElementById("drag-gallery");
let draggedItem = null;

gallery.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "IMG") {
    draggedItem = e.target;
    e.target.classList.add("dragging");
  }
});

gallery.addEventListener("dragend", (e) => {
  if (draggedItem) {
    draggedItem.classList.remove("dragging");
    draggedItem = null;
  }
});

gallery.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(gallery, e.clientX);
  if (afterElement == null) {
    gallery.appendChild(draggedItem);
  } else {
    gallery.insertBefore(draggedItem, afterElement);
  }
});

function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll("img:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
