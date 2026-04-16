<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<h1 align="center">Github Portfolio API Template</h1>

<p align="center">
   <a href="https://iyanarmanda.github.io/github-portfolio-template">View Demo</a>
   &middot;
   <a href="https://github.com/iyanarmanda/github-portfolio-template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
   &middot;
   <a href="https://github.com/iyanarmanda/github-portfolio-template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
   <br/>
</p>

<h3 align="center">Powered by:</h3>
<p align="center">
   <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
   <img src="https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white" alt="CSS" />
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
   <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub" />
   <br/>
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
     <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#fill-data">Fill Data</a>
          <ul>
            <li><a href="#config-structure">Config Structure</a></li>
            <li><a href="#project-structure">Project Structure</a></li>
            <li><a href="#repository-structure">Repository Structure</a></li>
          </ul>
        </li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

**This project is on development**

An open-source template for building a GitHub Portfolio website.
It’s designed to showcase your projects, repositories, and even sub-repos or organizations that don’t appear properly on your GitHub profile.

You can use it easily with a simple `JSON` file, no coding required!
Of course, you can still customize the UI/UX if you’d like.
This website is recommended to be deployed on **GitHub Pages**.

>Note: *This GitHub Portfolio is intended for showcasing public GitHub works only, not for private portfolios.*

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

1. **No coding required, just write in JSON**

   Use `JSON` files as your data source. Simple and easy to modify.

   </br>


3. **Intregated with testing script**
   
   Run a testing script via your package manager to validate and check your JSON data. The script will display error, success, warning, or info messages depending on your input. *Need Node.js as JavaScript runtime environment to run JavaScript file locally*.

   **npm**:
   ```bash
   npm run test
   ```

   **yarn**:
   ```bash
   yarn test
   ```

   **pnpm**:
   ```bash
   pnpm test
   ```
   
   </br>

4. **Support for sub-repos and organizations**  (*coming soon*)

   This optional feature allows you to display repositories from organizations or sub-repos.
   It can be enabled during installation or manually later.
   
   </br>
   
5. **Built with vanilla technologies**
   
   Lightweight, high-performance, and completely dependency-free. Perfect for deploying on GitHub Pages.

   </br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started

### Prerequisites

1. **Node.js**

   `Node.js is` optional for use test script. Recommended version is 18 or above.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

There's a different way to install this template:

1. **GitHub**
   
   Download or clone this repository, it’s ready to use.

   GitHub:
   ```
   https://github.com/iyanarmanda/github-portfolio-api-template
   ```

   Clone with:
   ```bash
   git clone https://github.com/iyanarmanda/github-portfolio-api-template.git github-portfolio
   cd github-portfolio
   ```

   </br>

2. **Package Manager** (*coming soon*)
   
   This template will soon be available via npm, yarn, or pnpm.

   </br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Usage

