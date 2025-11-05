import { getTechIconForCard, getTechIconForModal } from "./techStack.js";

export function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  const imageSrc = project.thumbnailImage ? `./images/${project.thumbnailImage}` : "./images/default.webp";

  const techStacks = Array.isArray(project["techStack"])
    ? project["techStack"]
        .map((t) => getTechIconForCard(t.name))
        .join("")
    : `<span class="">Unknown</span>`;


  card.innerHTML = `
    <div class="project-image-container">
      <img src="${imageSrc}" alt="${project.name}" class="project-image" />
    </div>
    <div class="project-content">
      <h3>${project.name}</h3>
      <p class="project-desc">${project.description || "No description provided."}</p>
      <div class="project-tech-group">
        ${techStacks}
      </div>
    </div>
  `;

  card.addEventListener("click", () => showProjectModal(project));

  return card;
}

function showProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const sliderTrack = document.getElementById("modal-slider-track");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalMeta = document.getElementById("modal-meta");
  const indicatorsContainer = document.getElementById("modal-indicators");
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");

  if (Array.isArray(project.modalImages) && project.modalImages.length > 0) {
    sliderTrack.innerHTML = project.modalImages
      .map((img) => {
        const src = img.modalImageIsLocal
          ? `./images/${img.modalImage}`
          : img.modalImage;
        return `<img src="${src || "./images/default.webp"}" alt="${project.name} preview" />`;
      })
      .join("");
  } else {
    const fallback = project.thumbnailImage
      ? `./images/${project.thumbnailImage}`
      : "./images/default.webp";
    sliderTrack.innerHTML = `<img src="${fallback}" alt="${project.name}" />`;
  }

  modalTitle.textContent = project.name;
  modalDescription.textContent = project.fullDescription || project.description || "No description available";

  const techStacks = Array.isArray(project["techStack"])
    ? project["techStack"].map((t) => getTechIconForModal(t.name)).join("")
    : `<span class="">Unknown</span>`;

  modalMeta.innerHTML = `
    <strong>Tech Stack:</strong>
    <div class="modal-tech-group">${techStacks}</div>
    ${
      project.url
        ? `<p><a href="${project.url}" target="_blank" rel="noopener noreferrer">Visit Project</a></p>`
        : ""
    }
    `;

  let progressBar = document.querySelector(".slider-progress");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.className = "slider-progress";
    sliderTrack.parentElement.appendChild(progressBar);
  }

  let currentIndex = 0;
  const totalSlides = sliderTrack.children.length;
  let autoSlideTimer;
  const slideDuration = 5000;

  if (totalSlides <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    indicatorsContainer.style.display = "none";
    progressBar.style.display = "none";
    sliderTrack.style.transform = "translateX(0)";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    indicatorsContainer.style.display = "flex";
    progressBar.style.display = "block";

    indicatorsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.className = "indicator-dot";
      if (i === 0) dot.classList.add("active");
      dot.onclick = () => {
        currentIndex = i;
        updateSlider();
        startAutoSlide();
      };
      indicatorsContainer.appendChild(dot);
    }
  }

  const dots = indicatorsContainer.querySelectorAll(".indicator-dot");

  const resetProgressBar = () => {
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    setTimeout(() => {
      progressBar.style.transition = `width ${slideDuration}ms linear`;
      progressBar.style.width = "100%";
    }, 50);
  };

  const updateIndicators = () => {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  };

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    resetProgressBar();
    updateIndicators();
  }

  const startAutoSlide = () => {
    clearInterval(autoSlideTimer);
    resetProgressBar();
    autoSlideTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, slideDuration);
  };

  prevBtn.onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    startAutoSlide();
  };

  nextBtn.onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
    startAutoSlide();
  };

  document.getElementById("modal-prev").onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    startAutoSlide();
  };

  document.getElementById("modal-next").onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
    startAutoSlide();
  };

  modal.style.display = "flex";

  document.getElementById("modal-close").onclick = () => {
    modal.style.display = "none";
    clearInterval(autoSlideTimer);
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      clearInterval(autoSlideTimer);
    }
  };

  if (totalSlides > 1) startAutoSlide();

  const sliderImages = sliderTrack.querySelectorAll("img");
  const viewer = document.getElementById("image-viewer");
  const viewerImg = document.getElementById("viewer-img");
  const viewerClose = document.getElementById("viewer-close");

  sliderImages.forEach((img) => {
    img.onclick = (e) => {
      e.stopPropagation();
      viewerImg.src = img.src;
      viewer.style.display = "flex";
    };
  });

  viewerClose.onclick = () => (viewer.style.display = "none");
  viewer.onclick = (e) => {
    if (e.target === viewer) viewer.style.display = "none";
  };

}
