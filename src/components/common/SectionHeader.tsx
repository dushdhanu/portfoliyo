import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedText?: string;
  subtitle: string;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`mb-8 sm:mb-14 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {/* Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {badge}
      </motion.div>

      {/* Main Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
      >
        {title}{' '}
        {highlightedText && (
          <span className="gradient-text">{highlightedText}</span>
        )}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300/80 leading-relaxed font-normal"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
