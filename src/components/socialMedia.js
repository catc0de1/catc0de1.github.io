import { socialBrand } from "../utils/socialBrand.js";

export function renderSocialMedia(list = []) {
  if (!Array.isArray(list) || list.length === 0) return;

  const container = document.createElement("div");
  container.className = "social-media-fixed";

  list.forEach((item) => {
    if (!item.url || !item.name) return;

    const brand = socialBrand[item.name.toLowerCase()];

    const wrapper = document.createElement("div");
    wrapper.className = "social-media-wrapper";

    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.className = "social-media-item";

    if (brand) {
      link.innerHTML = brand.svg;
      link.style.backgroundColor = brand.color;
      link.title = brand.name;
    } else {
      link.textContent = item.name;
    }

    wrapper.appendChild(link);
    container.appendChild(wrapper);
  });

  document.body.appendChild(container);
}
