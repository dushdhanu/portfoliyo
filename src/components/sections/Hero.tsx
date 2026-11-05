import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal, ChevronRight, Award, FileText } from 'lucide-react';
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
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
            className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 min-h-[40px]"
          >
            <span className="text-cyan-400 font-mono">&gt;</span>
            <span className="font-mono text-cyan-400 dark:text-cyan-300">
              {displayedText}
            </span>
            <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse -ml-1" />
          </motion.div>

          {/* Professional Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Call to Actions & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>View My Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide glass-card hover:border-cyan-500/40 text-slate-800 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-cyan-500" />
              <span>Contact Me</span>
            </a>

            <button
              onClick={() => setResumeModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide glass-card hover:border-cyan-500/40 text-slate-800 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyan-500" />
              <span>Resume (PDF)</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2 sm:mt-0 sm:ml-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl glass-card hover:border-cyan-500/40 hover:text-cyan-400 text-slate-700 dark:text-slate-200 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl glass-card hover:border-cyan-500/40 hover:text-cyan-400 text-slate-700 dark:text-slate-200 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Avatar & Floating Tech Badges */}
        <div className="lg:col-span-5 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center"
          >
            {/* Glowing Concentric Halo Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-violet-500/30 animate-pulse-slow" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-violet-600/20 blur-2xl" />

            {/* Central Avatar Visual Card */}
            <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-3xl glass-card p-6 flex flex-col items-center justify-center text-center border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Developer Monogram / Icon Placeholder */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-violet-600 p-1 shadow-xl shadow-cyan-500/30 mb-4 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[14px] bg-navy-950 flex flex-col items-center justify-center text-white">
                  <Terminal className="w-10 h-10 text-cyan-400 mb-1" />
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-300">
                    &lt;DEV /&gt;
                  </span>
                </div>
              </div>

              <h3 className="relative text-lg font-bold text-slate-900 dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="relative text-xs text-cyan-400 font-medium mt-1">
                {personalInfo.degree}
              </p>
              <div className="relative flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Undergraduate Developer</span>
              </div>
            </div>

            {/* Floating Satellite Badge: Spring Boot */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-2 left-0 sm:-left-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-emerald-500/30 shadow-lg text-xs font-semibold text-emerald-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Spring Boot</span>
            </motion.div>

            {/* Floating Satellite Badge: React */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 right-0 sm:-right-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-cyan-500/30 shadow-lg text-xs font-semibold text-cyan-400"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>React & TypeScript</span>
            </motion.div>

            {/* Floating Satellite Badge: Flutter */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-8 glass-card px-3 py-1.5 rounded-xl hidden sm:flex items-center gap-2 border border-blue-500/30 shadow-lg text-xs font-semibold text-blue-400"
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
