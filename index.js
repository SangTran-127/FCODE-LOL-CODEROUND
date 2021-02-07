const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const options = {
  threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
    }
  });
}
sections.forEach((section) => {
  observer.observe(section);
});
const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");
const show_modal = document.querySelectorAll(".show-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", openModal);
}
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal); // xử lý khi click vào phần ngoài của cái tab
//nhấn nút esc để thoát tab
document.addEventListener("keydown", function (btn) {
  if (btn.key === "Escape") {
    closeModal();
  }
});
