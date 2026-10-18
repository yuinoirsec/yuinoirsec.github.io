# Portfolio Website — Complete Technical Documentation & Deployment Guide

This documentation provides an exhaustive reference for the portfolio project created in `/home/yui/work/portfolio`. It incorporates details from **`latest-resume.pdf`**, the creative skills inventory, the template-driven archive system, font descender clipping fixes, and the automated script for easily archiving AI contents.

---

## 1. File Structure Overview

```
/home/yui/work/portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD pipeline for GitHub Pages
├── public/
│   ├── .nojekyll                   # Disables Jekyll on GitHub Pages (required for _next/)
│   └── images/                     # Static media assets & AI content visuals
│       ├── about-bg.png            # Section background backdrop
│       ├── ai-cyberpunk.jpg        # Cyberpunk environmental concept art
│       ├── ai-kitsune.webp         # Generative AI character ideation visual
│       ├── amv-edit.jpg            # AMV and dynamic video edit thumbnail asset
│       ├── avatar.jpg              # Profile avatar card
│       ├── contact-bg.png          # Contact section backdrop
│       ├── creative-bg.jpg         # Creative works backdrop
│       ├── hero-bg.png             # Fullscreen hero background
│       ├── japan-shrine.jpg        # Networking Knowledge Doctrine card visual
│       ├── lumina-cover.jpg        # Chronicles of Lumina banner & lore backdrop
│       ├── profile.jpg             # About section portrait photo
│       ├── projects-bg.jpg         # Projects page hero banner
│       ├── hizz-campaign-cover.jpg # Hizz campaign landscape hero cover
│       ├── hizz-*.jpg              # Hizz flavor variants & promotional stills
│       ├── ruins-of-chaos.jpg      # Satoshi Shogun & Ruins of Chaos artwork
│       ├── waybar-preview.png      # Home network / Waybar preview
│       ├── waybar-v14.png          # Waybar v1.4 green theme preview
│       └── waybar-v16.png          # Adso Omarchy Waybar v1.6 theme preview
│   └── videos/                     # Web-optimized campaign video MP4 clips
│       ├── hizz-lineup-outro.mp4
│       ├── hizz-product-lineup.mp4
│       ├── hizz-strawberry-splash.mp4
│       └── hizz-summer-picnic.mp4
├── scripts/
│   └── add-project.js              # Automation script to archive new AI / creative projects
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind base layers, fonts, descender clipping fixes
│   │   ├── layout.tsx              # Root HTML wrapper and SEO meta tags
│   │   ├── page.tsx                # Homepage (Multidisciplinary profile, Creative + Tech Skills)
│   │   └── projects/
│   │       ├── layout.tsx          # Dedicated metadata for projects subpage
│   │       └── page.tsx            # Unified Archive subpage with category filters
│   ├── components/
│   │   ├── AnimatedSection.tsx     # Framer Motion scroll-triggered reveal wrapper
│   │   ├── Footer.tsx              # Global footer with social icons and updated contact info
│   │   └── Navbar.tsx              # Sticky glassmorphism nav with cross-page routing
│   └── data/
│       ├── projects.json           # Central project database (technical & creative/AI entries)
│       └── projects.ts             # TypeScript definitions & typed accessors
├── next.config.mjs                 # Next.js static export & unoptimized image settings
├── package.json                    # Dependencies & scripts (build, dev, add:project)
├── tailwind.config.ts              # Custom colors, typography & keyframes
├── tsconfig.json                   # TypeScript compiler options & `@/*` path aliases
├── WORKFLOW_AND_BUILD_GUIDE.md     # Guide on source vs. build output, dev server, and build lifecycle
└── README.md                       # Project overview and quick start commands
```

---

## 2. Variables & Data Structures Reference

### 2.1 Theme & Styling Tokens (`tailwind.config.ts` & `src/app/globals.css`)

| Token / Class | Value / Definition | Purpose |
| :--- | :--- | :--- |
| `font-calligraphy` | `'Playfair Display', serif` | Primary headings, hero titles, section headlines |
| `font-heading` | `'Cormorant Garamond', serif` | Card titles, roles, subtitle quotes |
| `font-body` | `'Inter', sans-serif` | Clean descriptive copy and bullet highlights |
| `font-mono` | `'JetBrains Mono', monospace` | Dates, stats, tags, code snippets, CVSS scores |
| `font-accent` | `'Dancing Script', cursive` | Section badges, category labels, delicate signatures |
| `gradient-text` | `bg-gradient-to-r ... bg-clip-text text-transparent inline-block pb-3 pr-2` | Gradient text with **descender preservation** (fixes letter 'j' clipping) |
| `bg-obsidian-950` | `#0a0a0c` | Deep obsidian page background |
| `text-rose-400` / `bg-rose-600` | `#f43f5e` / `#e11d48` | Primary ruby/crimson accent color |
| `text-ivory-100` | `#fefef9` | High-contrast readable text |

### 2.2 Preserving Font Descenders (Fixing the Letter "j" Glitch)

In calligraphic fonts like *Playfair Display*, the lowercase letter **"j"** features a sweeping tail that drops significantly below the font baseline. When using CSS `bg-clip-text text-transparent`, browsers clip the painted area strictly to the content box. 

**The Applied Fix in `src/app/globals.css`**:
```css
.gradient-text {
  @apply bg-gradient-to-r from-ivory-200 via-rose-300 to-ivory-400 bg-clip-text text-transparent inline-block pb-3 pr-2;
  overflow: visible;
  line-height: 1.25;
}
```
Setting `inline-block`, bottom padding (`pb-3`), right padding (`pr-2`), and `overflow: visible` guarantees that "j", "g", "y", "p", and "q" render in their entirety without clipping.

---

### 2.3 Central Project Database (`src/data/projects.json`)

All project entries follow a uniform, template-compatible schema:

```typescript
export interface ProjectItem {
  id: string;               // Unique slug (e.g. "ai-character-ideation")
  title: string;            // Headline title
  subtitle: string;         // Category or phase subtitle
  category: 'ai' | 'writing' | 'technical' | 'media' | 'freelance';
  categoryLabel: string;    // Human-readable badge text
  description: string;      // 1-2 sentence overview
  details: string[];        // 3-4 bullet achievements or lore points
  tags: string[];           // Tool, model, or methodology badges
  image: string;            // Path in /public/images/...
  accent: string;           // Gradient accent overlay
  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
  featured?: boolean;
}
```

---

## 3. How to Easily Archive New AI Contents & Projects

Instead of editing React TSX files or manually uploading images to different directories, use the automated script:

### Method 1: Interactive Wizard
```bash
cd /home/yui/work/portfolio
npm run add:project
```
The wizard will guide you through:
1. **Category**: Choose between `ai`, `writing`, `media`, `freelance`, or `technical`.
2. **Project Title & Subtitle**.
3. **Description**.
4. **Tags / Labels** (comma-separated, e.g., `Prompt Engineering, Gemini, Concept Art`).
5. **Key Highlights / Details** (semicolon-separated).
6. **Image File Path**: You can enter any local path (e.g. `/home/yui/Downloads/my-new-ai-art.png`). The script will **automatically copy** the image into `public/images/` and configure the asset path for you!
7. **Optional Links** (GitHub repository, live demo, video).

### Method 2: Command-Line Flags
```bash
node scripts/add-project.js \
  --title "Cyberpunk Neon Maiden" \
  --category ai \
  --subtitle "Midjourney & Photoshop Retouching" \
  --description "Detailed prompt exploration focusing on neon reflections and volumetric atmosphere." \
  --image "/home/yui/Downloads/render.png" \
  --tags "AI Art, Prompt Engineering, Cyberpunk" \
  --details "Multi-pass lighting generation; Color grading in Lightroom; 4K upscale"
```

Once executed, `src/data/projects.json` is automatically updated and formatted, and the new card appears immediately in the portfolio archive!

---

## 4. How to Deploy to `yuinoir.github.io`

### Automated GitHub Actions Workflow (Recommended)

1. **Initialize Git & Commit**:
   ```bash
   cd /home/yui/work/portfolio
   git init
   git add .
   git commit -m "feat: complete multidisciplinary portfolio and project archive"
   ```

2. **Add Remote & Push to `main`**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/yuinoir/yuinoir.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   * Navigate to your repository: `https://github.com/yuinoir/yuinoir.github.io`.
   * Open **Settings** → **Pages**.
   * Under **Build and deployment** → **Source**, select **GitHub Actions**.
   * The pipeline in [`.github/workflows/deploy.yml`](file:///home/yui/work/portfolio/.github/workflows/deploy.yml) will build the static export and publish your site at `https://yuinoir.github.io/`.
