// Adds visible class when scrolling
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-anim");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});
