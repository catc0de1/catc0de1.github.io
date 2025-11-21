export function initBackToTop() {
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "back-to-top";
  backToTopBtn.title = "Back to Top";
  backToTopBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e3e3e3"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>`;
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
