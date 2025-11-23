export function initThemeSwitch(lightThemeColorConfig, darkThemeColorConfig) {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  let lightThemeColor = CSS.supports("color", lightThemeColorConfig)
    ? lightThemeColorConfig
    : "#0000FF";

  let darkThemeColor = CSS.supports("color", darkThemeColorConfig)
    ? darkThemeColorConfig
    : "#BB86FC";

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.setProperty("--theme-color", darkThemeColor);

    toggle.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.setProperty("--theme-color", lightThemeColor);

    toggle.checked = false;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--theme-color", darkThemeColor);

      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--theme-color", lightThemeColor);

      localStorage.setItem("theme", "light");
    }
  });
}
