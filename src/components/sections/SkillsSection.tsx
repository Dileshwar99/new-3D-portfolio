import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillsEcosystem3D } from '../3d/SkillsEcosystem3D';
import { Code, Database, Terminal, Wrench } from 'lucide-react';

const CATEGORIES = [
  { name: 'Frontend', icon: Code, color: 'text-cyan-400', count: 'HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind' },
  { name: 'Languages', icon: Terminal, color: 'text-amber-400', count: 'C++, C, Python, JavaScript, SQL' },
  { name: 'Data & Analytics', icon: Database, color: 'text-emerald-400', count: 'Power BI, Power Query, DAX, MS Excel, Data Modeling' },
  { name: 'Tools & Platforms', icon: Wrench, color: 'text-indigo-400', count: 'Git, GitHub, Oracle Cloud (OCI), VS Code' },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto">
        <SectionHeader
          badge="TECHNICAL SKILLS"
          title="Core Technologies &"
          titleAccent="Tooling"
          subtitle="Software development languages, frontend frameworks, and business analytics tools."
        />

        {/* 3D Interactive Ecosystem Canvas */}
        <SkillsEcosystem3D />

        {/* Categorized Skills Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${cat.color} group-hover:scale-105 transition-transform`}>
                  <cat.icon className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-zinc-100">{cat.name}</h4>
              </div>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                {cat.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
