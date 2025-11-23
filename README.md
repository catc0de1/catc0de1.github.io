<h1 align="center">Github Portfolio API Template</h1>

<h3 align="center">Powered by:</h3>
<p align="center">
   <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
   <img src="https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white" alt="CSS" />
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
   <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub" />
</p>


**This project is on development**

An open-source template for building a GitHub Portfolio website.
It’s designed to showcase your projects, repositories, and even sub-repos or organizations that don’t appear properly on your GitHub profile.

You can use it easily with a simple `JSON` file, no coding required!
Of course, you can still customize the UI/UX if you’d like.
This website is recommended to be deployed on **GitHub Pages**.

>Note: *This GitHub Portfolio is intended for showcasing public GitHub works only, not for private portfolios.*

---

## Features

1. **No coding required, just write in JSON**

   Use `JSON` files as your data source. Simple and easy to modify.

   </br>


3. **Intregated with testing script**
   
   Run a testing script via your package manager to validate and check your JSON data. The script will display error, success, warning, or info messages depending on your input.

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

---

## Installation

1. **GitHub**
   
   Download or clone this repository, it’s ready to use.

   GitHub:
   ```
   https://github.com/CatC0de1/github-portfolio-api-template
   ```

   Clone with:
   ```bash
   git clone https://github.com/CatC0de1/github-portfolio-api-template.git github-portfolio
   cd github-portfolio
   ```

   </br>

2. **Package Manager** (*coming soon*)
   
   This template will soon be available via npm, yarn, or pnpm.

   </br>

---

## Usage

1. **Fill Portfolio Data**

   You can add your portfolio data in two ways:

   - By editing the local `./data/projects.json` file, or
   - By providing an API endpoint that returns JSON from your GitHub repository’s root directory `./portfolio/index.json` (*coming soon*).
  
   Both formats share the same JSON structure and you can use either or both methods.

   Additionally, the file `./data/config.json` must be filled in with your credentials and configuration settings.

   ---

   **config.json structure**

   |Field Name|Description|Requirement|Data Type|
   |----------|-----------|-----------|---------|
   |githubUsername|Your GitHub username|Required|String|
   |githubUrl|Your GitHub URL|Required|String, (URL)|
   |webTitle|website tilte|Optional|String|
   |title|Main title of the GitHub Portfolio|Optional|String|
   |subtitle|Sub title of the GitHub Portfolio|Optional|String|
   |lightThemeColor|Website theme color|Optional (Default: `#0000FF`)|String, (CSS color format)|
   |useLocalJson|Set to true to read data from local JSON|Optional (Default: `true`)|Boolean|
   |email|Your contact email|Recommended|string (email)|
   |socialMedia|List of your social media accounts|Optional|Array of Objects|
   |socialMedia.name|Social media platform name|Required|String (enum: instagram, twitter, linkedin)|
   |socialMedia.url|Link to your social media|Required|String (URL)|

   Example:
   ```JSON
   {
      "githubUsername": "catc0de1",
      "githubUrl": "https://github.com/catc0de1",
      "webTitle": "GitHub Portfolio - catc0de1",
      "title": "My GitHub Portfolio",
      "subtitle": "A showcase of my repositories and creations",
      "lightThemeColor": "#0000ff",
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

   ---

   **./data/project.json structure**:

   This file should contain an array of objects. Each object represents a project.

   |Field Name|Description|Requirement|Data Type|
   |----------|-----------|-----------|---------|
   |name|Project/repository name|Required|String|
   |description|Short description|Required|String|
   |fullDescription|Full description (shown in modal)|Optional, (default: `description`)|String|
   |projectUrl|Project/repository URL|Required|String, (URL)|
   |productUrl|Product/demo URL|Optional|String, (URL)|
   |field|Project/product field or platform|Required|String|
   |status|Project work status|Required|"COMPLETED" or "ON PROGRESS"|
   |techStack|List of technologies used|Required|Array of Objects|
   |techStack.name|Technology name, can see all list in **Tech Stack List**|Required|String|
   |thumbnailImage|Thumbnail image path|Optional|String|
   |thumbnailImageAlt|Alt text for thumbnail|Optional|String|
   |modalImages|Images displayed in modal|Optional (default: `thumbnailImage`)|Array of Objects|
   |modalImages.fileName|Image path|Required|String|
   |modalImages.alt|Alt text|Optional|String|

   Example:
   ```JSON
   [
      {
         "name": "Portfolio Website",
         "description": "My personal portfolio as Informatic Engineering",
         "fullDescription": "This website show all my works as Informatic Engineering and it build perfectly that reference how skilled I am",
         "projectUrl": "https://github.com/catc0de1/portfolio",
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
               "alt": "Review of portfolio page 3"
            }
         ]
      },
      {
         "name": "Surabaya BestPoint",
         "description": "Directory Listing App, show all best point in Surabaya",
         "projectUrl": "https://github.com/catc0de1/SurabayaBestPoint",
         "productUrl": "https://iyan-zuli-armanda.netlify.app",
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
   - If using an API, store them in the same directory as the JSON (`./portfolio`).
   - Use **kebab-case** or **snake_case** for consistent file naming.

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

   You can add custom technologies in `./src/utils/techBranc.js`

   </br>

2. **Deploying**

   This GitHub Portfolio template is ideal for GitHub Pages.
   Just deploy from the root directory, since it already includes an `index.html` file.

   </br>

---

## Author

This github-portfolio-api-template is created by **catc0de1**.

Feel free to connect:
- **GitHub**: [catc0de1](https://github.com/catc0de1)
- **Instagram**: [@iyan_zul1](https://www.instagram.com/iyan_zul1/)
- **Linkedin**: [iyan-zuli-armanda](https://www.linkedin.com/in/iyan-zuli-armanda-8a1383296/)

---

## LICENSE

This template is [MIT LICENSED](https://github.com/CatC0de1/github-portfolio-api-template?tab=MIT-1-ov-file)

---

</br>

Please leave a star and it free to contribute.
Hope you enjoy it ^-^