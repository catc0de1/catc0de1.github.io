import { createProjectCard } from "./components/projectCard.js";

async function loadConfig() {
  try {
    const res = await fetch("./data/config.json");
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
  if (config.useLocalJson && config.useLocalJson === true) {
    try {
      const res = await fetch("./data/projects.json");
      if (!res.ok) throw new Error("Failed to load project data");
      const projects = await res.json();
      
      projects.forEach((project) => {
        const card = createProjectCard(project);
        container.appendChild(card);
      });
    } catch (err) {
      container.innerHTML = `<p style="color:red;">Error loading local projects: ${err.message}</p>`;
    }
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

  const color = config.themeColor;
  if (color && typeof color === "string" && CSS.supports("color", color)) {    
    document.documentElement.style.setProperty("--theme-color", color);
    document.querySelectorAll("a, h3").forEach((el) => {
      el.style.color = color;
    });
  } else {
    document.documentElement.style.setProperty("--theme-color", "#0000FF");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const config = await loadConfig();
  if (!config) return;
  applyConfigToUI(config);
  loadProjects(config);
});
