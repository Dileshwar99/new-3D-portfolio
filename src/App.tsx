import React from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { TechMarquee } from './components/sections/TechMarquee';
import { About } from './components/sections/About';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { ResumeCTA } from './components/sections/ResumeCTA';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {

  return (
    <div className="relative min-h-screen bg-background text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">
      {/* Premium custom magnetic cursor */}
      <CustomCursor />

      {/* Floating glass navbar */}
      <Navbar />

      {/* Main content sections */}
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <ResumeCTA />
        <ContactSection />
      </main>

      {/* Sleek minimal footer */}
      <Footer />
    </div>
  );
};

export default App;
