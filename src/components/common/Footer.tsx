import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/60 dark:border-white/10 bg-slate-100/60 dark:bg-navy-950/90 pt-12 pb-28 sm:pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-cyan-500/20">
              D
            </div>
            <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            BSc (Hons) in Computer Science | Aspiring Software Engineer building resilient, human-centered digital experiences.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Socials & Back To Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Dushmanthi"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200/50 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-3">
        <p>© {currentYear} Dushmanthi Dhananjana. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Engineered with <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" /> using React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};
