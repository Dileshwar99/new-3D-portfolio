import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'button'>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch / mobile devices to disable custom cursor automatically
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor]');
      
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute('data-cursor');
        const text = interactiveEl.getAttribute('data-cursor-text');
        
        if (cursorType === 'project') {
          setCursorVariant('project');
          setCursorText(text || 'VIEW PROJECT →');
        } else if (cursorType === 'button') {
          setCursorVariant('button');
          setCursorText('');
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
        if (isClickable) {
          setCursorVariant('hover');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', moveMouse, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* Outer Magnetic Ring / Expansion Bubble */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        style={{
          left: cursorX,
          top: cursorY,
          transform: 'translate(-50%, -50%)',
        } as any}
        animate={{
          width: cursorVariant === 'project' ? 120 : cursorVariant === 'hover' ? 44 : cursorVariant === 'button' ? 48 : 28,
          height: cursorVariant === 'project' ? 120 : cursorVariant === 'hover' ? 44 : cursorVariant === 'button' ? 48 : 28,
          backgroundColor: cursorVariant === 'project' 
            ? 'rgba(99, 102, 241, 0.95)' 
            : cursorVariant === 'hover' 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(255, 255, 255, 0.04)',
          borderColor: cursorVariant === 'project' 
            ? 'rgba(165, 180, 252, 0.6)' 
            : cursorVariant === 'hover' 
            ? 'rgba(255, 255, 255, 0.35)' 
            : 'rgba(255, 255, 255, 0.2)',
          borderWidth: '1px',
          backdropFilter: cursorVariant === 'project' ? 'blur(4px)' : 'blur(2px)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {cursorVariant === 'project' && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-white text-center px-2">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Central Precision Glowing Dot (Hidden in project mode) */}
      {cursorVariant !== 'project' && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-indigo-400 pointer-events-none shadow-[0_0_8px_#818cf8]"
          style={{
            left: mouseX,
            top: mouseY,
            transform: 'translate(-50%, -50%)',
          } as any}
          animate={{
            scale: cursorVariant === 'hover' ? 0 : 1,
            opacity: cursorVariant === 'hover' ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      )}
    </div>
  );
};
