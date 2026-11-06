import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal, ChevronRight, FileText } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { ResumePdfModal } from '../common/ResumePdfModal';

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentFullRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDelete = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullRole.length) {
          setDisplayedText(currentFullRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Typewriter, Intro, Actions */}
        <div className="lg:col-span-7 text-center lg:text-left z-10">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>{personalInfo.statusBadge}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Hi, I'm <br />
            <span className="gradient-text drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Animated Role Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 sm:mt-4 flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 min-h-[36px] sm:min-h-[40px]"
          >
            <span className="text-cyan-400 font-mono">&gt;</span>
            <span className="font-mono text-cyan-400 dark:text-cyan-300">
              {displayedText}
            </span>
            <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-cyan-400 inline-block animate-pulse -ml-1" />
          </motion.div>

          {/* Professional Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Call to Actions & Social Links: Streamlined Mobile Grid Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            {/* Primary Action Button */}
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>View My Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile 2-Button Row for Contact & Resume */}
            <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center gap-2.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide glass-card hover:border-cyan-500/40 text-slate-800 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                <span className="truncate">Contact</span>
              </a>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide glass-card hover:border-cyan-500/40 text-slate-800 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                <span className="truncate">Resume (PDF)</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2.5 mt-1 sm:mt-0 sm:ml-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 sm:p-3 rounded-xl glass-card hover:border-cyan-500/40 hover:text-cyan-400 text-slate-700 dark:text-slate-200 transition-all hover:scale-110"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 sm:p-3 rounded-xl glass-card hover:border-cyan-500/40 hover:text-cyan-400 text-slate-700 dark:text-slate-200 transition-all hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Avatar Portrait & Floating Tech Badges */}
        <div className="lg:col-span-5 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-64 sm:w-80 md:w-96 flex items-center justify-center"
          >
            {/* Glowing Concentric Halo Rings */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-cyan-500/20 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-2 rounded-[2.5rem] border border-violet-500/30 animate-pulse-slow pointer-events-none" />
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-blue-500/15 to-violet-600/25 blur-3xl pointer-events-none" />

            {/* Central Portrait Showcase Card */}
            <div className="relative w-56 sm:w-72 md:w-80 rounded-3xl p-2 bg-gradient-to-b from-cyan-500/40 via-slate-800/60 to-violet-600/40 shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-xl group">
              <div className="relative w-full h-72 sm:h-96 rounded-[22px] overflow-hidden bg-navy-950">
                {/* User Portrait Image */}
                <img
                  src={personalInfo.avatar || `${import.meta.env.BASE_URL}my.jpeg`}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to stylized DEV placeholder if image fails to load
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* Hidden fallback if image fails */}
                <div className="hidden w-full h-full flex-col items-center justify-center bg-navy-950 text-white p-6">
                  <Terminal className="w-12 h-12 text-cyan-400 mb-2" />
                  <span className="text-sm font-mono font-bold text-cyan-300">&lt;DEV /&gt;</span>
                </div>

                {/* Subtle dark gradient overlay at bottom for text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent flex flex-col justify-end p-4 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                    {personalInfo.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-cyan-300 font-mono mt-0.5">
                    {personalInfo.degree}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Satellite Badge: Spring Boot */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-3 left-0 sm:-left-5 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-emerald-500/40 shadow-xl text-xs font-semibold text-emerald-400 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Spring Boot</span>
            </motion.div>

            {/* Floating Satellite Badge: React & TypeScript */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 right-0 sm:-right-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-cyan-500/40 shadow-xl text-xs font-semibold text-cyan-400 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>React & TypeScript</span>
            </motion.div>

            {/* Floating Satellite Badge: Flutter */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-8 glass-card px-3 py-1.5 rounded-xl hidden sm:flex items-center gap-2 border border-blue-500/40 shadow-xl text-xs font-semibold text-blue-400 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Flutter</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors z-10"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </motion.a>

      {/* Curriculum Vitae / Resume PDF Modal */}
      <ResumePdfModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
};
