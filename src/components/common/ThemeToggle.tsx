import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative p-2.5 rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-300" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600" />
        )}
      </motion.div>
    </button>
  );
};
