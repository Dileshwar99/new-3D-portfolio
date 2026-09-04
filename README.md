# 🚀 Dileshwar Kumar — Next-Gen 3D Developer Portfolio

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A futuristic, high-performance 3D interactive developer portfolio built with **React**, **Three.js / React Three Fiber**, **TypeScript**, and **Tailwind CSS**. Designed with an Awwwards-inspired dark aesthetic, cinematic WebGL visuals, real-time Power BI & frontend simulators, and ultra-smooth 60+ FPS responsiveness across all devices.

---

## 👨‍💻 About Dileshwar Kumar

- 🎓 **Education**: Computer Science & Engineering Undergraduate at **Panjab University (SSGPURC, Hoshiarpur)** (2023–2027)
- 💼 **Experience**: Web Development Intern at **Oasis Infobyte** (Jan 2025 – Feb 2025)
- 📜 **Certification**: **Oracle Cloud Infrastructure (OCI) 2025 Certified Developer Professional** & **Deloitte Data Analytics Simulation**
- 📍 **Location**: Hoshiarpur, Punjab, India
- 📧 **Email**: [dileshwarkumar561@gmail.com](mailto:dileshwarkumar561@gmail.com)
- 🌐 **LinkedIn**: [linkedin.com/in/dileshwarkumar](https://www.linkedin.com/in/dileshwarkumar/)
- 🐙 **GitHub**: [@Dileshwar99](https://github.com/Dileshwar99)

---

## ✨ Key Features & Highlights

### 1. 🌌 Interactive 3D WebGL Experiences
- **Procedural 3D Developer Station**: Fully interactive 3D laptop with dynamic branded code terminal featuring Dileshwar's active university credentials and developer status.
- **Interactive 3D Skills Ecosystem**: Central floating branded core surrounded by 10+ orbiting technology nodes (React, Python, SQL, Power BI, Three.js, C++, etc.) with real-time inspection cards.
- **Holographic Floating Artifacts**: Wireframe geometric meshes, gyro rings, and dynamic mouse-responsive ambient particle field.

### 2. ⚡ Performance & Fluid Architecture
- **60+ FPS Native Fluid Scrolling**: Zero scroll hijacking, optimized canvas DPR limits (`dpr={[1, 1.5]}`), and passive event listeners.
- **Dual-Track Infinite Tech Marquee**: Continuous seamless circular scrolling ticker showcasing 15+ modern tools and languages.
- **Full Screen Edge-to-Edge Layout**: Ultra-wide responsive container scaling seamlessly from 320px mobile screens to 4K desktop displays.

### 3. 🛠️ Embedded Interactive Live Project Simulators
Each featured project includes a built-in real-time interactive simulator directly in the browser:

| # | Project | Category | Live Simulator Features | Source Code |
|---|---------|----------|-------------------------|-------------|
| 01 | **Personal Portfolio Website** | Frontend | Scroll-spy navigation, Typed.js dynamic text, AJAX form feedback simulator | [Repository](https://github.com/Dileshwar99) |
| 02 | **Blinkit Sales Dashboard** | Power BI / DAX | Interactive Tier (1, 2, 3) & Fat Content slicers with dynamic DAX sales recalculation ($1.20M) | [Repository](https://github.com/Dileshwar99/Blinkit-Sales-Dashboard-Power-BI.git) |
| 03 | **Super Store Sales Dashboard** | Power BI / DAX | Multi-category drill-downs (Tech, Office, Furniture) & regional slicers with profit margin analysis | [Repository](https://github.com/Dileshwar99/Power-BI-Super-store-sales-dashboard.git) |
| 04 | **Modern E-Commerce Store** | Frontend | Instant category filtering (Tech, Audio, Fashion), real-time client-side cart, dynamic price recalculation | [Repository](https://github.com/Dileshwar99/ecommerce-website.git) |
| 05 | **Gourmet Restaurant & Booking** | Frontend | Multi-course interactive menu navigation and real-time table reservation simulator | [Repository](https://github.com/Dileshwar99/restaurant-website.git) |

### 4. 📬 Contact & Utility Features
- **Client-Side Form Validation**: Real-time error handling with asynchronous submission feedback and celebratory confetti.
- **One-Click Clipboard**: Instant copy buttons for direct Email and WhatsApp/Phone contact.
- **Direct Resume Download**: Download official PDF resume with verified credentials.

---

## 🛠️ Tech Stack

### Frontend & UI
- **React 18** — Component architecture & state management
- **TypeScript** — Strict type safety and data models
- **Tailwind CSS** — Modern utility-first dark aesthetic design system
- **Framer Motion** — Physics-based springs, staggered entrance animations & modal transitions
- **Lucide React** — Crisp vector iconography

### 3D Visuals & Graphics
- **Three.js** — WebGL rendering engine
- **React Three Fiber (@react-three/fiber)** — React reconciler for Three.js
- **React Three Drei (@react-three/drei)** — 3D camera controls, Float animations, HTML projections & contact shadows

### Build & Tooling
- **Vite** — High-speed ES module bundler and dev server
- **Canvas-Confetti** — Celebration particle effects

---

## 📦 Getting Started & Local Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/Dileshwar99/new-3D-portfolio.git
cd new-3D-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 📂 Project Structure

```
├── public/
│   ├── profile.jpg              # Executive portrait of Dileshwar Kumar
│   └── resume.pdf               # Verified Curriculum Vitae
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroScene.tsx           # 3D laptop station & particle canvas
│   │   │   ├── SkillsEcosystem3D.tsx   # Orbiting tech ecosystem canvas
│   │   │   └── FallbackScene.tsx       # Graceful WebGL fallback
│   │   ├── sections/
│   │   │   ├── Hero.tsx                # Hero introduction & CTA
│   │   │   ├── TechMarquee.tsx         # Dual-track infinite marquee
│   │   │   ├── About.tsx               # Bio, metrics & 3D tilt portrait
│   │   │   ├── SkillsSection.tsx       # Tech skills breakdown
│   │   │   ├── ProjectsSection.tsx     # Featured project cards & filters
│   │   │   ├── ExperienceTimeline.tsx  # Internships & education journey
│   │   │   ├── ResumeCTA.tsx           # Verified CV download banner
│   │   │   ├── ContactSection.tsx      # Contact cards & validated form
│   │   │   └── Footer.tsx              # Footer & copyright
│   │   └── ui/
│   │       ├── Navbar.tsx              # Floating glass navigation bar
│   │       ├── CustomCursor.tsx        # Magnetic follower cursor
│   │       ├── MagneticButton.tsx      # Interactive spring button
│   │       ├── ProjectModal.tsx        # Fullscreen project inspector modal
│   │       ├── ProjectPreviewMockup.tsx# Interactive project simulators
│   │       └── Icons.tsx               # Social & brand SVG icons
│   ├── data/
│   │   └── portfolioData.ts    # Central data source (Bio, Projects, Skills)
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interfaces & types
│   ├── App.tsx                 # Main application root
│   ├── index.css               # Tailwind & custom keyframe animations
│   └── main.tsx                # React DOM entry point
├── index.html                  # HTML entry point with metadata
├── tailwind.config.js          # Tailwind theme configuration
├── tsconfig.json               # TypeScript compiler options
├── vite.config.ts              # Vite configuration
└── package.json                # Project dependencies & scripts
```

---

## 🌟 Connect with Dileshwar

- **GitHub**: [@Dileshwar99](https://github.com/Dileshwar99)
- **LinkedIn**: [Dileshwar Kumar](https://www.linkedin.com/in/dileshwarkumar/)
- **Email**: [dileshwarkumar561@gmail.com](mailto:dileshwarkumar561@gmail.com)

*Engineered with precision by **Dileshwar Kumar** © 2026. All rights reserved.*

