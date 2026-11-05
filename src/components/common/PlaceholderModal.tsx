import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  itemType?: 'resume' | 'project-github' | 'project-demo' | 'contact';
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  itemType = 'resume'
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-2xl glass-card p-6 md:p-8 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden"
          >
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Configurable Item Placeholder
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {description}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>How to customize this in your code:</span>
              </div>
              <p className="text-xs text-slate-300 font-mono bg-navy-950/60 p-2.5 rounded-lg border border-white/5 overflow-x-auto">
                src/data/portfolioData.ts
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Update the link or details directly in the configuration file to connect your verified link.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/10 transition-colors text-sm font-medium"
              >
                Dismiss
              </button>
              {itemType === 'resume' && (
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume Request - Dushmanthi Dhananjana`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <span>Request Resume via Email</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
