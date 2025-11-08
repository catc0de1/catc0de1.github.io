import { projectSlider } from "./projectSlider.js";
import { defaultImage } from "../utils/defaultImage.js";
import { techBrand } from "../utils/techBrand.js";

export function projectModal(project) {
  const modal = document.getElementById("project-modal");
  const sliderTrack = document.getElementById("modal-slider-track");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalMeta = document.getElementById("modal-meta");

  if (Array.isArray(project.modalImages) && project.modalImages.length > 0) {
    sliderTrack.innerHTML = project.modalImages
      .map((img) => {
        const src = `./images/${img.fileName}`;
        const alt = img.alt ? img.alt : project.name;
        return `<img src="${src}" alt="${alt} preview" />`;
      })
      .join("");
  } else {
    const fallback = project.thumbnailImage
      ? `./images/${project.thumbnailImage}`
      : `${defaultImage}`;
    const alt = project.thumbnailImageAlt || project.name;
    sliderTrack.innerHTML = `<img src="${fallback}" alt="${alt}" />`;
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
        <span 
          class="modal-tech-item" 
          style="--hover-color: ${tech.color}; border: 1px solid ${tech.color};"
          title="${tech.name}"
        >
          <span class="modal-tech-icon" style="color: ${tech.color};">${tech.svg}</span>
          <span class="modal-tech-name" style="color: ${tech.color};">${tech.name}</span>
        </span>
      `;
    }).join("")
    : `<span>Unknown</span>`;

  modalMeta.innerHTML = `
    <strong>Tech Stack:</strong>
    <div class="modal-tech-group">${techStacks}</div>
    ${
      project.projectUrl
        ? `<p><a href="${project.projectUrl}" target="_blank" rel="noopener noreferrer">Visit Project</a></p>`
        : ""
    }
  `;

  modal.style.display = "flex";
  projectSlider(modal, sliderTrack);

  document.getElementById("modal-close").onclick = () => (modal.style.display = "none");
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
    };

    document.getElementById("modal-close").onclick = () => doClose();
  };
}
