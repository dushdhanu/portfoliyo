import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { timelineData } from '../../data/portfolioData';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceEdu: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'experience'>('all');

  const filteredTimeline = filter === 'all'
    ? timelineData
    : timelineData.filter(item => item.category === filter);

  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Academic & Career Path"
          title="Education &"
          highlightedText="Experience"
          subtitle="My academic foundation in Computer Science and prospective industry trajectories, structured with transparent milestones."
        />

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto no-scrollbar py-1 px-1 gap-1.5 sm:flex-wrap sm:justify-center mb-8 sm:mb-12 max-w-full">
          <button
            onClick={() => setFilter('all')}
            className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-400'
            }`}
          >
            All Milestones
          </button>

          <button
            onClick={() => setFilter('education')}
            className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'education'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-400'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Education</span>
          </button>

          <button
            onClick={() => setFilter('experience')}
            className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'experience'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-400'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internship Trajectory</span>
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-3 sm:ml-8 md:ml-32 space-y-8 sm:space-y-10 pl-5 sm:pl-8">
          {filteredTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon Indicator */}
              <div className="absolute -left-[31px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                {item.category === 'education' && <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                {item.category === 'experience' && <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />}
                {item.category === 'certification' && <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />}
              </div>

              {/* Timeline Card Content */}
              <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-7 border border-white/10 relative">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <h4 className="text-sm font-semibold text-cyan-500 dark:text-cyan-300 mt-1">
                  {item.institution}
                </h4>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Bullets */}
                {item.bullets && item.bullets.length > 0 && (
                  <div className="mt-4 space-y-1.5">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.isPlaceholder && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Editable slot</span>
                    <span className="text-cyan-400">src/data/portfolioData.ts</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
