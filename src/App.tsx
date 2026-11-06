import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';
import { BackgroundGlow } from './components/common/BackgroundGlow';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { GithubActivity } from './components/sections/GithubActivity';
import { Research } from './components/sections/Research';
import { ExperienceEdu } from './components/sections/ExperienceEdu';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';
import { Preloader } from './components/common/Preloader';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <NavigationProvider>
        {/* Intro Name Splash Screen / Preloader */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        <div className="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
          {/* Ambient Glowing Aura Background & Grids */}
          <BackgroundGlow />

          {/* Sticky Glass Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="relative z-10 space-y-12 sm:space-y-20 pb-20 md:pb-0">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <GithubActivity />
            <Research />
            <ExperienceEdu />
            <Contact />
          </main>

          {/* Comprehensive Footer */}
          <Footer />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
