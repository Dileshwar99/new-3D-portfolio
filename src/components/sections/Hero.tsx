import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroScene } from '../3d/HeroScene';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowDown, FileText, Sparkles, FolderGit2, Award, GraduationCap } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-between overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-indigo-500/10 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Main Grid Content - Full screen edge-to-edge layout */}
      <div className="w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center flex-1 my-auto">
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          {/* Availability Status Badge with Avatar Thumbnail */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface/80 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-lg">
              <div className="w-5 h-5 rounded-full overflow-hidden border border-indigo-400/50">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-200">{PERSONAL_INFO.status}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-orange-300 backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-orange-400" />
              <span>Oracle Cloud (OCI) Certified</span>
            </div>
          </div>

          {/* Large Display Name & Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-xl sm:text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-300 font-bold">
              {PERSONAL_INFO.headline}
            </div>
          </div>

          {/* Short Professional Narrative */}
          <p className="text-sm sm:text-base text-zinc-300/90 font-sans leading-relaxed max-w-xl">
            {PERSONAL_INFO.shortIntro}
          </p>

          {/* Call to Actions & Social Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <MagneticButton
              variant="primary"
              onClick={() => scrollTo('projects')}
              className="!py-3 !px-6 text-sm font-mono cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View My Projects</span>
            </MagneticButton>

            <MagneticButton
              variant="glass"
              href={PERSONAL_INFO.resumeUrl}
              download="Dileshwar_Kumar_Resume.pdf"
              className="!py-3 !px-6 text-sm font-mono cursor-pointer"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Download Resume</span>
            </MagneticButton>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tech focus chips */}
          <div className="pt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1 text-zinc-400">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              Panjab University '27:
            </span>
            {['React', 'Three.js / WebGL', 'Power BI & DAX', 'SQL & Python'].map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right 3D Interactive Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full"
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="w-full max-w-[1700px] mx-auto pt-6 flex items-center justify-between border-t border-white/5 text-xs font-mono text-zinc-500"
      >
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-pointer group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Computer Science & Engineering • Panjab University</span>
        </div>
      </motion.div>
    </section>
  );
};
