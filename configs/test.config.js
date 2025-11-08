import fs from "fs";
import { colors } from "./colors.js";

const CONFIG_PATH = "./data/config.json";
const PROJECTS_PATH = "./data/projects.json";

function logSuccess(message) {
  console.log(`${colors.bright}${colors.green}SUCCESS${colors.dim}  >>  ${colors.white}${message}`);
}

function logError(message) {
  console.log(`${colors.bright}${colors.red}ERROR${colors.dim}    >>  ${colors.red}${message}`);
}

function logInfo(message) {
  console.log(`${colors.bright}${colors.blue}INFO${colors.dim}     >>  ${colors.white}${message}`);
}

function logWarning(message) {
  console.log(`${colors.bright}${colors.yellow}WARNING${colors.dim}  >>  ${colors.yellow}${message}`);
}

function logResult(success, message) {
  const symbol = success ? "✅" : "❌";
  console.log(`${symbol} ${message}`);
  return success;
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function readJson(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error(`Cannot read or parse JSON file at ${filePath}: ${err.message}`);
  }
}

function validateConfig(config) {
  console.log("\n🔍 Validating config.json ...");

  const requiredFields = [
    "githubUsername",
    "githubProfileUrl",
    "siteTitle",
    "subtitle",
    "themeColor",
    "darkMode",
    "projectSource",
  ];

  let valid = true;

  for (const field of requiredFields) {
    if (!(field in config)) {
      logInfo(`Missing key "${field}" in config.json`);
      valid = false;
    }
  }

  if (config.githubProfileUrl && !/^https:\/\/github\.com\/[A-Za-z0-9_-]+$/.test(config.githubProfileUrl)) {
    logResult(false, "Invalid 'gitHubProfileUrl' format");
    valid = false;
  } else {
    logResult(true, "'gitHubProfileUrl' format is valid");
  }

  if (config.themeColor && !/^#[0-9A-Fa-f]{6}$/.test(config.themeColor)) {
    logResult(false, "Invalid 'themeColor' format, must be hex or rgb");
    valid = false;
  } else {
    logResult(true, "'themCcolor' format is valid");
  }

  if (typeof config.darkMode !== "boolean") {
    logResult(false, "'darkMode' must be a boolean");
    valid = false;
  } else {
    logResult(true, "'darkMode' type is valid");
  }

  return valid;
}

function validateProjects(projects) {
  console.log("\n🔍 Validating projects.json ...");

  if (!Array.isArray(projects)) {
    console.error("❌ projects.json must be an array");
    return false;
  }

  let allValid = true;

  projects.forEach((p, i) => {
    console.log(`\n📦 Project #${i + 1}: ${p.name || "(no name)"} `);

    const requiredFields = ["name", "description", "techStack", "url"];

    for (const field of requiredFields) {
      if (!(field in p)) {
        logResult(false, `Missing field: ${field}`);
        allValid = false;
      }
    }

    if (p.url && !/^https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+$/.test(p.url)) {
      logResult(false, "Invalid project URL format");
      allValid = false;
    } else {
      logResult(true, "Project URL format is valid");
    }

    if (!Array.isArray(p.techStack)) {
      logResult(false, "techStack must be an array");
      allValid = false;
    } else {
      const validTechs = p.techStack.every((t) => typeof t.name === "string" && t.name.trim() !== "");
      if (!validTechs) {
        logResult(false, "Each techStack item must have a valid 'name' string");
        allValid = false;
      } else {
        logResult(true, "Tech stack format is valid");
      }
    }
  });

  return allValid;
}

function main() {
  console.log("Running config and project validation tests...");

  if (!fileExists(CONFIG_PATH)) {
    console.error(`❌ Missing file: ${CONFIG_PATH}`);
    process.exit(1);
  }
  if (!fileExists(PROJECTS_PATH)) {
    console.error(`❌ Missing file: ${PROJECTS_PATH}`);
    process.exit(1);
  }

  // const config = readJson(CONFIG_PATH);
  // const projects = readJson(PROJECTS_PATH);

  // const configValid = validateConfig(config);
  // const projectsValid = validateProjects(projects);

  logInfo(`Missing key "${colors.cyan}test"${colors.bright} in config.json`);
  logWarning(`Missing key "${colors.blue}test"${colors.reset} in config.json`);
  logError(`Missing key '${colors.bright}test${colors.reset}${colors.red}' in config.json`);
  logSuccess(`Missing key "${colors.white}test"${colors.dim} in config.json`);

  console.log("\n==============================");
  if (configValid && projectsValid) {
    console.log("✅ All checks passed successfully!");
    process.exit(0);
  } else {
    console.log("❌ Some checks failed. Please fix errors above.");
    process.exit(1);
  }

}

main();
