import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillsEcosystem3D } from '../3d/SkillsEcosystem3D';
import { Code, Database, Terminal, Wrench, BarChart3 } from 'lucide-react';

const CATEGORIES = [
  { 
    name: 'Frontend Development', 
    icon: Code, 
    color: 'text-cyan-400', 
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'] 
  },
  { 
    name: 'Programming Languages', 
    icon: Terminal, 
    color: 'text-amber-400', 
    skills: ['C++', 'Python', 'C', 'JavaScript'] 
  },
  { 
    name: 'Database & Backend', 
    icon: Database, 
    color: 'text-emerald-400', 
    skills: ['SQL', 'MySQL', 'Relational Schemas', 'Node.js Basics'] 
  },
  { 
    name: 'Tools & Platforms', 
    icon: Wrench, 
    color: 'text-indigo-400', 
    skills: ['Git', 'GitHub', 'VS Code', 'Oracle Cloud (OCI)'] 
  },
  { 
    name: 'Data & Analytics', 
    icon: BarChart3, 
    color: 'text-purple-400', 
    skills: ['Power BI', 'Microsoft Excel', 'DAX Measures', 'Power Query'] 
  },
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
          subtitle="Software development languages, frontend frameworks, database systems, and business analytics tools."
        />

        {/* 3D Interactive Ecosystem Canvas */}
        <SkillsEcosystem3D />

        {/* Categorized Skills Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${cat.color} group-hover:scale-105 transition-transform`}>
                    <cat.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-zinc-100">{cat.name}</h4>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-300 group-hover:border-white/15 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
