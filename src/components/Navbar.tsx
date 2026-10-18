'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-obsidian-950/80 backdrop-blur-xl border-b border-obsidian-800/50 shadow-lg shadow-obsidian-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-calligraphy text-2xl font-bold gradient-text group-hover:opacity-80 transition-opacity">
            Akash
          </span>
          <span className="font-accent text-sm text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity">
            R A
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith('/') ? (
                <Link
                  href={link.href}
                  className="font-body text-sm tracking-wider text-ivory-300 hover:text-rose-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="font-body text-sm tracking-wider text-ivory-300 hover:text-rose-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-400 group-hover:w-full transition-all duration-300" />
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-ivory-200 hover:text-rose-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian-950/95 backdrop-blur-xl border-b border-obsidian-800/50"
          >
            <ul className="section-container py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block font-body text-lg text-ivory-300 hover:text-rose-400 transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block font-body text-lg text-ivory-300 hover:text-rose-400 transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
