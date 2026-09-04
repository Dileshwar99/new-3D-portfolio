import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';
import { X, ExternalLink, CheckCircle, Sparkles, Layers, ShieldCheck, ArrowUpRight, Play } from 'lucide-react';
import { GitHubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const scrollToPreview = () => {
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-all"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d0e14] border border-white/15 shadow-2xl z-10 flex flex-col custom-scrollbar"
        >
          {/* Top Bar Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[#0d0e14]/95 backdrop-blur-xl border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                {project.number}
              </span>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">{project.category}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-surface/80 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-4 sm:p-8 space-y-8">
            {/* Interactive Live Simulation Viewport */}
            <div ref={previewRef} className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                  <Play className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Interactive Live Simulator (Click Slicers / Tabs Below)
                </span>
                <span className="text-[10.5px] text-zinc-500 hidden sm:inline">Real-time dynamic calculations</span>
              </div>
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <ProjectPreviewMockup project={project} isExpanded={true} />
              </div>
            </div>

            {/* Action Bar / Direct Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-surface/60 border border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 hover:bg-surface border border-white/15 hover:border-white/30 text-xs font-mono font-medium text-white transition-all shadow-sm"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <button
                  type="button"
                  onClick={scrollToPreview}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/40 text-xs font-mono font-medium text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Test Live Simulation</span>
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-surface/50 border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono text-zinc-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview & Engineering Problem/Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="bg-[#12131a] rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#12131a] rounded-2xl p-5 border border-indigo-500/20 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Engineered Solution</span>
                </div>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features Checklist */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-base text-zinc-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Key Architecture & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-surface/40 border border-white/5 text-xs text-zinc-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
