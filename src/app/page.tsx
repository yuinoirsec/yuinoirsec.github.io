'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Code2,
  Terminal,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  BookOpen,
  Palette,
  Send,
  Video,
  Wand2,
  Sparkles,
  Layers,
  Cpu,
  PenTool,
  Film,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';

/* ───────────────────── DATA FROM LATEST RESUME ───────────────────── */

const creativeSkills = {
  'Content Creation': [
    'Gameplay Videos',
    'Anime Music Videos (AMVs)',
    'Dynamic Video Edits',
    'Short-Form Content',
    'Visual Composition',
  ],
  'Video & Photo Editing': [
    'Video Editing',
    'Photo Retouching',
    'Color Correction',
    'Color Grading',
    'Transitions & Pacing',
    'Audio Synchronization',
  ],
  'Creative Development & AI': [
    'Prompt Engineering',
    'AI-Assisted Ideation',
    'Visual Concept Development',
    'Scriptwriting Fundamentals',
    'Storytelling & Lore',
    'Worldbuilding & Characters',
  ],
  'Design & Branding': [
    'Thumbnail Design',
    'Graphic Design',
    'Typography',
    'Visual Hierarchy',
    'Creative Direction',
  ],
  'Creative Software & Tools': [
    'Canva',
    'CapCut',
    'KineMaster',
    'Kdenlive',
    'DaVinci Resolve',
    'Blender',
    'Adobe Photoshop',
    'Adobe Lightroom',
    'PicsArt',
  ],
};

const technicalSkills = {
  'Security & Testing': [
    'Penetration Testing (Burp Suite, Nmap)',
    'Vulnerability Assessment',
    'OWASP Top 10 Exploitation',
    'CVE/CVSS Scoring',
    'Threat Modeling',
    'Secure Network Design (Cisco Packet Tracer)',
    'Encryption at Rest/Transit',
    'Database Access Control',
    'Secure Coding Practices',
  ],
  'Frameworks & Standards': [
    'NIST CSF',
    'MITRE ATT&CK (foundational)',
    'ISO 27001 (awareness)',
    'CIS Controls (awareness)',
  ],
  'Systems & Cloud': [
    'Linux (Arch / Debian)',
    'Windows Server Administration',
    'Virtual Machines (VMware / VirtualBox)',
    'Network Configuration',
    'AWS Fundamentals (EC2, DynamoDB)',
    'Git / GitHub Version Control',
    'Active Directory (foundational)',
  ],
  'Development & Scripting': [
    'Python',
    'Bash Scripting',
    'C / C++',
    'Java',
    'JavaScript',
    'SQL',
    'API Integration',
  ],
  'Security & Dev Tools': [
    'Burp Suite',
    'Nmap',
    'Ghidra',
    'Cisco Packet Tracer',
    'Metasploit',
    'Wireshark',
    'VS Code',
    'GitHub',
  ],
};

