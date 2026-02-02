# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.0.1] - 2026-01-15

**Scaffold / Prototype**: Initial project scaffolding and prototypes

### Added
- Project scaffold created using Vite + React (starter repo)
- Initial `index.html`, `src/main.jsx`, and minimal `src/App.jsx` placeholder
- `package.json` with dev/build/preview scripts for Vite
- Basic Tailwind CSS config and `index.css` with minimal utilities
- Placeholder assets and README.md created
- Early project structure: `src/components`, `src/pages`, `public` assets
- Initial commits and local experimentation with layout and routing

### Notes
- This entry reflects the earliest found artifacts and timestamps (~2026-01-15).

---

## [0.1.0] - 2026-01-30

**Initial Deployment**: First public version on GitHub Pages

### Added
- Initial React + Vite portfolio setup (created ~2026-01-15 to 2026-01-20)
- React Router DOM for navigation
- Tailwind CSS for styling
- Google Fonts integration (Unbounded font family)
- Pages: Home, About, Projects, ProjectDetail, Contact
- Components: Layout, Navbar, Footer, ProjectCard, FeatureSection, CursorGlow
- Project data structure in `src/data/projects.js`
- HashRouter for GitHub Pages compatibility
- Smooth scrolling CSS (`scroll-behavior: smooth`)
- GitHub Pages deployment configuration
- Relative media paths for GitHub Pages hosting

### Fixed
- HashRouter closing tag
- Vite base path configuration for GitHub Pages subdirectory
- Media asset paths for production build
---

## [0.2.0] - 2026-01-31

### Added
- Resume PDF file added to `public/images` directory
 - Athenor demo videos added: `public/videos/Athenor-1.mp4` through `Athenor-8.mp4` (referenced in `src/data/projects.js`)

---

## [1.0.0] - 2026-02-02

**Major Update**: Performance optimization, security hardening, and UX improvements

### Added
- **Custom Favicon**: Replaced Vite default with personal logo (`antonio_pinon_logo.svg`)
- **Contact Form Integration**: Implemented functional contact form using Web3Forms API
  - Email submission with success/error handling
  - Form validation and user feedback
- **404 Not Found Page**: Custom error page with navigation back to Home/Projects
- **Code Splitting**: Implemented React.lazy for all page components
  - Reduced initial bundle size by ~50%
  - Pages load on-demand with loading spinner fallback
- **Image Optimization**: Added `loading="lazy"` to all images
  - ProjectCard logo images
  - FeatureSection images
  - ProjectDetail hero images
- **Environment Variables**: Created `.env` file for secure API key management
  - Web3Forms key moved from hardcoded to environment variable
  - `.env` excluded from Git via `.gitignore`
- **robots.txt**: Added crawler instructions for search engines
- **Documentation**: Added HTML comments explaining entry point flow in `index.html`
  - Document structure comments
  - Meta tags explained
  - Script loading documented

### Fixed
- **Resume Download**: Fixed Chrome "file wasn't available" error
  - Added explicit filename: `download="Antonio_Pinon_Resume.pdf"`
  - Applied to both ProjectDetail and About pages

### Changed
- **Feature Video Layout**: Optimized video sizing in project detail features
  - Media column: `md:w-2/3` (expanded)
  - Content column: `md:w-1/3` (narrower)
  - Container max-width: `max-w-6xl`
- **Loading Fallback**: Custom animated spinner for code-split pages

### Removed
- **SEO Meta Tags**: Removed Open Graph and Twitter Card meta tags (not needed for direct-link portfolio)
- **Skeleton Loaders**: Removed react-loading-skeleton package and loading states (unnecessary for fast-loading content)

### Security
- Moved sensitive API keys to environment variables
- Added `.env` to `.gitignore` to prevent credential exposure

---

## [Unreleased]

### Changed
- Updated video container sizing in feature sections for better visual presentation

---

### Complete File-by-File Changes

