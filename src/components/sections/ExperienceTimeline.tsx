import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { TIMELINE_JOURNEY } from '../../data/portfolioData';
import { GraduationCap, Briefcase, Rocket, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';

const iconByCategory: Record<string, React.ElementType> = {
  Education: GraduationCap,
  Internships: Briefcase,
  Projects: Rocket,
  Learning: BookOpen,
};

const colorByCategory: Record<string, { badge: string; dot: string }> = {
  Education: { badge: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30', dot: 'bg-indigo-500 shadow-[0_0_12px_#6366f1]' },
  Internships: { badge: 'text-amber-400 bg-amber-500/10 border-amber-500/30', dot: 'bg-amber-500 shadow-[0_0_12px_#f59e0b]' },
  Projects: { badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30', dot: 'bg-cyan-500 shadow-[0_0_12px_#06b6d4]' },
  Learning: { badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', dot: 'bg-emerald-500 shadow-[0_0_12px_#10b981]' },
};

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto">
        <SectionHeader
          badge="EXPERIENCE & TIMELINE"
          title="Internships, Education &"
          titleAccent="Milestones"
          subtitle="A timeline of practical industry experience, academic studies at Panjab University, and software development projects."
        />

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          {/* Vertical central glowing line */}
          <div className="absolute left-2 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent" />

          {TIMELINE_JOURNEY.map((item, idx) => {
            const Icon = iconByCategory[item.category] || Rocket;
            const styling = colorByCategory[item.category] || colorByCategory.Projects;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon / indicator */}
                <div className={`absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0d0e14] border border-white/20 flex items-center justify-center -translate-x-1/2 group-hover:scale-110 transition-transform ${styling.dot}`}>
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4">
                  {/* Period and category badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono border font-medium ${styling.badge}`}>
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {item.period}
                      </span>
                    </div>

                    {item.highlight && (
                      <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.highlight}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300/90 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies tags */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