const professionalExperience = [
  {
    role: 'Admission Counselor',
    company: 'Joy University',
    period: 'Jun 2026 – Aug 2026',
    category: 'Operations & Communication',
    highlights: [
      'Cleared a 3-month backlog of 1700+ pending admissions data entries within 1 week by streamlining data workflows in the Meritto CRM platform.',
      'Coordinated daily consolidated entry logs across an 8-member counseling team and managed accommodation logistics for 400+ out-of-state prospective students per intake cycle.',
      'Provided bilingual admissions guidance (Malayalam and Hindi), improving outreach for non-English-speaking applicants and contributing to higher campus visit conversions.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'Future Interns',
    period: 'May 2025 – Jun 2025',
    category: 'Cybersecurity',
    highlights: [
      'Designed and deployed a fully segmented home network in Cisco Packet Tracer with VLANs, enforcing access control and VM isolation across personal devices — eliminating lateral movement risk.',
      'Executed a black-box penetration test against OWASP Juice Shop using Burp Suite and Nmap, identifying vulnerabilities mapped to OWASP Top 10 categories, and delivered a formal remediation report accepted by the supervisor.',
      'Applied CVSS scoring methodology to prioritize findings by severity, enabling structured remediation planning across Critical, High, and Medium risk tiers.',
    ],
  },
  {
    role: 'Programming Instructor',
    company: 'CSC Computer Education',
    period: 'Apr 2024 – Jun 2024',
    category: 'Technical Instruction',
    highlights: [
      'Designed and delivered a 3-month programming curriculum (Python, C, C++, Java, HTML/CSS, JavaScript) to 2 batches of 15–20 students each, conducting 15+ one-on-one sessions and achieving a 100% course completion rate.',
      'Expanded the standard curriculum by 1 additional module (JavaScript) for advanced students, increasing course coverage by ~20% beyond the original scope.',
      'Resolved a critical lab infrastructure blocker by manually deploying Windows-7-compatible VS Code build and required extensions via offline VSIX installation — enabling instruction for 30+ students without internet.',
      'Introduced Git/GitHub version control workflows to teaching staff members, improving code collaboration and reducing environment setup time for future cohorts.',
    ],
  },
];

const creativeExperience = [
  {
    role: 'Digital Content Creator & Video Editor',
    company: 'Independent Creative Projects',
    period: 'Ongoing',
    category: 'Media Production',
    highlights: [
      'Created gameplay videos, anime music videos (AMVs), and dynamic rhythmic edits for personal YouTube channels, experimenting with pacing and video assembly across different content formats.',
      'Designed high-CTR custom thumbnails and promotional graphics utilizing Adobe Photoshop, Lightroom, and Canva.',
      'Specialized in audio synchronization, frame-accurate velocity transitions, and stylized color grading.',
    ],
  },
  {
    role: 'Freelance Software & Media Creator',
    company: 'Client Software & Media Delivery',
    period: 'Done',
    category: 'Freelance Delivery',
    highlights: [
      'Engineered and sold bespoke software applications, including a medical diagnosis-checking platform and customized personal portfolio websites.',
      'Delivered freelance photo-retouching, color-correction, and video-editing packages for diverse client requirements.',
      'Managed end-to-end client communications, technical scope definitions, and prompt milestone turnarounds.',
    ],
  },
  {
    role: 'Author & Lore Architect',
    company: 'Chronicles of Lumina (Original Writing)',
    period: 'Ongoing',
    category: 'Creative Writing',
    highlights: [
      'Developing an original multi-arc fantasy novel series featuring 12 Sovereign Nations, the S.O.U.L energy system, and complex political institutions.',
      'Constructing psychological and philosophical character arcs blending Stoicism, Existentialism, and Absurdism (Satoshi Shogun, Yui Shogun, Zac Zander).',
      'Authored comprehensive world codexes, magic tier taxonomies, and drafted full manuscript chapters.',
    ],
  },
];

const certifications = [
  { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google' },
  {
    name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
    issuer: 'Oracle',
  },
  {
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    issuer: 'Oracle',
  },
  { name: 'Cyber Security 101', issuer: 'TryHackMe' },
];

/* ───────────────────── PAGE COMPONENT ───────────────────── */

export default function Home() {
  const [skillTab, setSkillTab] = useState<'all' | 'creative' | 'technical'>('all');
  const [expTab, setExpTab] = useState<'all' | 'professional' | 'creative'>('all');

  return (
    <>
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/70 via-obsidian-950/60 to-obsidian-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/85 via-obsidian-950/50 to-obsidian-950/40" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-ivory-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />

        <div className="section-container relative z-10 pt-36 pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-accent text-rose-400 text-xl mb-3 tracking-wide"
              >
                Welcome, I am
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-calligraphy text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.15] overflow-visible pb-2"
              >
                <span className="gradient-text pb-3 pr-2">Akash</span>
                <br />
                <span className="text-ivory-100">R A</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 flex items-center gap-3"
              >
                <div className="accent-line" />
                <p className="font-heading text-lg md:text-xl text-obsidian-300 italic">
                  Digital Media · Software &amp; Technology
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8 font-body text-obsidian-300 leading-relaxed max-w-xl text-lg"
              >
                A multidisciplinary creator bridging digital media, video editing,
                AI-assisted content production, and worldbuilding with cybersecurity
                penetration testing and technical teaching.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-ivory-50 font-body font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25"
                >
                  <span>Explore Projects &amp; Archive</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="#about"
                  className="group flex items-center gap-2 px-8 py-3.5 border border-obsidian-600 hover:border-rose-500/50 text-ivory-200 font-body font-medium rounded-xl transition-all duration-300 hover:bg-obsidian-900/50"
                >
                  <span>About My Work</span>
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            </div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5 hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-obsidian-700/50 shadow-2xl shadow-rose-500/10">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Akash R A"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -top-4 -left-4 glass-card px-5 py-3 flex items-center gap-2">
                  <Wand2 size={18} className="text-rose-400" />
                  <span className="font-mono text-sm text-ivory-200">
                    Creative &amp; AI
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-obsidian-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-rose-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-950/95 to-obsidian-950" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <p className="font-accent text-rose-400 text-sm tracking-widest uppercase mb-3">
              Multidisciplinary Profile
            </p>
            <h2 className="font-calligraphy text-5xl md:text-6xl font-bold gradient-text pb-3 mb-16 overflow-visible">
              About Me
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Akash R A portrait"
                  width={600}
                  height={700}
                  className="object-cover w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-rose-400" />
                        <div>
                          <p className="font-body text-sm font-semibold text-ivory-100">
                            Kochi, India
                          </p>
                          <p className="font-body text-xs text-obsidian-400">
                            Open to Remote &amp; Global Opportunities
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/30">
                        Multifaceted
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection direction="right" delay={0.3}>
                <p className="font-body text-obsidian-200 leading-relaxed text-lg">
                  I&apos;m a multidisciplinary professional with a background in computer science and experience across software development, cybersecurity, programming instruction, operational coordination, and independent digital media.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.4}>
                <p className="font-body text-obsidian-300 leading-relaxed text-lg">
                  My work spans technical and creative disciplines, from developing software and documenting technical concepts to teaching programming and producing video and photo edits. These experiences have strengthened my approach to problem-solving, communication, and working across different types of projects.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.5}>
                <p className="font-body text-obsidian-300 leading-relaxed text-lg">
                  I value practical experimentation, continuous learning, and clear execution. I&apos;m particularly interested in work that combines technology, creative thinking, and effective communication to turn ideas into useful software, accessible information, or engaging digital content.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.6}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {[
                    {
                      title: 'Software & Technology',
                      icon: <Terminal size={18} className="text-rose-400" />,
                    },
                    {
                      title: 'Digital Media',
                      icon: <Film size={18} className="text-rose-400" />,
                    },
                    {
                      title: 'Communication & Instruction',
                      icon: <BookOpen size={18} className="text-rose-400" />,
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="glass-card p-4 rounded-xl border border-obsidian-700/40 hover-lift flex flex-col justify-between"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-2">
                        {card.icon}
                      </div>
                      <p className="font-heading text-sm md:text-base font-semibold text-ivory-100 leading-snug">
                        {card.title}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SKILLS SECTION (CREATIVE & TECHNICAL) ═══════════ */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900/30 to-obsidian-950" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="font-accent text-rose-400 text-sm tracking-widest uppercase mb-3">
                  Diverse Competencies
                </p>
                <h2 className="font-calligraphy text-5xl md:text-6xl font-bold gradient-text pb-3 overflow-visible">
                  Skills &amp; Capabilities
                </h2>
              </div>

              {/* Skills Tab Toggle */}
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-obsidian-900/60 border border-obsidian-800/60">
                <button
                  onClick={() => setSkillTab('all')}
                  className={`px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all ${
                    skillTab === 'all'
                      ? 'bg-rose-600 text-ivory-50 shadow-md shadow-rose-600/30'
                      : 'text-obsidian-300 hover:text-ivory-100'
                  }`}
                >
                  All Skills
                </button>
                <button
                  onClick={() => setSkillTab('creative')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all ${
                    skillTab === 'creative'
                      ? 'bg-rose-600 text-ivory-50 shadow-md shadow-rose-600/30'
                      : 'text-obsidian-300 hover:text-rose-300'
                  }`}
                >
                  <Palette size={14} />
                  <span>Creative &amp; AI</span>
                </button>
                <button
                  onClick={() => setSkillTab('technical')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all ${
                    skillTab === 'technical'
                      ? 'bg-rose-600 text-ivory-50 shadow-md shadow-rose-600/30'
                      : 'text-obsidian-300 hover:text-rose-300'
                  }`}
                >
                  <Terminal size={14} />
                  <span>Technical &amp; Security</span>
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* CREATIVE SKILLS */}
          {(skillTab === 'all' || skillTab === 'creative') && (
            <div className="mb-16">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <Wand2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-calligraphy text-2xl md:text-3xl font-bold text-ivory-100">
                      Creative &amp; Multimedia Production
                    </h3>
                    <p className="font-body text-xs text-obsidian-400">
                      Video editing, AI-assisted ideation, storytelling, and visual design
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(creativeSkills).map(([category, items], i) => (
                  <AnimatedSection key={category} delay={i * 0.08}>
                    <div className="glass-card p-7 hover-lift h-full border-rose-500/15">
                      <div className="flex items-center gap-3 mb-5">
                        {i === 0 && <Film size={20} className="text-rose-400" />}
                        {i === 1 && <Video size={20} className="text-rose-400" />}
                        {i === 2 && <Wand2 size={20} className="text-rose-400" />}
                        {i === 3 && <PenTool size={20} className="text-rose-400" />}
                        {i === 4 && <Palette size={20} className="text-rose-400" />}
                        <h4 className="font-heading text-lg font-semibold text-ivory-100">
                          {category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-obsidian-800/60 text-obsidian-200 font-body text-xs rounded-lg border border-obsidian-700/40 hover:border-rose-500/40 hover:text-rose-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}

          {/* TECHNICAL SKILLS */}
          {(skillTab === 'all' || skillTab === 'technical') && (
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-rose-400">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <h3 className="font-calligraphy text-2xl md:text-3xl font-bold text-ivory-100">
                      Technical &amp; Cybersecurity Engineering
                    </h3>
                    <p className="font-body text-xs text-obsidian-400">
                      Penetration testing, secure architecture, systems, and programming
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(technicalSkills).map(([category, items], i) => (
                  <AnimatedSection key={category} delay={i * 0.08}>
                    <div className="glass-card p-7 hover-lift h-full">
                      <div className="flex items-center gap-3 mb-5">
                        {i === 0 && <Shield size={20} className="text-rose-400" />}
                        {i === 1 && <BookOpen size={20} className="text-rose-400" />}
                        {i === 2 && <Cpu size={20} className="text-rose-400" />}
                        {i === 3 && <Code2 size={20} className="text-rose-400" />}
                        {i === 4 && <Terminal size={20} className="text-rose-400" />}
                        <h4 className="font-heading text-lg font-semibold text-ivory-100">
                          {category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-obsidian-800/60 text-obsidian-200 font-mono text-xs rounded-lg border border-obsidian-700/40 hover:border-rose-500/40 hover:text-rose-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ EXPERIENCE ═══════════ */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/japan-shrine.jpg"
            alt="Background"
            fill
            className="object-cover opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-obsidian-950/95" />
        </div>
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="font-accent text-rose-400 text-sm tracking-widest uppercase mb-3">
                  Career Trajectory
                </p>
                <h2 className="font-calligraphy text-5xl md:text-6xl font-bold gradient-text pb-3 overflow-visible">
                  Experience &amp; Work
                </h2>
              </div>

              {/* Exp Tab Toggle */}
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-obsidian-900/60 border border-obsidian-800/60">
                <button
                  onClick={() => setExpTab('all')}
                  className={`px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all ${
                    expTab === 'all'
                      ? 'bg-rose-600 text-ivory-50 shadow-md shadow-rose-600/30'
                      : 'text-obsidian-300 hover:text-ivory-100'
                  }`}
                >
                  All Experience
                </button>
                <button
                  onClick={() => setExpTab('professional')}
                  className={`px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all ${
                    expTab === 'professional'
                      ? 'bg-rose-600 text-ivory-50 shadow-md shadow-rose-600/30'
                      : 'text-obsidian-300 hover:text-rose-300'
                  }`}
                >
                  Professional Roles
                </button>
                <button
                  onClick={() => setExpTab('creative')}
                  className={`px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all ${
                    expTab === 'creative'
                      ? 'bg-rose-600 text-ivory-50 shadow-md shadow-rose-600/30'
                      : 'text-obsidian-300 hover:text-rose-300'
                  }`}
                >
                  Creative &amp; Freelance
                </button>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Professional Roles */}
            {(expTab === 'all' || expTab === 'professional') &&
              professionalExperience.map((exp, i) => (
                <AnimatedSection key={exp.company} delay={i * 0.1}>
                  <div className="glass-card p-8 md:p-10 hover-lift group border-l-4 border-l-rose-500">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                            {exp.category}
                          </span>
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-ivory-100 group-hover:text-rose-300 transition-colors mt-2">
                          {exp.role}
                        </h3>
                        <p className="font-body text-rose-400 font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="font-mono text-sm text-obsidian-400 whitespace-nowrap flex items-center gap-2">
                        <Briefcase size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 font-body text-obsidian-300 leading-relaxed"
                        >
                          <ChevronRight
                            size={16}
                            className="text-rose-500 mt-1 flex-shrink-0"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}

            {/* Creative & Freelance Roles */}
            {(expTab === 'all' || expTab === 'creative') &&
              creativeExperience.map((exp, i) => (
                <AnimatedSection key={exp.company} delay={i * 0.1}>
                  <div className="glass-card p-8 md:p-10 hover-lift group border-l-4 border-l-amber-500">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            {exp.category}
                          </span>
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-ivory-100 group-hover:text-amber-300 transition-colors mt-2">
                          {exp.role}
                        </h3>
                        <p className="font-body text-amber-400 font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="font-mono text-sm text-obsidian-400 whitespace-nowrap flex items-center gap-2">
                        <Wand2 size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 font-body text-obsidian-300 leading-relaxed"
                        >
                          <ChevronRight
                            size={16}
                            className="text-amber-500 mt-1 flex-shrink-0"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EDUCATION & CERTIFICATIONS ═══════════ */}
      <section className="py-32 relative">
        <div className="section-container">
          <AnimatedSection>
            <p className="font-accent text-rose-400 text-sm tracking-widest uppercase mb-3">
              Qualifications &amp; Learning
            </p>
            <h2 className="font-calligraphy text-5xl md:text-6xl font-bold gradient-text pb-3 mb-16 overflow-visible">
              Education &amp; Credentials
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="glass-card p-8 hover-lift h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-ivory-100">
                      Master Diploma in Information Security
                    </h3>
                    <p className="font-body text-rose-400 mt-1">
                      Craw Security, New Delhi (Distance Learning)
                    </p>
                    <p className="font-mono text-sm text-obsidian-400 mt-2">
                      2025 – Present
                    </p>
                    <p className="font-body text-obsidian-300 mt-3 leading-relaxed">
                      Offensive &amp; defensive security coursework — active
                      enrollment. Advanced penetration testing, red team operations,
                      threat modeling, and secure systems architecture.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="glass-card p-8 hover-lift h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-ivory-100">
                      Bachelor of Science · Computer Science
                    </h3>
                    <p className="font-body text-rose-400 mt-1">
                      Nesamony Memorial Christian College, Marthandam
                    </p>
                    <p className="font-mono text-sm text-obsidian-400 mt-2">
                      2022 – 2025
                    </p>
                    <p className="font-body text-obsidian-300 mt-3 leading-relaxed">
                      Leader, Technical Team · Vice Representative. Structured
                      foundations in algorithms, relational database systems, networking,
                      and software engineering.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.name} delay={i * 0.1}>
                <div className="glass-card p-6 hover-lift h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                    <Award size={20} className="text-rose-400" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-ivory-100 leading-snug flex-grow">
                    {cert.name}
                  </h3>
                  <p className="font-body text-sm text-obsidian-400 mt-3">
                    {cert.issuer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECTS TEASER ═══════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/creative-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950" />
        </div>

        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-accent text-rose-400 text-sm tracking-widest uppercase mb-3">
                Explore the Archive
              </p>
              <h2 className="font-calligraphy text-5xl md:text-6xl font-bold gradient-text pb-3 mb-8 overflow-visible">
                Projects &amp; Works
              </h2>
              <p className="font-body text-obsidian-300 text-lg leading-relaxed mb-12">
                Explore a dual archive of technical security assessments, network architectures,
                multimedia video assemblies, AI visual ideation, and the Chronicles of Lumina
                dark fantasy novel series.
              </p>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-rose-600 hover:bg-rose-500 text-ivory-50 font-body font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25"
              >
                <span>View Full Project Archive</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-[0.04]"
          />
          <div className="absolute inset-0 bg-obsidian-950/95" />
        </div>

        <div className="section-container relative z-10">
          <AnimatedSection>
            <p className="font-accent text-rose-400 text-sm tracking-widest uppercase mb-3">
              Let&apos;s collaborate
            </p>
            <h2 className="font-calligraphy text-5xl md:text-6xl font-bold gradient-text pb-3 mb-16 overflow-visible">
              Contact Me
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-8">
                <p className="font-body text-obsidian-300 text-lg leading-relaxed">
                  Whether you are seeking creative video production, AI-assisted content
                  workflows, freelance software development, or cybersecurity security
                  assessments — I am eager to connect and build something impactful.
                </p>

                <div className="space-y-5">
                  <a
                    href="mailto:raakashakash@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                      <Mail size={20} className="text-rose-400" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-obsidian-400">
                        Email
                      </p>
                      <p className="font-body text-ivory-200 group-hover:text-rose-300 transition-colors">
                        raakashakash@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center">
                      <Phone size={20} className="text-rose-400" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-obsidian-400">
                        Phone
                      </p>
                      <p className="font-body text-ivory-200">
                        +91 6385296524
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center">
                      <MapPin size={20} className="text-rose-400" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-obsidian-400">
                        Location
                      </p>
                      <p className="font-body text-ivory-200">Kochi, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://github.com/yuinoirsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-obsidian-800/60 border border-obsidian-700/40 flex items-center justify-center text-obsidian-300 hover:text-rose-400 hover:border-rose-500/40 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yuinoirsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-obsidian-800/60 border border-obsidian-700/40 flex items-center justify-center text-obsidian-300 hover:text-rose-400 hover:border-rose-500/40 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://tryhackme.com/p/yuinoirsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-obsidian-800/60 border border-obsidian-700/40 flex items-center justify-center text-obsidian-300 hover:text-rose-400 hover:border-rose-500/40 transition-all duration-300"
                    aria-label="TryHackMe"
                  >
                    <Shield size={20} />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-obsidian-400 mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-5 py-3.5 bg-obsidian-900/40 border border-obsidian-700/40 rounded-xl font-body text-ivory-200 placeholder:text-obsidian-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-obsidian-400 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-5 py-3.5 bg-obsidian-900/40 border border-obsidian-700/40 rounded-xl font-body text-ivory-200 placeholder:text-obsidian-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-obsidian-400 mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-5 py-3.5 bg-obsidian-900/40 border border-obsidian-700/40 rounded-xl font-body text-ivory-200 placeholder:text-obsidian-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-obsidian-400 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Share details about your project, idea, or role..."
                    className="w-full px-5 py-3.5 bg-obsidian-900/40 border border-obsidian-700/40 rounded-xl font-body text-ivory-200 placeholder:text-obsidian-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-ivory-50 font-body font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
