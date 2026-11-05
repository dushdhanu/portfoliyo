import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGlow } from './components/common/BackgroundGlow';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Research } from './components/sections/Research';
import { ExperienceEdu } from './components/sections/ExperienceEdu';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
        {/* Ambient Glowing Aura Background & Grids */}
        <BackgroundGlow />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10 space-y-12 sm:space-y-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Research />
          <ExperienceEdu />
          <Contact />
        </main>

        {/* Comprehensive Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
