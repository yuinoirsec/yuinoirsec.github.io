#!/usr/bin/env node

/**
 * add-project.js
 *
 * Automation script to easily archive new projects (especially AI contents,
 * concept art, writing pieces, or technical work) into the portfolio without
 * having to manually edit React components.
 *
 * Usage:
 *   Interactive: node scripts/add-project.js
 *   CLI Flags:   node scripts/add-project.js --title "Title" --category ai --image "/path/to/img.png"
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(PROJECT_ROOT, 'src', 'data', 'projects.json');
const IMAGES_DIR = path.join(PROJECT_ROOT, 'public', 'images');

const CATEGORY_LABELS = {
  ai: 'AI Content & Concept Art',
  writing: 'Original Fiction & Lore',
  media: 'Video & Content Creation',
  freelance: 'Freelance Software & Media',
  technical: 'Security & System Engineering',
};

const CATEGORY_ACCENTS = {
  ai: 'from-cyan-500/20 to-rose-500/20',
  writing: 'from-amber-500/20 to-rose-500/20',
  media: 'from-rose-500/20 to-orange-500/20',
  freelance: 'from-emerald-500/20 to-blue-600/20',
  technical: 'from-rose-500/20 to-red-600/20',
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function copyImageIfProvided(inputPath, projectSlug) {
  if (!inputPath || !inputPath.trim()) {
    return '/images/creative-bg.jpg';
  }

  const resolved = path.resolve(inputPath.trim());
  if (!fs.existsSync(resolved)) {
    console.warn(`\n[!] Warning: Image "${resolved}" not found. Using fallback placeholder.`);
    return '/images/creative-bg.jpg';
  }

  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const ext = path.extname(resolved).toLowerCase();
  const destFileName = `${projectSlug}${ext}`;
  const destPath = path.join(IMAGES_DIR, destFileName);

  fs.copyFileSync(resolved, destPath);
  console.log(`[✓] Image copied to /public/images/${destFileName}`);
  return `/images/${destFileName}`;
}

function parseCliArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].substring(2);
      const val = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      parsed[key] = val;
    }
  }
  return parsed;
}

async function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  console.log('\n======================================================');
  console.log('   ✦ Akash Portfolio — New Project Archive Entry ✦   ');
  console.log('======================================================\n');

  console.log('Categories:');
  console.log('  1) ai        — AI Generated Content & Concept Art');
  console.log('  2) writing   — Fiction, Worldbuilding & Lore');
  console.log('  3) media     — Video Editing, AMVs & Gameplay');
  console.log('  4) freelance — Software & Freelance Media');
  console.log('  5) technical — Security, Networks & Systems\n');

  const catInput = (await question('Select category [ai/writing/media/freelance/technical] (default: ai): ')).trim().toLowerCase() || 'ai';
  const category = ['ai', 'writing', 'media', 'freelance', 'technical'].includes(catInput) ? catInput : 'ai';

  const title = (await question('Project Title: ')).trim();
  if (!title) {
    console.error('Error: Project title cannot be empty.');
    rl.close();
    process.exit(1);
  }

  const subtitle = (await question('Subtitle / Phase (e.g., "Generative AI Prompting Series"): ')).trim() || 'Creative Archive Work';
  const description = (await question('Description (1-2 sentences): ')).trim() || 'A creative project showcasing artistic and technical execution.';

  const tagsInput = (await question('Tags / Labels (comma-separated, e.g. "Prompting, Midjourney, Lore"): ')).trim();
  const tags = tagsInput ? tagsInput.split(',').map((t) => t.trim()).filter(Boolean) : ['Creative', 'Archive'];

  const detailsInput = (await question('Key Highlights / Details (separated by semicolons ;): ')).trim();
  const details = detailsInput
    ? detailsInput.split(';').map((d) => d.trim()).filter(Boolean)
    : ['Designed and refined prompt parameters', 'Integrated with storytelling workflow'];

  const imageInput = (await question('Image file path (optional, will auto-copy to public/images): ')).trim();
  const githubLink = (await question('GitHub Link (optional): ')).trim();
  const demoLink = (await question('Live Demo / Video Link (optional): ')).trim();

  rl.close();

  return {
    category,
    title,
    subtitle,
    description,
    tags,
    details,
    imageInput,
    githubLink,
    demoLink,
  };
}

async function main() {
  const cliArgs = parseCliArgs();
  let projectData;

  if (cliArgs.title) {
    // Non-interactive CLI mode
    projectData = {
      category: cliArgs.category || 'ai',
      title: cliArgs.title,
      subtitle: cliArgs.subtitle || 'Creative Archive Work',
      description: cliArgs.description || 'A creative exploration and archive project.',
      tags: cliArgs.tags ? cliArgs.tags.split(',').map((t) => t.trim()) : ['Creative', 'Archive'],
      details: cliArgs.details ? cliArgs.details.split(';').map((d) => d.trim()) : ['Custom creative production'],
      imageInput: cliArgs.image || '',
      githubLink: cliArgs.github || '',
      demoLink: cliArgs.demo || '',
    };
  } else {
    projectData = await runInteractive();
  }

  const slug = slugify(projectData.title);
  const imagePath = copyImageIfProvided(projectData.imageInput, slug);

  const newEntry = {
    id: slug,
    title: projectData.title,
    subtitle: projectData.subtitle,
    category: projectData.category,
    categoryLabel: CATEGORY_LABELS[projectData.category] || 'Creative Archive',
    description: projectData.description,
    details: projectData.details,
    tags: projectData.tags,
    image: imagePath,
    accent: CATEGORY_ACCENTS[projectData.category] || 'from-rose-500/20 to-purple-500/20',
    featured: false,
  };

  if (projectData.githubLink || projectData.demoLink) {
    newEntry.links = {};
    if (projectData.githubLink) newEntry.links.github = projectData.githubLink;
    if (projectData.demoLink) newEntry.links.demo = projectData.demoLink;
  }

  // Read existing projects.json
  if (!fs.existsSync(DATA_FILE)) {
    console.error(`Error: Data file not found at ${DATA_FILE}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(DATA_FILE, 'utf8');
  const db = JSON.parse(rawData);

  if (projectData.category === 'technical') {
    db.technicalProjects = db.technicalProjects || [];
    db.technicalProjects.push(newEntry);
  } else {
    db.creativeProjects = db.creativeProjects || [];
    db.creativeProjects.push(newEntry);
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8');

  console.log('\n======================================================');
  console.log(`[✓] SUCCESS: Added "${newEntry.title}" to project archive!`);
  console.log(`[✓] Category: ${newEntry.categoryLabel}`);
  console.log(`[✓] Image Asset: ${newEntry.image}`);
  console.log(`[✓] Tags: ${newEntry.tags.join(', ')}`);
  console.log('======================================================\n');
  console.log('You can now run "npm run dev" or "npm run build" to view it live.\n');
}

main().catch((err) => {
  console.error('[!] Error adding project:', err);
  process.exit(1);
});
