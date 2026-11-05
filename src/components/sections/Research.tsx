import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { researchProject } from '../../data/portfolioData';
import { ShieldAlert, Cpu, Lock, Network, BookOpen, Layers, CheckCircle } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Academic Research Focus"
          title="Cybersecurity &"
          highlightedText="IoMT Edge Networks"
          subtitle="Exploring the intersection of lightweight cryptography, zero-trust architecture, and resilient edge healthcare devices."
        />

        {/* Master Research Showcase Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/20 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]"
        >
          {/* Top subtle decorative neon glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Research Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200/50 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{researchProject.domain}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {researchProject.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                {researchProject.subtitle}
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {researchProject.status}
              </span>
            </div>
          </div>

          {/* Research Overview */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Research Motivation & Scope
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {researchProject.overview}
            </p>
          </div>

          {/* 3 Core Conceptual Pillars */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchProject.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Lock className="w-5 h-5" />}
                  {idx === 1 && <ShieldAlert className="w-5 h-5" />}
                  {idx === 2 && <Network className="w-5 h-5" />}
                </div>

                <h5 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h5>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Grid: Objectives & Focus Tags */}
          <div className="mt-10 pt-8 border-t border-slate-200/50 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Targeted Outcomes */}
            <div className="lg:col-span-7 space-y-2.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Planned Research Outcomes (Proposed Milestones)</span>
              </h5>
              {researchProject.targetedOutcomes.map((outcome, oIdx) => (
                <div key={oIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

            {/* Security Focus Pills */}
            <div className="lg:col-span-5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>Key Technical Domains</span>
              </h5>
              <div className="flex flex-wrap gap-2">
                {researchProject.securityFocus.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
