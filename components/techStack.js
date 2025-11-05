import { techBrand } from "./techBrand.js";

export function getTechIconForCard(name) {
  const tech = techBrand[name];
  if (!tech) {
    return `<span class="project-tech-item unknown">${name}</span>`;
  }
  return `
    <span class="project-tech-item" style="background: ${tech.color};" title="${tech.name}">
      <span class="project-tech-icon">${tech.svg}</span>
    </span>
  `;
}

export function getTechIconForModal(name) {
  const tech = techBrand[name];
  if (!tech) {
    return `<span class="modal-tech-item unknown">${name}</span>`;
  }
  return `
    <span 
      class="modal-tech-item"
      style="
        --hover-color: ${tech.color};
        border: 1px solid ${tech.color};
      "
      title="${tech.name}"
    >
      <span class="modal-tech-icon" style="color: ${tech.color};">${tech.svg}</span>
      <span class="modal-tech-name" style="color: ${tech.color};">${tech.name}</span>
    </span>
  `;
}
