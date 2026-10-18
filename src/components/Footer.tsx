import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-obsidian-800/50 bg-obsidian-950">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-calligraphy text-xl gradient-text">Akash R A</p>
            <p className="font-body text-sm text-obsidian-400 mt-1">
              Digital Content Creator · Cybersecurity Professional · Technical Instructor
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/yuinoirsec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-obsidian-400 hover:text-rose-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yuinoirsec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-obsidian-400 hover:text-rose-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:raakashakash@gmail.com"
              className="text-obsidian-400 hover:text-rose-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="font-body text-xs text-obsidian-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-rose-500" /> by Akash R A
            <span className="mx-1">·</span> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