### Fill Data

   You can add your portfolio data in two ways:

   - By editing the local `./data/projects.json` file, or
   - By providing an API endpoint that returns JSON from your GitHub repository’s root directory `./github-portfolio/index.json` (*coming soon*).
  
   Both formats share the same JSON structure. Choose format do you prefer.

   Additionally, the file `./data/config.json` must be filled in with your credentials and configuration settings.

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

   ---

   #### Config Structure

   File location: `./data/config/json`

   |Field Name|Description|Requirement|Data Type|
   |----------|-----------|-----------|---------|
   |githubUsername|Your GitHub username|Required|String|
   |githubUrl|Your GitHub URL. Overwrite it if use GitHub organization|Optional|String, (URL format)|
   |webTitle|Website tilte|Optional|String|
   |title|Main title of the GitHub Portfolio|Optional|String|
   |subtitle|Sub title of the GitHub Portfolio|Recommended|String|
   |lightThemeColor|Website theme color on light mode|Optional (Default: `#0000FF`)|String, (Hex color format)|
   |darkThemeColor|Website theme color on dark mode|Optional (Default: `#BB86FC`)|String, (Hex color format)|
   |useLocalJson|Set to true to read data from local JSON. Set false to read data from GitHub API repositories (*coming soon*)|Optional (Default: `true`)|Boolean|
   |email|Your contact email (*this feature is under development*)|Optional|string (email format)|
   |socialMedia|List of your social media accounts|Optional|Array of Objects|
   |socialMedia.name|Social media platform name|Required|Enum (see **social platform list**)|
   |socialMedia.url|Link to your social media|Required|String (URL format)|

   Example:
   ```JSON
   {
      "githubUsername": "iyanarmanda",
      "githubUrl": "https://github.com/iyanarmanda",
      "webTitle": "GitHub Portfolio - iyanarmanda",
      "title": "My GitHub Portfolio",
      "subtitle": "A showcase of my repositories and creations",
      "lightThemeColor": "#0000ff",
      "darkThemeColor": "#BB86FC",
      "useLocalJson": true,
      "email": "youremail@example.com",
      "socialMedia": [
         {
            "name": "instagram",
            "url": "yourIgUrl"
         },
         {
            "name": "twitter",
            "url": "yourTwitterUrl"
          },
          {
            "name": "likendin",
            "url": "yourLinkedinUrl"
         }
      ],
   }
   ```

   **Social Platform List**

   Use the value of `socialMedia.name` from the list below:

   |Social Platform|value|
   |----------|-----|
   |Instagram|ig|
   |X|x|
   |LinkedIn|linkedin|
   |WhatsApp|wa|
   |Facebook|fb|
   |Discord|dc|

   > **Note**: You can add another social media platform. Check on `./src/utils/socialPlatform.js`

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

   ---

   #### Project structure

   This file should contain an array of objects. Each object represents a project.

   |Field Name|Description|Requirement|Data Type|
   |----------|-----------|-----------|---------|
   |name|Project/repository name|Required|String|
   |description|Short description|Recommended|String|
   |fullDescription|Full description (shown in modal)|Optional, (default: `description`)|String|
   |projectUrl|Project/repository URL|Recommended|String, (URL format)|
   |productUrl|Product/demo URL|Optional|String, (URL format)|
   |field|Project/product field or platform|Recommended|String|
   |status|Project work status|Recommended|Enum ("COMPLETED", "ON PROGRESS", "MAINTENANCE", "ARCHIVED")|
   |techStack|List of technologies used|Recommended|Array of Objects|
   |techStack.name|Technology name|Required|Enum (see **tech stack list**)|
   |thumbnailImage|Thumbnail image file path. Using fallback image if not provided|Optional|String|
   |thumbnailImageAlt|Alternative text for thumbnail|Optional|String|
   |modalImages|Images displayed in modal|Optional|Array of Objects|
   |modalImages.fileName|Modal image file path|Required|String|
   |modalImages.alt|Alternative text for modal imge|Optional|String|

   Example:
   ```JSON
   [
      {
         "name": "Portfolio Website",
         "description": "My personal portfolio as Informatic Engineering",
         "fullDescription": "This website show all my works as Informatic Engineering and it build perfectly that reference how skilled I am",
         "projectUrl": "https://github.com/iyanarmanda/portfolio",
         "productUrl": "https://iyan-zuli-armanda.netlify.app",
         "field": "Website",
         "status": "COMPLETED",
         "techStack": [
            { "name": "react" },
            { "name": "tailwind" },
            { "name": "vite" },
            { "name": "ts" }
         ],
         "thumbnailImage": "portfolio.webp",
         "thumbnailImageAlt": "Start page of my portfolio website",
         "modalImages": [
            {
               "fileName": "portfolio.webp",
               "alt": "Review of portfolio page 1"
            },
            { 
               "fileName": "my_diary.webp",
               "alt": "Review of portfolio page 2"
            },
            { 
               "fileName": "software_techs_portal.webp",
            }
         ]
      },
      {
         "name": "Surabaya BestPoint",
         "description": "Directory Listing App, show all best point in Surabaya",
         "projectUrl": "https://github.com/iyanarmanda/SurabayaBestPoint",
         "field": "Website",
         "status": "ON PROGRESS",
         "techStack": [
            { "name": "express" },
            { "name": "mongodb" },
            { "name": "mongoose" },
            { "name": "ejs" },
            { "name": "bootstrap" },
            { "name": "js" }
         ],
         "thumbnailImage": "directory_listing_app.webp"
      }
   ]
   ```

   **Images**
   
   - It’s recommended to use **.webp** format for better performance.
   - In this template, store images inside the `./images` directory.
   - If using an API, store them in the same directory as the JSON in `./portfolio` (*coming soon*).
   - If no `thumbnailImage` provided, it will use Splash image as fallback. See on `./src/utils/defaultImage.js`

   **Tech Stack List**

   Use the value of `techStack.name` from the list below:

   |Tech Stack|value|
   |----------|-----|
   |.NET|dotnet|
   |AdonisJS|adonis|
   |Alpine.js|alpine|
   |Angular|angular|
   |Astro|astro|
   |Bootstrap|bootstrap|
   |C|c|
   |C++|cpp|
   |CMake|cmake|
   |Dart|dart|
   |Debian|debian|
   |Docker|docker|
   |EJS|ejs|
   |Electron|electron|
   |Express|express|
   |Flutter|flutter|
   |Framer|framer|
   |Git|git|
   |GitHub|github|
   |GitHub Action|github-action|
   |GitLab|gitlab|
   |Gradle|gradle|
   |GraphQL|graphql|
   |Handlebars.js|hbs|
   |HTML5|html|
   |htmx|htmx|
   |JavaScript|js|
   |Jest|jest|
   |Kali Linux|kali|
   |Kotlin|kotlin|
   |Linux|linux|
   |Markdown|md|
   |Linux Mint|mint|
   |MongoDB|mongodb|
   |MySQL|mysql|
   |NestJS|nestjs|
   |Netlify|netlify|
   |NGINX|nginx|
   |Node.js|nodejs|
   |npm|npm|
   |Nx|nx|
   |OpenCV|opencv|
   |pnpm|pnpm|
   |PostgreSQL|postgres|
   |Postman|postman|
   |Prisma|prisma|
   |Python|py|
   |Qt|qt|
   |React|react|
   |React Native|react-native|
   |Redis|redis|
   |Rust|rust|
   |Sass|sass|
   |SQLite|sqlite|
   |Swagger|swagger|
   |Tailwind CSS|tailwind|
   |Tauri|tauri|
   |Three.js|threejs|
   |TypeScript|ts|
   |TypeORM|typeorm|
   |Vim|vim|
   |Vite|vite|
   |Vitest|vitest|
   |Webpack|webpack|
   |Yarn|yarn|

   > **Note**: You can add another tech stack. Check on `./src/utils/techBrand.js`

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

   ---

  #### Repository Structure

   This file should contain an array of objects. Each object represents a project. *If you don't have another or sub repotories, then leave this file empty array* (`[]`).

   |Field Name|Description|Requirement|Data Type|
   |----------|-----------|-----------|---------|
   |repoName|Another or sub repository name|Required|String|
   |repoDesc|Another or sub repository short description|Optional|String|
   |repoUrl|Another or sub repository URL|Required|String (URL format)|

   Example:
   ```json
   [
      {
         "repoName": "My Other Repo",
         "repoDesc": "This is my other repo. The content is specialized field",
         "repoUrl": "https://github.com/reponame"
      },
      {
         "repoName": "Organization Repo Example",
         "repoDesc": "This repo is from an organization.",
         "repoUrl": "https://github.com/yourorg/reponame"
      }
   ]
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Deployment

   This GitHub Portfolio template is ideal for GitHub Pages.
   Just deploy from the root directory, since it already includes an `index.html` file.

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## License

This template is [MIT LICENSED](https://github.com/iyanarmanda/github-portfolio-api-template?tab=MIT-1-ov-file)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contact

This github-portfolio-api-template is created by **iyanarmanda**.

Feel free to connect:
- **GitHub**: [iyanarmanda](https://github.com/iyanarmanda)
- **Instagram**: [@iyan_zul1](https://www.instagram.com/iyan_zul1/)
- **Linkedin**: [iyan-zuli-armanda](https://www.linkedin.com/in/iyan-zuli-armanda-8a1383296/)

Template link: [https://github.com/iyanarmanda/github-portfolio-template](https://github.com/iyanarmanda/github-portfolio-template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

</br>

Please leave a star and it free to contribute.
Hope you enjoy it ^-^

[contributors-shield]: https://img.shields.io/github/contributors/iyanarmanda/github-portfolio-template.svg?style=for-the-badge
[contributors-url]: https://github.com/iyanarmanda/github-portfolio-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/iyanarmanda/github-portfolio-template.svg?style=for-the-badge
[forks-url]: https://github.com/iyanarmanda/github-portfolio-template/network/members
[stars-shield]: https://img.shields.io/github/stars/iyanarmanda/github-portfolio-template.svg?style=for-the-badge
[stars-url]: https://github.com/iyanarmanda/github-portfolio-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/iyanarmanda/github-portfolio-template.svg?style=for-the-badge
[issues-url]: https://github.com/iyanarmanda/github-portfolio-template/issues
[license-shield]: https://img.shields.io/github/license/iyanarmanda/github-portfolio-template.svg?style=for-the-badge
[license-url]: https://github.com/iyanarmanda/github-portfolio-template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/iyan-zuli-armanda-8a1383296/

