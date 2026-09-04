import React from 'react';
import { Terminal, Code, Database, Sparkles, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const FallbackScene: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center p-6 bg-gradient-to-br from-surface to-background">
      {/* Ambient background glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Floating 2D/3D Mockup Workspace */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Holographic Code Terminal */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full bg-[#0d0e14]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl relative"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              dileshwar.dev
            </span>
          </div>

          <div className="font-mono text-xs space-y-2 text-zinc-300">
            <p className="text-indigo-400">const developer = &#123;</p>
            <p className="pl-4 text-zinc-300">name: <span className="text-emerald-400">'Dileshwar Kumar'</span>,</p>
            <p className="pl-4 text-zinc-300">role: <span className="text-cyan-400">'Frontend Developer & Engineer'</span>,</p>
            <p className="pl-4 text-zinc-300">passion: <span className="text-amber-400">'Modern WebGL & Scalable Interfaces'</span>,</p>
            <p className="pl-4 text-zinc-300">status: <span className="text-emerald-400">'Ready for Impact'</span></p>
            <p className="text-indigo-400">&#125;;</p>
          </div>
        </motion.div>

        {/* Floating tech badges around workspace */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {[
            { icon: Code, label: 'React.js', color: 'text-cyan-400 border-cyan-500/30' },
            { icon: Database, label: 'SQL & BI', color: 'text-amber-400 border-amber-500/30' },
            { icon: Layers, label: 'Three.js 3D', color: 'text-indigo-400 border-indigo-500/30' },
            { icon: Cpu, label: 'Python & C++', color: 'text-emerald-400 border-emerald-500/30' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/80 border text-xs font-mono text-zinc-300 backdrop-blur-md ${item.color}`}
            >
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
