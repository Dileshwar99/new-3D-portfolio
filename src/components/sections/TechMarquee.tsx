import React from 'react';
import { MARQUEE_TECH } from '../../data/portfolioData';

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full py-6 overflow-hidden border-y border-white/5 bg-[#08090d]/80 backdrop-blur-md select-none">
      {/* Side gradient fade masks for smooth entrance/exit */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#070709] via-[#070709]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#070709] via-[#070709]/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling dual-track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-infinite flex items-center gap-6 whitespace-nowrap">
          {/* First set */}
          {MARQUEE_TECH.map((tech, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              <span className="text-xs sm:text-sm font-mono tracking-wide text-zinc-300 hover:text-white font-medium">
                {tech}
              </span>
            </div>
          ))}

          {/* Second identical set for seamless infinite wrap */}
          {MARQUEE_TECH.map((tech, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              <span className="text-xs sm:text-sm font-mono tracking-wide text-zinc-300 hover:text-white font-medium">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

