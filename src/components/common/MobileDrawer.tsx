import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  Award, 
  Github, 
  FlaskConical, 
  GraduationCap, 
  Mail, 
  FileText, 
  Sparkles,
  Linkedin,
  ChevronRight
} from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onOpenResume: () => void;
}

const sectionIcons: Record<string, React.ReactNode> = {
  home: <Home className="w-4 h-4" />,
  about: <User className="w-4 h-4" />,
  skills: <Code2 className="w-4 h-4" />,
  projects: <Briefcase className="w-4 h-4" />,
  certifications: <Award className="w-4 h-4" />,
  github: <Github className="w-4 h-4" />,
  research: <FlaskConical className="w-4 h-4" />,
  experience: <GraduationCap className="w-4 h-4" />,
  contact: <Mail className="w-4 h-4" />
};

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onOpenResume
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-end md:hidden overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Semi-transparent Dark Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Frosted Glass Drawer Panel */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-[85vw] max-w-[340px] h-full bg-white/95 dark:bg-slate-950/90 backdrop-blur-2xl border-l border-slate-200/80 dark:border-white/10 shadow-2xl flex flex-col justify-between z-10 overflow-hidden"
          >
            {/* Top Header */}
            <div className="p-5 border-b border-slate-200/60 dark:border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-white font-extrabold shadow-md shadow-cyan-500/20">
                  <span>D</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white leading-tight">
                    Dushmanthi<span className="text-cyan-400">.dev</span>
                  </h3>
                  <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                    Navigation Menu
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  aria-label="Close Navigation Menu"
                  className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                const icon = sectionIcons[sectionId] || <ChevronRight className="w-4 h-4" />;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 font-bold shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-500 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-cyan-500 dark:text-cyan-400' : 'text-slate-400'}>
                        {icon}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions: Single Resume CTA + Social Links */}
            <div className="p-4 border-t border-slate-200/60 dark:border-white/10 space-y-3 shrink-0 bg-slate-50/50 dark:bg-white/[0.02]">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View / Download Resume</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
              </button>

              <div className="flex items-center justify-center gap-3 pt-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
