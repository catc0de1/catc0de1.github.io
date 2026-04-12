import { githubProfile } from "./components/githubProfile.js";
import { projectCard } from "./components/projectCard.js";
import { subRepoCard } from "./components/subRepoCard.js";
import { renderSocialMedia } from "./components/socialMedia.js";
import { initBackToTop } from "./components/backToTop.js";
import { initThemeSwitch } from "./components/themeSwitch.js";

async function loadConfig() {
  try {
    const res = await fetch("./data/config.json");
    const config = await res.json();
    return config;
  } catch (err) {
    console.error("Error loading config:", err);
    alert("Cannot load config.json, please check your server or path.");
  }
}

async function loadProjects(config) {
  const container = document.getElementById("projects");
  if (config.useLocalJson && config.useLocalJson === true) {
    try {
      const res = await fetch("./data/projects.json");
      if (!res.ok) throw new Error("Failed to load project data");
      const projects = await res.json();
      
      projects.forEach((project) => {
        const card = projectCard(project);
        container.appendChild(card);
      });
    } catch (err) {
      console.error("Error loading projects:", err);
      container.innerHTML = `<p style="color:red;">Error loading projects: ${err.message}</p>`;
    }
  }
}

async function loadSubRepos() {
  const container = document.getElementById("subRepos");
  const header = document.getElementById("subReposHeader");

  const hideSection = () => {
    if (container) container.style.display = "none";
    if (header) header.style.display = "none";
  };

  try {
    const res = await fetch("./data/repos.json");
    if (res.status === 404) {
      hideSection();
      console.warn(
        "No repos.json found, skipping sub repos section.",
        "If you want to silent this log, create a repos.json file in the data folder then fill `[]`."
      );
      return
    };

    const data = await res.text();

    if (!data || data.trim().length === 0) {
      hideSection();
      return;
    }

    const subRepos = JSON.parse(data);

    if (!Array.isArray(subRepos) || subRepos.length === 0) {
      hideSection();
      return;
    }

    subRepos.forEach((item) => {
      const card = subRepoCard(item);
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading sub-repos:", err);
    hideSection();
  }
}

function applyConfigToUI(config) {
  if (config.webTitle && typeof config.webTitle === "string") {
    document.title = config.webTitle;
  } else {
    document.title = "GitHub Portfolio";
  }

  document.querySelector("h1").textContent = config.title;

  document.querySelector(".subtitle").textContent = config.subtitle;

  document.querySelector("footer a").href = config.githubUrl;
}

document.addEventListener("DOMContentLoaded", async () => {
  const config = await loadConfig();
  if (!config) return;

  applyConfigToUI(config);
    renderSocialMedia(config.socialMedia);

  try {
    await Promise.all([
      githubProfile(config.githubUsername, config.githubUrl),
      loadProjects(config),
      loadSubRepos(),
    ]);
    
    initBackToTop();
    initThemeSwitch(config.lightThemeColor, config.darkThemeColor);

    const elementsToReveal = [
      ".header-container", 
      ".main-container", 
      ".social-media-container", 
      "footer"
    ];

    elementsToReveal.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.classList.add("content-loaded");
    });
  } catch (err) {
    console.error("Error loading content:", err);
  }
});