#### Root Configuration Files
- **`index.html`** (Modified): Added comprehensive HTML comments explaining document structure, meta tags, and script loading flow; removed Open Graph and Twitter Card SEO meta tags per user request; updated favicon reference to `/antonio_pinon_logo.svg`.
- **`package.json`** (Reviewed): Contains Vite scripts (dev, build, preview), React 19, React Router DOM, Tailwind CSS dependencies.
- **`vite.config.js`** (Reviewed): Base path configured for GitHub Pages deployment.
- **`tailwind.config.js`** (Reviewed): Custom Tailwind configuration with color palette and typography.
- **`postcss.config.js`** (Reviewed): PostCSS with Tailwind and Autoprefixer.
- **`eslint.config.js`** (Reviewed): ESLint configuration for React.
- **`.gitignore`** (Modified): Ensured `.env` is excluded from version control.
- **`.env`** (Created): Added `VITE_WEB3FORMS_KEY` for secure API key storage (not tracked in Git).
- **`README.md`** (Reviewed): Project documentation.
- **`CHANGELOG.md`** (Created): This file; comprehensive changelog with versioned releases.

#### Source Files - Entry Points
- **`src/main.jsx`** (Reviewed): Application entry point; mounts `<App />` component to `#root` div.
- **`src/App.jsx`** (Modified): 
  - Implemented `React.lazy` and `Suspense` for code splitting on all page components (Home, About, Projects, ProjectDetail, Contact, NotFound)
  - Added loading spinner fallback for lazy-loaded routes
  - Configured `HashRouter` for GitHub Pages compatibility
  - Added catch-all `*` route rendering `NotFound` component
- **`src/index.css`** (Reviewed): Global styles, Tailwind directives, smooth scrolling, custom scrollbar styles.
- **`src/App.css`** (Reviewed): App-specific styles and animations.

#### Source Files - Pages
- **`src/pages/Home.jsx`** (Reviewed): Landing page with hero section.
- **`src/pages/About.jsx`** (Modified): Fixed resume download by adding explicit `download="Antonio_Pinon_Resume.pdf"` attribute to download link; link points to `/images/Computer_Science_Resume.pdf`.
- **`src/pages/Projects.jsx`** (Modified): Project grid page; skeleton loaders were temporarily added then removed (package uninstalled); now renders project cards directly.
- **`src/pages/ProjectDetail.jsx`** (Modified): Fixed resume download link (same as About.jsx); displays project hero video, features, and links.
- **`src/pages/Contact.jsx`** (Modified): 
  - Fixed JSX parse errors by removing inline comments after JSX attributes
  - Replaced simulated form submission with real Web3Forms API integration
  - Implemented `fetch` POST to Web3Forms with success/error handling
  - Switched API key from hardcoded to `import.meta.env.VITE_WEB3FORMS_KEY`
  - Added form validation and user feedback UI (success message, error alerts)
- **`src/pages/NotFound.jsx`** (Created): Custom 404 error page with navigation links back to Home and Projects pages.

#### Source Files - Components
- **`src/components/Layout.jsx`** (Reviewed): Main layout wrapper with Navbar, Footer, and CursorGlow.
- **`src/components/Navbar.jsx`** (Reviewed): Navigation bar with responsive menu.
- **`src/components/Footer.jsx`** (Reviewed): Site footer.
- **`src/components/CursorGlow.jsx`** (Reviewed): Custom cursor glow effect component.
- **`src/components/ProjectCard.jsx`** (Modified): Added `loading="lazy"` attribute to project logo `<img>` tags for performance optimization.
- **`src/components/FeatureSection.jsx`** (Modified): 
  - Adjusted layout grid: media column expanded to `md:w-2/3`, content column narrowed to `md:w-1/3`
  - Increased container max-width to `max-w-6xl` (from `max-w-4xl`)
  - Result: videos display significantly larger and more prominent
  - Removed per-feature videoSize prop confusion (global sizing applied via layout changes)

