import { projectModal } from "./projectModal.js";
import { defaultImage } from "../utils/defaultImage.js";
import { techBrand } from "../utils/techBrand.js";

export function projectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  const imageSrc = project.thumbnailImage
    ? `./images/${project.thumbnailImage}`
    : `${defaultImage}`;
  const imageAlt =
    typeof project.thumbnailImageAlt === "string"
      ? project.thumbnailImageAlt
      : project.name;

  const techStacks = Array.isArray(project.techStack)
    ? project.techStack.map((t) => {
      const tech = techBrand[t.name];
      if (!tech) {
        return `<span class="project-tech-item unknown">${t.name}</span>`;
      }
      return `
        <span class="project-tech-item" title="${tech.name}">
          <span class="project-tech-icon">${tech.svg}</span>
        </span>
      `;
    }).join("")
    : `<span>Unknown</span>`;

  card.innerHTML = `
    <div class="project-image-container">
      <img src="${imageSrc}" alt="${imageAlt}" class="project-image" />
    </div>
    <div class="project-content">
      <h3>${project.name}</h3>
      <p class="project-desc">${project.description || "No description provided."}</p>
      <div class="project-tech-group">${techStacks}</div>
    </div>
  `;

  card.addEventListener("click", () => projectModal(project));
  return card;
}
