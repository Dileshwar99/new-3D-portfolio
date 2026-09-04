import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { FileText, Download, CheckCircle2, Sparkles, ArrowUpRight, GraduationCap, Award, BarChart3, Briefcase } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 glass-panel border border-white/10 overflow-hidden bg-gradient-to-br from-[#0e1017]/90 via-surface to-background">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left CTA details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
                <FileText className="w-3.5 h-3.5" />
                <span>Verified Curriculum Vitae</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                  Want to know more about my journey?
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                  Download my official resume to explore my education at Panjab University, Oasis Infobyte internship, Oracle Cloud Certification, and project achievements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'B.E. Computer Science (Panjab University)',
                  'Oracle Cloud Infrastructure 2025 Certified',
                  'Web Dev Intern (Oasis Infobyte)',
                  'Power BI, DAX & React Engineering',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <MagneticButton
                  variant="primary"
                  href={PERSONAL_INFO.resumeUrl}
                  download="Dileshwar_Kumar_Resume.pdf"
                  className="!py-3 !px-7 text-sm font-mono !gap-2 shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>

                <span className="text-xs font-mono text-zinc-500">
                  PDF Format • Updated for 2026
                </span>
              </div>
            </div>

            {/* Right 3D Interactive Resume Card Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="w-full max-w-sm rounded-2xl p-5 bg-[#090a0f] border border-white/15 shadow-2xl space-y-4 relative group"
              >
                {/* Glowing top rim */}
                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

                {/* Mockup Resume Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <div className="font-display font-bold text-sm text-white">{PERSONAL_INFO.name}</div>
                    <div className="text-[10px] font-mono text-zinc-400">{PERSONAL_INFO.headline}</div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Simulated Content Rows */}
                <div className="space-y-2.5 font-mono text-[10.5px] text-zinc-400">
                  <div className="flex items-center gap-1.5 text-zinc-200">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Panjab University (2023–2027)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-200">
                    <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                    <span>Oasis Infobyte • Web Dev Intern</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-200">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    <span>Oracle Cloud 2025 Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-200">
                    <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Blinkit & Super Store BI Dashboards</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9.5px] font-mono text-zinc-500">
                  <span>github.com/Dileshwar99</span>
                  <span className="text-emerald-400">Verified Credentials</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
