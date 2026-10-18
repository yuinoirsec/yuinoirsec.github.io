'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Shield,
  Terminal,
  BookOpen,
  Feather,
  Layers,
  Users,
  Swords,
  Sparkles,
  Globe,
  Monitor,
  Database,
  Palette,
  ChevronRight,
  Filter,
  Wand2,
  Film,
  Cpu,
  Video,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';
import { technicalProjects, creativeProjects, ProjectItem, ProjectCategory } from '@/data/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all');
  const [showManuscript, setShowManuscript] = useState(false);
  const [showCodex, setShowCodex] = useState(false);
  const [showHizzGallery, setShowHizzGallery] = useState(false);
  const [selectedHizzVideo, setSelectedHizzVideo] = useState('/videos/hizz-lineup-outro.mp4');

  // Group all projects together
  const allArchiveProjects: ProjectItem[] = [
    ...technicalProjects,
    ...creativeProjects,
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? allArchiveProjects
      : activeCategory === 'media'
      ? allArchiveProjects.filter((p) => p.category === 'media' || p.category === 'freelance')
      : allArchiveProjects.filter((p) => p.category === activeCategory);

  const counts = {
    all: allArchiveProjects.length,
    ai: allArchiveProjects.filter((p) => p.category === 'ai').length,
    writing: allArchiveProjects.filter((p) => p.category === 'writing').length,
    technical: allArchiveProjects.filter((p) => p.category === 'technical').length,
    media: allArchiveProjects.filter((p) => p.category === 'media' || p.category === 'freelance').length,
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'ai':
        return <Wand2 size={16} className="text-cyan-400" />;
      case 'writing':
        return <Feather size={16} className="text-amber-400" />;
      case 'technical':
        return <Shield size={16} className="text-rose-400" />;
      case 'media':
        return <Film size={16} className="text-orange-400" />;
      case 'freelance':
        return <Cpu size={16} className="text-emerald-400" />;
      default:
        return <Sparkles size={16} className="text-rose-400" />;
    }
  };

  return (
    <>
      <Navbar />

      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects-bg.jpg"
            alt="Projects Archive"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/75 to-obsidian-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/80 to-transparent" />
        </div>

        <div className="section-container relative z-10 pb-16 pt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-obsidian-400 hover:text-rose-400 transition-colors mb-6 font-body text-sm"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </Link>
            <p className="font-accent text-rose-400 text-sm tracking-widest uppercase mb-3">
              Comprehensive Portfolio Archive
            </p>
            {/* Font clipping fix: inline-block pb-3 pr-2 overflow-visible to preserve the letter 'j' descender */}
            <h1 className="font-calligraphy text-5xl md:text-7xl font-bold leading-[1.2] overflow-visible pb-3">
              <span className="gradient-text pb-4 pr-3 overflow-visible inline-block">
                Projects &amp; Archive
              </span>
            </h1>
            <p className="font-heading text-lg md:text-xl text-obsidian-300 italic mt-3 max-w-2xl leading-relaxed">
              A curated catalog spanning AI visual concepts, creative fantasy worldbuilding,
              video editing assemblies, freelance software, and cybersecurity pentest reports.
            </p>

            {/* Filter Tabs */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              <button
                onClick={() => setActiveCategory('all')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-rose-600 text-ivory-50 shadow-lg shadow-rose-600/30 border border-rose-500'
                    : 'bg-obsidian-900/60 text-obsidian-300 border border-obsidian-700/40 hover:text-rose-300 hover:border-rose-500/30'
                }`}
              >
                <Sparkles size={14} />
                <span>All Works</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-obsidian-950/60 font-mono">
                  {counts.all}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory('ai')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === 'ai'
                    ? 'bg-rose-600 text-ivory-50 shadow-lg shadow-rose-600/30 border border-rose-500'
                    : 'bg-obsidian-900/60 text-obsidian-300 border border-obsidian-700/40 hover:text-cyan-300 hover:border-cyan-500/30'
                }`}
              >
                <Wand2 size={14} />
                <span>AI &amp; Concepts</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-obsidian-950/60 font-mono">
                  {counts.ai}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory('writing')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === 'writing'
                    ? 'bg-rose-600 text-ivory-50 shadow-lg shadow-rose-600/30 border border-rose-500'
                    : 'bg-obsidian-900/60 text-obsidian-300 border border-obsidian-700/40 hover:text-amber-300 hover:border-amber-500/30'
                }`}
              >
                <Feather size={14} />
                <span>Fiction &amp; Lore</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-obsidian-950/60 font-mono">
                  {counts.writing}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory('technical')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === 'technical'
                    ? 'bg-rose-600 text-ivory-50 shadow-lg shadow-rose-600/30 border border-rose-500'
                    : 'bg-obsidian-900/60 text-obsidian-300 border border-obsidian-700/40 hover:text-rose-300 hover:border-rose-500/30'
                }`}
              >
                <Shield size={14} />
                <span>Security &amp; Tech</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-obsidian-950/60 font-mono">
                  {counts.technical}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory('media')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === 'media'
                    ? 'bg-rose-600 text-ivory-50 shadow-lg shadow-rose-600/30 border border-rose-500'
                    : 'bg-obsidian-900/60 text-obsidian-300 border border-obsidian-700/40 hover:text-orange-300 hover:border-orange-500/30'
                }`}
              >
                <Film size={14} />
                <span>Media &amp; Freelance</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-obsidian-950/60 font-mono">
                  {counts.media}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ARCHIVE GRID (UNIFIED TEMPLATE) ═══════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-950/95 to-obsidian-950" />
        <div className="section-container relative z-10">
          <div className="grid gap-12">
            {filteredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <div className="glass-card overflow-hidden hover-lift group border border-obsidian-700/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-0">
                    {/* Visual Asset Showcase */}
                    <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[280px] overflow-hidden bg-obsidian-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian-950/90 lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 to-transparent lg:hidden" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40`} />

                      {/* Category Badge Floating on Image */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-950/80 backdrop-blur-md border border-obsidian-700/50">
                        {getCategoryIcon(project.category)}
                        <span className="font-body text-xs font-medium text-ivory-100">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Narrative Content */}
                    <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <p className="font-accent text-rose-400 text-xs tracking-wider mb-1">
                          {project.subtitle}
                        </p>
                        {/* Title with overflow-visible to preserve letter 'j' */}
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-ivory-100 group-hover:text-rose-300 transition-colors mb-3 leading-snug overflow-visible pb-1">
                          {project.title}
                        </h2>

                        <p className="font-body text-obsidian-300 leading-relaxed mb-6 text-sm md:text-base">
                          {project.description}
                        </p>

                        {/* Tags / Labels */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-obsidian-800/60 text-obsidian-200 font-body text-xs rounded-lg border border-obsidian-700/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 mb-8">
                          {project.details.map((detail, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2.5 font-body text-xs md:text-sm text-obsidian-300 leading-relaxed"
                            >
                              <ChevronRight
                                size={15}
                                className="text-rose-500 mt-0.5 flex-shrink-0"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Links and Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-obsidian-800/60">
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-obsidian-800/80 hover:bg-obsidian-800 border border-obsidian-700/50 rounded-xl text-obsidian-200 hover:text-rose-300 font-body text-xs md:text-sm transition-all"
                          >
                            <Github size={15} />
                            <span>Repository</span>
                          </a>
                        )}

                        {project.links?.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-ivory-50 rounded-xl font-body text-xs md:text-sm transition-all shadow-md shadow-rose-600/20"
                          >
                            <ExternalLink size={15} />
                            <span>Live Resource</span>
                          </a>
                        )}

                        {project.links?.video && (
                          <a
                            href={project.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-ivory-50 rounded-xl font-body text-xs md:text-sm transition-all shadow-md shadow-rose-600/20"
                          >
                            <Video size={15} />
                            <span>Campaign Video</span>
                          </a>
                        )}

                        {/* World Codex Trigger for Chronicles of Lumina */}
                        {project.id === 'chronicles-of-lumina' && (
                          <button
                            onClick={() => setShowCodex(!showCodex)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-obsidian-800/80 hover:bg-rose-600/25 border border-amber-500/30 rounded-xl text-amber-300 font-body text-xs md:text-sm transition-all cursor-pointer"
                          >
                            <Globe size={15} />
                            <span>{showCodex ? 'Hide World Codex' : 'Explore Codex & Institutions'}</span>
                          </button>
                        )}

                        {/* Manuscript Excerpt Trigger for Lumina */}
                        {project.id === 'ruins-of-chaos' && (
                          <button
                            onClick={() => setShowManuscript(!showManuscript)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-obsidian-800/80 hover:bg-rose-600/25 border border-rose-500/30 rounded-xl text-rose-300 font-body text-xs md:text-sm transition-all cursor-pointer"
                          >
                            <BookOpen size={15} />
                            <span>{showManuscript ? 'Hide Manuscript' : 'Read Chapter A Excerpt'}</span>
                          </button>
                        )}

                        {/* Campaign Gallery Trigger for Hizz */}
                        {project.id === 'hizz-ai-beverage-campaign' && (
                          <button
                            onClick={() => setShowHizzGallery(!showHizzGallery)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-obsidian-800/80 hover:bg-amber-600/25 border border-amber-500/30 rounded-xl text-amber-300 font-body text-xs md:text-sm transition-all cursor-pointer"
                          >
                            <Film size={15} />
                            <span>{showHizzGallery ? 'Hide Campaign Gallery' : 'View Flavor Stills & Video Gallery'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expandable World Codex for Chronicles of Lumina */}
                  {project.id === 'chronicles-of-lumina' && showCodex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-obsidian-800/80 bg-obsidian-950/90 p-8 md:p-10 space-y-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-amber-400 font-body font-semibold text-xs uppercase tracking-wider">
                          <Globe size={14} />
                          <span>World Codex &amp; Core Institutions · Chronicles of Lumina</span>
                        </div>
                        <span className="font-mono text-xs text-obsidian-400">System of Unified Lumina (S.O.U.L)</span>
                      </div>

                      <p className="font-heading text-base md:text-lg text-obsidian-300 italic max-w-3xl leading-relaxed">
                        Since the dawn of recorded history, humanity has existed within
                        the flow of Lumina — an omnipresent, ethereal current that binds
                        the spirit to the physical world.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 pt-2">
                        {[
                          {
                            title: '12 Sovereign Nations',
                            description:
                              'Each territory represented in the International Council of S.O.U.L by a high-ranking individual known as a "Symbol." Encrypted identities and absolute power hierarchies.',
                            icon: <Globe size={22} className="text-rose-400" />,
                          },
                          {
                            title: 'The S.O.U.L Framework',
                            description:
                              'System of Unified Lumina — the global order forged by ancients. Resonance determines potential, Lineage dictates element, and the System decides one\'s place.',
                            icon: <Layers size={22} className="text-rose-400" />,
                          },
                          {
                            title: 'The Sages',
                            description:
                              'Administrators of godhood who renounced citizenship, family name, and past. System-Bound Entities known only by their Seat Number and Function.',
                            icon: <Users size={22} className="text-rose-400" />,
                          },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className="glass-card p-6 rounded-xl hover-lift border border-obsidian-700/40"
                          >
                            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                              {item.icon}
                            </div>
                            <h4 className="font-heading text-lg font-semibold text-ivory-100 mb-2">
                              {item.title}
                            </h4>
                            <p className="font-body text-obsidian-300 leading-relaxed text-xs md:text-sm">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Expandable Manuscript Excerpt for Ruins of Chaos */}
                  {project.id === 'ruins-of-chaos' && showManuscript && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-obsidian-800/80 bg-obsidian-950/80 p-8 md:p-10 space-y-4 font-mono text-xs md:text-sm text-obsidian-300"
                    >
                      <div className="flex items-center gap-2 text-rose-400 font-body font-semibold text-xs uppercase tracking-wider mb-2">
                        <Feather size={14} />
                        <span>Manuscript Excerpt · Royal Academy of Luxemdreal · East Colonnade · Morning 9:20 · POV: Zac</span>
                      </div>
                      <p className="leading-relaxed font-body text-obsidian-300">
                        Eleven months, and the world had agreed to be ordinary again.<br />
                        The Rampage had lasted nine days. I had stood on a collapsing bridge beside people I will never be able to describe properly to anyone who was not there, and at the end of it Zrek was gone, and so was Satoshi Shogun, and the Council wrote <em>presumed deceased in the act of elimination</em> on a document, and then the seasons continued as though someone had asked them politely to.
                      </p>
                      <div className="p-5 rounded-xl bg-rose-500/5 border-l-2 border-rose-500 my-3 font-body text-ivory-200 space-y-2">
                        <p className="italic">
                          &ldquo;Excuse me. You&apos;re blocking the way.&rdquo;<br />
                          Sam&apos;s head turned a half-second before she spoke. Mine did not turn until after.<br />
                          A first-year. Small, straight-backed, uniform still creased along the fold lines from the box. Silver-white hair pulled back badly, the way a person does it themselves, quickly, without a mirror.<br />
                          <span className="text-rose-400 font-semibold font-mono">Ruby eyes.</span>
                        </p>
                        <p className="text-sm text-obsidian-300">
                          &ldquo;First year?&rdquo; Wilson said, in the voice of a man who has been here three years and would like that established.<br />
                          &ldquo;Yes, senior.&rdquo; She was looking at Sam. &ldquo;Could you tell me the way to the auditorium?&rdquo;<br />
                          &ldquo;I am going there myself,&rdquo; Sam said. &ldquo;Follow me, young lady.&rdquo;<br />
                          &ldquo;Thank you, Professor.&rdquo;
                        </p>
                      </div>
                      <p className="leading-relaxed font-body text-obsidian-400 text-xs italic">
                        She did not look at me once. Not once — and she knew exactly who I was. She used senior correctly, in the local form, in a foreign country, on her first morning. Silver hair. Ruby eyes. I have seen that colour somewhere recently enough that it itches...
                      </p>
                    </motion.div>
                  )}

                  {/* Expandable Campaign Showcase for Hizz */}
                  {project.id === 'hizz-ai-beverage-campaign' && showHizzGallery && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-obsidian-800/80 bg-obsidian-950/90 p-8 md:p-10 space-y-8"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-amber-400 font-body font-semibold text-xs uppercase tracking-wider">
                          <Film size={14} />
                          <span>Google Flow Speculative Advertising Showcase · 4 Flavor Profiles &amp; 4 Campaign Clips</span>
                        </div>
                        <span className="font-mono text-xs text-obsidian-400">Independent Concept · Fictional Brand</span>
                      </div>

                      {/* Video Player & Clip Switcher */}
                      <div className="rounded-2xl border border-obsidian-700/50 bg-obsidian-900/60 p-6 space-y-4">
                        <h4 className="font-heading text-lg font-semibold text-ivory-100 flex items-center gap-2">
                          <Video size={16} className="text-rose-400" />
                          <span>Video Campaign Clip Selector</span>
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {[
                            { name: 'Product Outro', src: '/videos/hizz-lineup-outro.mp4' },
                            { name: 'Strawberry Splash Reveal', src: '/videos/hizz-strawberry-splash.mp4' },
                            { name: 'Summer Picnic Scene', src: '/videos/hizz-summer-picnic.mp4' },
                            { name: 'Product Lineup Assembly', src: '/videos/hizz-product-lineup.mp4' },
                          ].map((clip) => (
                            <button
                              key={clip.src}
                              onClick={() => setSelectedHizzVideo(clip.src)}
                              className={`px-3 py-1.5 rounded-lg font-body text-xs transition-colors cursor-pointer ${
                                selectedHizzVideo === clip.src
                                  ? 'bg-amber-500 text-obsidian-950 font-semibold'
                                  : 'bg-obsidian-800/80 text-obsidian-300 hover:text-ivory-100 border border-obsidian-700/40'
                              }`}
                            >
                              {clip.name}
                            </button>
                          ))}
                        </div>

                        <div className="relative aspect-video max-w-3xl rounded-xl overflow-hidden border border-obsidian-800 bg-obsidian-950">
                          <video
                            key={selectedHizzVideo}
                            controls
                            playsInline
                            className="w-full h-full object-contain"
                          >
                            <source src={selectedHizzVideo} type="video/mp4" />
                            Your browser does not support HTML5 video playback.
                          </video>
                        </div>
                      </div>

                      {/* Flavor Visual Stills & Supporting Imagery */}
                      <div className="space-y-4">
                        <h4 className="font-heading text-lg font-semibold text-ivory-100 flex items-center gap-2">
                          <Palette size={16} className="text-amber-400" />
                          <span>Flavor Variants &amp; Campaign Stills</span>
                        </h4>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { name: 'Lisp Lemon', tag: 'Citrus Zest Variant', img: '/images/hizz-lisp-lemon.jpg' },
                            { name: 'Sweet Strawberry', tag: 'Berry Fresh Variant', img: '/images/hizz-sweet-strawberry.jpg' },
                            { name: 'Punchy Mango', tag: 'Tropical Wave Variant', img: '/images/hizz-punchy-mango.jpg' },
                            { name: 'Elite Soda', tag: 'Original Crisp Variant', img: '/images/hizz-elite-soda.jpg' },
                            { name: 'Product Splash', tag: 'High-Speed Fluid Study', img: '/images/hizz-product-splash.jpg' },
                            { name: 'Summer Picnic', tag: 'Outdoor Lifestyle Shot', img: '/images/hizz-summer-picnic.jpg' },
                            { name: 'Product Range Ad', tag: 'Lineup Print Concept', img: '/images/hizz-product-range-ad.jpg' },
                            { name: 'Campaign Cover', tag: 'Primary Hero Landscape', img: '/images/hizz-campaign-cover.jpg' },
                          ].map((variant) => (
                            <div
                              key={variant.name}
                              className="group relative rounded-xl overflow-hidden border border-obsidian-800/60 bg-obsidian-900/40 hover:border-amber-500/40 transition-colors"
                            >
                              <div className="relative h-44 w-full overflow-hidden">
                                <Image
                                  src={variant.img}
                                  alt={variant.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                              </div>
                              <div className="p-3">
                                <h5 className="font-heading text-sm font-semibold text-ivory-100">{variant.name}</h5>
                                <p className="font-mono text-[11px] text-obsidian-400">{variant.tag}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Scope & Disclosure Note */}
                      <div className="p-5 rounded-xl bg-amber-500/5 border-l-2 border-amber-500/60 space-y-2 font-body text-xs text-obsidian-300">
                        <p className="text-ivory-200 font-medium">Scope &amp; Portfolio Disclosure:</p>
                        <p>
                          This is an independent portfolio concept created with Google Flow, exploring consistency in flavor-led product advertising and lifestyle storytelling. Hizz is a fictional brand; all product packaging copy and nutritional claims shown are illustrative.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NAVIGATION ═══════════ */}
      <section className="py-16 border-t border-obsidian-800/60 bg-obsidian-950">
        <div className="section-container text-center">
          <AnimatedSection>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-3.5 border border-obsidian-600 hover:border-rose-500/50 text-ivory-200 font-body font-semibold rounded-xl transition-all duration-300 hover:bg-obsidian-900/50"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
