# Akash R A — Portfolio Website

An elegant, sleek portfolio webpage built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It combines professional cybersecurity achievements with deep creative fantasy worldbuilding.

## 🎨 Design System & Aesthetics

- **Color Scheme**:
  - **Obsidian Dark Theme**: `#0a0a0c`, `#3b3b40`, `#262626` base backgrounds.
  - **Ruby / Crimson Accents**: Rose glow `#f43f5e`, `#e11d48` honoring Satoshi's crimson affinity.
  - **Ivory Highlights**: `#fefef9`, `#fdfcf0` for elegant high-contrast readability.
- **Typography**:
  - **Calligraphic & Display**: `Playfair Display` & `Cormorant Garamond` for headings and titles.
  - **Script Accent**: `Dancing Script` for delicate intros and signatures.
  - **Monospace**: `JetBrains Mono` for cybersecurity metrics, CVSS indicators, and code tags.
  - **Body**: `Inter` for clean readability.
- **Substituted Assets**:
  - High-resolution imagery from `Downloads` and `Pictures` (hero backdrops, avatar, creative covers, Waybar rice previews).

## 📁 Project Structure

```
/home/yui/work/portfolio/
├── public/
│   └── images/              # Curated and mapped substitute images
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom styling, fonts, glassmorphism, scrollbars
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main portfolio homepage
│   │   └── projects/
│   │       ├── layout.tsx   # Dedicated metadata for projects subpage
│   │       └── page.tsx     # Neat Projects subpage (Technical & Creative)
│   └── components/
│       ├── Navbar.tsx       # Glassmorphism header with cross-page navigation
│       ├── Footer.tsx       # Social links, branding, and copyright
│       └── AnimatedSection.tsx # Framer Motion scroll reveals
├── tailwind.config.ts       # Custom font families, colors, and keyframe animations
├── tsconfig.json
└── package.json
```

## 🚀 Running the Project

```bash
# Load Node (v24 LTS installed via fnm)
export PATH="/home/yui/.local/share/fnm:$PATH"
eval "$(fnm env)"
fnm use v24.22.0

# Development server
npm run dev

# Or build & start production server
npm run build
npm run start
```

## 🌟 Highlighted Sections

1. **Home (`/`)**:
   - **Hero Section**: Calligraphic hero typography, TryHackMe Legend & Top 1% badges, substitute avatar.
   - **About Me**: Bilingual capability, cybersecurity background, and creative pursuits.
   - **Experience**: Timeline featuring Joy University, Future Interns (VLAN / Juice Shop), and CSC Computer Education.
   - **Education & Certifications**: Master Diploma (Craw Security), BSc Computer Science (NMCC), Google Cybersecurity Certificate, Oracle OCI.
   - **Technical Arsenal**: Categorized skill pills (Security, Frameworks, Cloud, Development, Tools).
   - **Contact**: Interactive form and contact direct links.

2. **Projects Subpage (`/projects`)**:
   - **Filter Controls**: Switch dynamically between *All Works*, *Technical & Security*, and *Creative & Lore*.
   - **Technical Projects**:
     - OWASP Juice Shop Penetration Test Report (Burp Suite, Nmap, CVSS).
     - Networking Knowledge Doctrine.
     - Shelves — Library Management System (PHP/MySQL lead).
     - Secure Home Network Architecture (Cisco Packet Tracer).
     - Adso's Omarchy Waybar Themes (v1.3–v1.6).
   - **Creative Works**:
     - *Chronicles of Lumina* — The 12 Sovereign Nations, S.O.U.L System, The Sages.
     - *Satoshi Shogun* — Character philosophy, Anti-Matter / Void element, Slimesuit adaptation.
     - *Ruins of Chaos* — Yui Shogun identity arc, Zac Zander dual-protagonist ENTP strategist.
     - **Interactive Manuscript Reader**: Read the Royal Academy colonnade scene draft excerpt directly on the page.
