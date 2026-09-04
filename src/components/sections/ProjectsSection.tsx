import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectPreviewMockup } from '../ui/ProjectPreviewMockup';
import { ProjectModal } from '../ui/ProjectModal';
import { Play, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { GitHubIcon } from '../ui/Icons';
import { MagneticButton } from '../ui/MagneticButton';

// 3D Card with Tilt Physics
const ProjectCard: React.FC<{ project: Project; onSelect: (p: Project) => void }> = ({
  project,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setRotateX(-y * 0.035);
    setRotateY(x * 0.035);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group relative rounded-3xl p-6 sm:p-7 glass-panel border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
      onClick={() => onSelect(project)}
      data-cursor="project"
      data-cursor-text="LIVE DEMO →"
    >
      {/* Background gradient flare */}
      <div 
        className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.gradient}`}
      />

      <div>
        {/* Card Top: Number, Category & Inspect Pill */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-indigo-400 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
              {project.number}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <span className="flex items-center gap-1">
              <Play className="w-3 h-3 text-emerald-400" />
              Interactive Demo
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Visual Mockup Preview Frame */}
        <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/20 transition-all shadow-lg relative">
          <ProjectPreviewMockup project={project} />
          
          {/* Subtle hover overlay hint */}
          <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
            <span className="px-4 py-2 rounded-full bg-white text-zinc-950 text-xs font-mono font-bold shadow-2xl flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Open Interactive Simulation
            </span>
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div className="space-y-2 mb-4">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Tech tags & direct action links */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-zinc-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-surface hover:bg-surface-hover border border-white/10 text-zinc-300 hover:text-white transition-colors"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="px-3 py-1.5 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-300 hover:text-white transition-colors text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <Play className="w-3 h-3 text-emerald-400" />
            <span>Live Demo</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Data Analytics'>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="PORTFOLIO WORK"
            title="Featured"
            titleAccent="Projects"
            subtitle="Frontend web applications and business analytics dashboards engineered by Dileshwar Kumar."
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-surface/80 p-1.5 rounded-full border border-white/10 self-start md:self-auto backdrop-blur-md">
            {(['All', 'Frontend', 'Data Analytics'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* GitHub Repositories Anchor Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-white">Explore All Source Code on GitHub</h4>
              <p className="text-xs font-mono text-zinc-400">All repositories, commit histories, and project implementations are open on GitHub @Dileshwar99.</p>
            </div>
          </div>

          <MagneticButton
            variant="glass"
            href="https://github.com/Dileshwar99"
            target="_blank"
            rel="noopener noreferrer"
            className="!py-2.5 !px-5 text-xs font-mono whitespace-nowrap"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Visit @Dileshwar99</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </MagneticButton>
        </div>
      </div>

      {/* Full Screen Shared-Element Style Modal with Working Simulator */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
