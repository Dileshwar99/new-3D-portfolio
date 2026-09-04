import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'outline';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  target,
  rel,
  download,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    setPosition({ x: distanceX * 0.15, y: distanceY * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-[0_0_25px_-5px_rgba(99,102,241,0.5)] border border-indigo-400/30';
      case 'secondary':
        return 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-lg font-semibold';
      case 'glass':
        return 'bg-surface/70 hover:bg-surface/90 text-zinc-200 border border-white/10 hover:border-white/20 backdrop-blur-md';
      case 'outline':
        return 'bg-transparent hover:bg-white/5 text-zinc-300 border border-white/15 hover:border-white/30';
      default:
        return 'bg-surface text-zinc-200 border border-white/10';
    }
  };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      data-cursor="button"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.2 }}
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 active:scale-95 ${getVariantStyles()} ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type={props.type || 'button'} onClick={onClick} {...props} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
};