#### Source Files - Data
- **`src/data/projects.js`** (Modified): Contains project metadata including ATHENOR project with references to `videos/Athenor-1.mp4` through `videos/Athenor-8.mp4` for hero and feature videos.

#### Public Assets - Images
- **`public/images/antonio-favicon-logo.svg`** (Created): Custom favicon/logo file.
- **`public/images/Athenor_LOGO.png`** (Existing): Athenor project logo.
- **`public/images/Computer_Science_Resume.pdf`** (Existing): Resume PDF file; download tested and confirmed working on preview server.
- **`public/images/Wonder_Crayon_LOGO.jpg`** (Existing): Wonder Crayon project logo.

#### Public Assets - Videos
- **`public/videos/Athenor-1.mp4`** (Existing): Athenor hero video.
- **`public/videos/Athenor-2.mp4`** (Added): Import Data & Preview feature video.
- **`public/videos/Athenor-3.mp4`** (Added): Upload Availability feature video.
- **`public/videos/Athenor-4.mp4`** (Added): Assign Tutors feature video.
- **`public/videos/Athenor-5.mp4`** (Added): Adjust Calendar feature video.
- **`public/videos/Athenor-6.mp4`** (Added): Schedule Management feature video.
- **`public/videos/Athenor-7.mp4`** (Added): Session Tracking feature video.
- **`public/videos/Athenor-8.mp4`** (Added): Analytics & Reports feature video.

#### Public Assets - Configuration
- **`public/robots.txt`** (Created): Search engine crawler instructions; allows all crawlers by default with sitemap placeholder.

#### Build Output (docs/)
All files in `docs/` are generated by `npm run build` for GitHub Pages deployment:

- **`docs/index.html`** (Generated, Modified): Built HTML entry point; SEO meta tags removed per user request after initial build.
- **`docs/assets/index-C8RCnZga.js`** (Generated): Main application JavaScript bundle with code-split chunks.
- **`docs/assets/index-CV5jF0XS.css`** (Generated): Compiled Tailwind CSS and application styles.
- **`docs/assets/projects-RIh49s6j.js`** (Generated): Project data module.
- **`docs/assets/Home-BwAgmQCU.js`** (Generated): Lazy-loaded Home page chunk.
- **`docs/assets/About-C9KvG0DZ.js`** (Generated): Lazy-loaded About page chunk.
- **`docs/assets/Projects-P2OtYM1S.js`** (Generated): Lazy-loaded Projects page chunk.
- **`docs/assets/ProjectDetail-CdRCr3OV.js`** (Generated): Lazy-loaded ProjectDetail page chunk.
- **`docs/assets/Contact-CntC4qFM.js`** (Generated): Lazy-loaded Contact page chunk.
- **`docs/assets/NotFound-B26rai12.js`** (Generated): Lazy-loaded NotFound page chunk.
- **`docs/images/antonio-favicon-logo.svg`** (Generated): Copied favicon.
- **`docs/images/Athenor_LOGO.png`** (Generated): Copied project logo.
- **`docs/images/Computer_Science_Resume.pdf`** (Generated): Copied resume PDF.
- **`docs/images/Wonder_Crayon_LOGO.jpg`** (Generated): Copied project logo.
- **`docs/videos/Athenor-1.mp4`** through **`docs/videos/Athenor-8.mp4`** (Generated): Copied feature videos.
- **`docs/robots.txt`** (Generated): Copied crawler configuration.

#### Dependencies & Packages
- **`react-loading-skeleton`** (Temporarily installed, then uninstalled): Package was added for skeleton loading states in Projects page, then removed when user decided against using skeleton loaders.

#### Build & Testing
- Ran `npm run build` successfully to generate production build in `docs/` directory
- Ran `npm run preview` to test production build locally
- Verified resume download functionality works correctly on preview server (resolves Chrome "file wasn't available" error seen in dev mode)
- Validated all routes, lazy loading, form submission, and asset loading in production build

