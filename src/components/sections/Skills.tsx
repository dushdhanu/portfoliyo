import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { skillCategories } from '../../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  Wrench, 
  ShieldCheck, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-violet-400" />,
  Wrench: <Wrench className="w-5 h-5 text-indigo-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-rose-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills & Technologies"
          highlightedText="Mastery"
          subtitle="A comprehensive toolkit across programming languages, full-stack frameworks, database engineering, and specialized security disciplines."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-400'
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-400'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {iconMap[category.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          skill.featured
                            ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 dark:text-cyan-300 font-semibold shadow-sm'
                            : 'bg-white/5 border border-white/10 text-slate-700 dark:text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {skill.featured ? (
                          <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                        ) : (
                          <CheckCircle className="w-3 h-3 text-slate-400 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-cyan-400/80 font-mono">portfolioData.ts</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
