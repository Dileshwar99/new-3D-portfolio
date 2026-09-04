import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-white/10 bg-[#06070a] select-none">
      <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-xs font-display font-bold text-indigo-400">
            {PERSONAL_INFO.logoText}
          </div>
          <div className="text-xs font-mono text-zinc-400">
            <span>{PERSONAL_INFO.name} © 2026</span>
          </div>
        </div>

        {/* Center: Role & Motto */}
        <div className="text-center space-y-1">
          <div className="text-xs font-mono text-zinc-300">
            Frontend Developer • Software Engineer • Panjab University
          </div>
          <div className="text-[11px] font-mono text-zinc-500">
            © 2026 Dileshwar Kumar. All rights reserved.
          </div>
        </div>

        {/* Right: Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Email Dileshwar Kumar"
          >
            <span className="text-xs font-mono">Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all ml-2 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
