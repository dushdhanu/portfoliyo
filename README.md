# ⚡ Dushmanthi Dhananjana — Personal Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-dushdhanu.github.io%2Fportfoliyo-00f2fe?style=for-the-badge&logo=googlechrome&logoColor=white)](https://dushdhanu.github.io/portfoliyo/)
[![React 18](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Actions CI/CD](https://img.shields.io/badge/GitHub_Actions-Automated_Deploy-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/dushdhanu/portfoliyo/actions)

Welcome to the official repository for my personal developer portfolio, engineered to showcase full-stack software applications, backend RESTful microservices, mobile systems, cybersecurity research, and verified academic credentials.

🌐 **Live Website:** [https://dushdhanu.github.io/portfoliyo/](https://dushdhanu.github.io/portfoliyo/)  
💼 **LinkedIn Profile:** [https://www.linkedin.com/in/dushmanthi-dhananjana/](https://www.linkedin.com/in/dushmanthi-dhananjana/)  
🐙 **GitHub Profile:** [https://github.com/dushdhanu](https://github.com/dushdhanu)  

---

## ✨ Key Architectural Highlights

* **Cinematic Luxury Preloader:** Dynamic entrance splash screen with letter-by-letter staggered animation, glowing progress counter, and an elegant curtain-reveal transition.
* **Real-time GitHub REST API Integration:** Dynamic client-side synchronization with public repository metadata (`stars`, `forks`, `languages`, `last updated`) with resilient rate-limit fallback handling.
* **Verified Credentials Gallery:** Modular certifications section with category filtering and an interactive high-resolution modal preview for images and PDF documents.
* **Live GitHub Activity Breakdown:** Dynamic language distribution percentages calculated directly from active non-fork repositories without hardcoded numbers.
* **Glassmorphic UI & Micro-interactions:** Cyberpunk-inspired dark/light theme engine, ambient glowing aura backdrops, smooth spring physics powered by Framer Motion, and accessible keyboard navigation.
* **Automated CI/CD Pipeline:** Fully configured GitHub Actions workflow deploying Vite production bundles straight to GitHub Pages upon pushing to `main`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, TypeScript (Strict Mode) |
| **Styling & Design** | Tailwind CSS 3.4, PostCSS, Custom Neon Glow Utilities |
| **Motion & Physics** | Framer Motion 11 |
| **Icons & Media** | Lucide React |
| **Build & Tooling** | Vite 6, Node.js, TypeScript Compiler (`tsc`) |
| **Deployment & CI/CD** | GitHub Pages, GitHub Actions (`deploy.yml`) |

---

## 📁 Project Architecture

```
portfoliyo/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── certificates/               # Directory for uploaded certificate images/PDFs
│   │   └── README.md
│   ├── 404.html                    # GitHub Pages Single-Page Application redirect handler
│   ├── favicon.svg                 # SVG Brand favicon
│   ├── my.jpeg                     # Profile portrait picture
│   └── resume.pdf                  # Uploadable static resume document
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BackgroundGlow.tsx  # Ambient reactive backdrop aura
│   │   │   ├── CertificateModal.tsx# High-resolution certificate & PDF previewer
│   │   │   ├── Footer.tsx          # Responsive footer with social links
│   │   │   ├── Navbar.tsx          # Sticky glass navigation with scroll spy
│   │   │   ├── Preloader.tsx       # Cinematic introductory splash screen
│   │   │   ├── ResumePdfModal.tsx  # A4 formatted printable/downloadable CV modal
│   │   │   ├── SectionHeader.tsx   # Consistent typography and gradient pill badges
│   │   │   └── ThemeToggle.tsx     # Dark / Light mode toggle switch
│   │   └── sections/
│   │       ├── Hero.tsx            # Main headline, typewriter roles & cyber portrait
│   │       ├── About.tsx           # Narrative bio, story, and core pillars
│   │       ├── Skills.tsx          # Categorized technical competencies
│   │       ├── Projects.tsx        # Projects grid with dynamic GitHub synchronization
│   │       ├── Certifications.tsx  # Credential cards & verified LinkedIn sync
│   │       ├── GithubActivity.tsx  # Real-time language charts & repository metrics
│   │       ├── Research.tsx        # Lightweight cryptography & IoMT edge security
│   │       ├── ExperienceEdu.tsx   # Academic trajectory and internship milestones
│   │       └── Contact.tsx         # Working mailto form & direct contact links
│   ├── context/
│   │   └── ThemeContext.tsx        # Context API dark/light theme state provider
│   ├── data/
│   │   ├── certifications.ts       # Easy-to-edit verified credentials data file
│   │   ├── portfolioData.ts        # Central unified export hub
│   │   ├── profile.ts              # Personal bio, contact information, and socials
│   │   ├── projects.ts             # Featured projects list & verified repositories
│   │   └── skills.ts               # Technical competencies and toolchains
│   ├── types/
│   │   └── portfolio.ts            # TypeScript interfaces and schema definitions
│   ├── App.tsx                     # Main application layout wrapper
│   ├── index.css                   # Global Tailwind utilities and scrollbar rules
│   └── main.tsx                    # React DOM root entry point
├── .gitignore                      # Git exclusion rules (node_modules, dist, etc.)
├── package.json                    # Project metadata and dependencies
├── tailwind.config.js              # Custom color palette and animation keyframes
├── tsconfig.json                   # Strict TypeScript compiler options
└── vite.config.ts                  # Vite config with base path /portfoliyo/
```

---

## 🚀 Local Development Setup

### Prerequisites
* **Node.js** (v18.0 or higher recommended)
* **npm** (v9.0 or higher)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/dushdhanu/portfoliyo.git
   cd portfoliyo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/portfoliyo/`.

4. Build for production:
   ```bash
   npm run build
   ```
   The production-ready bundle will be compiled into the `dist/` folder.

---

## 📝 How to Update Your Content

* **Update Profile & Contact Info:** Open `src/data/profile.ts` to update your email, phone, location, bio, or social links.
* **Add a Project:** Open `src/data/projects.ts` and add an object with your GitHub repository URL, description, and technologies.
* **Add a Certificate:** Place your certificate image or PDF in `public/certificates/` and register the details in `src/data/certifications.ts`.
* **Update Profile Photo:** Replace `public/my.jpeg` with your latest photo.
* **Update Resume:** Save your resume PDF as `public/resume.pdf` for instant downloads.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
