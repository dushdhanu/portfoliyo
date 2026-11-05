import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Code, Cpu, Shield, Sparkles, MapPin, GraduationCap, Target, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="About Me"
          title="Passion for Crafting"
          highlightedText="Digital Experiences"
          subtitle="A glimpse into my journey as a computer science undergraduate and software engineering aspirant."
        />

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Stylized Visual Profile Card & Quick Info Bento */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Visual Glassmorphic Showcase Card */}
            <div className="glass-card rounded-3xl p-8 border border-slate-200/90 dark:border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 text-2xl font-bold">
                  DD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Info Items */}
              <div className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 font-medium block">Degree</span>
                    <span className="text-slate-900 dark:text-slate-200 font-semibold">{personalInfo.degree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-violet-500 dark:text-violet-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 font-medium block">Career Objective</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{personalInfo.careerGoal}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Passions Pills Bento */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/90 dark:border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-200">
                  Core Passions & Focus
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {personalInfo.passions.map((passion, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story & 3 Pillars Bento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Story Paragraphs */}
            <div className="glass-card rounded-3xl p-8 border border-white/10 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>The Story & Mindset</span>
              </div>

              {personalInfo.aboutStory.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-600 dark:text-slate-300/90 text-sm sm:text-base leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 3 Pillars Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Full Stack
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  React, Spring Boot, REST APIs & scalable modern architecture.
                </p>
              </div>

              <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Mobile & AI
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Flutter cross-platform apps and intelligent algorithms.
                </p>
              </div>

              <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Cybersecurity
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Zero Trust, lightweight cryptography & resilient networking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
