import { createProjectCard } from "./components/projectCard.js";

async function loadConfig() {
  try {
    const res = await fetch("./config.json");
    if (!res.ok) throw new Error("Failed to load config.json");
    const config = await res.json();
    return config;
  } catch (err) {
    console.error("Error loading config:", err);
    alert("Cannot load config.json — please check your server or path.");
    return null;
  }
}

async function loadProjects(config) {
  const container = document.getElementById("projects");
  try {
    const res = await fetch(config.projectSource);
    if (!res.ok) throw new Error("Failed to load project data");
    const projects = await res.json();

    projects.forEach((project) => {
      const card = createProjectCard(project);
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p style="color:red;">Error loading projects: ${err.message}</p>`;
  }
}

function applyConfigToUI(config) {
  document.title = config.siteTitle;
  document.querySelector("h1").textContent = config.siteTitle;
  document.querySelector(".subtitle").textContent = config.subtitle;
  document.querySelector("footer a").href = config.githubProfileUrl;

  document.documentElement.style.setProperty("--theme-color", config.themeColor);
  document.querySelectorAll("a, h3").forEach((el) => {
    el.style.color = config.themeColor;
  });

  // Mode gelap opsional
  if (config.darkMode) {
    document.body.classList.add("dark");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const config = await loadConfig();
  if (!config) return;
  applyConfigToUI(config);
  loadProjects(config);
});
