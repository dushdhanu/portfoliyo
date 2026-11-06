import React, { useState, useEffect } from 'react';
import { Menu, FileText, Sparkles } from 'lucide-react';
import { navLinks } from '../../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { ResumePdfModal } from './ResumePdfModal';
import { MobileDrawer } from './MobileDrawer';
import { MobileNavDock } from './MobileNavDock';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'certifications',
        'github',
        'research',
        'experience',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/75 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-cyan-950/20'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 font-bold text-base sm:text-xl text-slate-900 dark:text-white transition-all"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-white font-extrabold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <span className="text-sm sm:text-base">D</span>
              </div>
              <div className="flex flex-col">
                <span className="tracking-tight leading-tight flex items-center gap-1 font-extrabold text-sm sm:text-base">
                  Dushmanthi
                  <span className="text-cyan-400">.dev</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5 tracking-wider uppercase">
                  Software Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 backdrop-blur-md">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 dark:text-cyan-300'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-500/30 -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Resume & Theme Toggle */}
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <Sparkles className="w-3 h-3 text-cyan-200 animate-pulse" />
              </button>
            </div>

            {/* Mobile Actions: Theme + Drawer Toggle */}
            <div className="flex sm:hidden items-center gap-1.5">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Drawer"
                className="p-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Bottom Mobile Navigation Dock */}
      <MobileNavDock
        activeSection={activeSection}
        onOpenMenu={() => setMobileMenuOpen(true)}
        isDrawerOpen={mobileMenuOpen}
      />

      {/* Premium Glass Mobile Drawer Navigation Overlay */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Professional Resume / CV PDF Modal */}
      <ResumePdfModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
};
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
};
