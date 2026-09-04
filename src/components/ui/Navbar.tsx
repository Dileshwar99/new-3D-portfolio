import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1700px] px-5 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/15'
              : 'bg-surface/40 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="Dileshwar Kumar Home"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-400/50 shadow-[0_0_12px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-transform bg-[#0d0e14]">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors hidden sm:inline-block">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-surface/60 p-1 rounded-full border border-white/5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action: Let's Talk CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <MagneticButton
              variant="primary"
              onClick={() => scrollToSection('#contact')}
              className="!py-1.5 !px-4 text-xs font-mono !gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-surface/80 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-3xl p-5 border border-white/15 shadow-2xl flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-mono text-left transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
