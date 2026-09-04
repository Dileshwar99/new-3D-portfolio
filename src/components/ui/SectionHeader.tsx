import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleAccent,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}>
      {/* Linear-style badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-white/10 text-xs font-mono text-indigo-400 mb-4 backdrop-blur-md ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <span>{badge}</span>
      </motion.div>

      {/* Heading with subtle gradient */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-[1.15]"
      >
        {title}{' '}
        {titleAccent && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-400">
            {titleAccent}
          </span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
