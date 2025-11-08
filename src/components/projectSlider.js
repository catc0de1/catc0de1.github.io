export function projectSlider(modal, sliderTrack) {
  const indicatorsContainer = document.getElementById("modal-indicators");
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");

  let progressBar = document.querySelector(".slider-progress");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.className = "slider-progress";
    sliderTrack.parentElement.appendChild(progressBar);
  }

  let currentIndex = 0;
  const totalSlides = sliderTrack.children.length;
  let autoSlideTimer = null;
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

  const clearProgressBar = () => {
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    progressBar.style.display = "none";
  };

  const updateIndicators = () => {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  };

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (totalSlides > 1) resetProgressBar();
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

  const stopAutoSlide = () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
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

  if (totalSlides > 1) startAutoSlide();

  modal._projectSliderCleanup = () => {
    stopAutoSlide();
    if (totalSlides > 1) {
      resetProgressBar();
      setTimeout(() => clearProgressBar(), 60);
    } else {
      clearProgressBar();
    }
    currentIndex = 0;
    sliderTrack.style.transform = `translateX(0)`;
    updateIndicators();
  };

  // Image viewer
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
