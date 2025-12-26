import { projectSlider } from "./projectSlider.js";
import { techBrand } from "../utils/techBrand.js";

export function projectModal(project) {
  const modal = document.getElementById("project-modal");
  const sliderTrack = document.getElementById("modal-slider-track");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalTechStack = document.getElementById("modal-tech-stack");
  const modalSliderTitle = document.getElementById("modal-slider-title");
  const sliderContainer = document.getElementById("modal-slider-container");
  const indicators = document.getElementById("modal-indicators");

  if (Array.isArray(project.modalImages) && project.modalImages.length > 0) {
    sliderTrack.innerHTML = project.modalImages
      .map((img) => {
        const src = `./images/${img.fileName}`;
        const alt = img.alt ? img.alt : project.name;
        return `<img src="${src}" alt="${alt} preview" />`;
      })
      .join("");

    modalSliderTitle.style.display = "";
    sliderContainer.style.display = "";
    indicators.style.display = "";
  } else {
    sliderTrack.innerHTML = "";

    modalSliderTitle.style.display = "none";
    sliderContainer.style.display = "none";
    indicators.style.display = "none";
  }

  modalTitle.textContent = project.name;
  modalDescription.textContent =
    project.fullDescription || project.description || "No description available";

  const techStacks = Array.isArray(project.techStack)
    ? project.techStack.map((t) => {
      const tech = techBrand[t.name];
      if (!tech) {
        return `<span class="project-tech-item unknown">${t.name}</span>`;
      }
      return `
        <a
          href="${tech.url}"
          target="_blank"
          rel="noopener"
          class="modal-tech-item" 
          style="--hover-color: ${tech.color};"
          title="${tech.name}"
        >
          ${tech.name}
        </a>
      `;
    }).join("")
    : `<span>Unknown</span>`;

  modalTechStack.innerHTML = `
    <h3>Tech Stack:</h3>
    <div class="modal-tech-group">${techStacks}</div>
  `;

  const modalProjectField = modal.querySelector("#modal-project-field");
  if (modalProjectField) {
    modalProjectField.textContent = project.field || '';
  }

  const modalProjectStatus = modal.querySelector("#modal-project-status");
  if (modalProjectStatus) {
    modalProjectStatus.textContent = project.status || '';
  }

  const modalFooter = modal.querySelector(".modal-footer");
  let footerContent = "";
  if (project.productUrl) {
    footerContent += `
      <a href="${project.productUrl}" target="_blank" rel="noopener noreferrer" class="modal-link-product">
        <span>Visit Product</span>
      </a>`
  }
  if (project.projectUrl) {
    footerContent += `
      <a href="${project.projectUrl}" target="_blank" rel="noopener noreferrer" class="modal-link-project">
        <span>Visit Project</span>
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      </a>`;
  }
  modalFooter.innerHTML = footerContent;

  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  projectSlider(modal, sliderTrack);

  const scrollContainer = modal.querySelector(".modal-scroll");

  if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: "instant" });

  const scrollProgress = modal.querySelector(".modal-scroll-progress");

  scrollContainer.addEventListener("scroll", () => {
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
  });

  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");

    modal.onclick = null;

    if (typeof modal._projectSliderCleanup === "function") {
      try {
        modal._projectSliderCleanup();
      } catch (err) {
        console.warn("Error running slider cleanup:", err);
      }
    }
  }

  const closeButton = modal.querySelector("#modal-close");
  if (closeButton) {
    closeButton.onclick = (e) => {
      e.stopPropagation();
      closeModal();
    };
  }

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      if (typeof modal._projectSliderCleanup === "function") {
        try {
          modal._projectSliderCleanup();
        } catch (err) {
          console.warn("Error running slider cleanup:", err);
        }
      }
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    };
  };}
