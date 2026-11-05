import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Name letters for staggered reveal animation
  const firstName = "DUSHMANTHI".split("");

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    // Increment progress counter smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            // Allow exit animation to run before full unmount
            setTimeout(() => {
              document.body.style.overflow = 'unset';
              onComplete?.();
            }, 850);
          }, 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1] // Custom cubic-bezier for a luxury slide-up feel
            }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] text-white overflow-hidden select-none"
        >
          {/* Ambient Glow Orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Main Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
            
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>PORTFOLIO INITIALIZING</span>
            </motion.div>

            {/* Giant Name "DUSHMANTHI" with Staggered Entrance */}
            <div className="overflow-hidden py-1">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.15
                    }
                  }
                }}
                className="flex items-center justify-center flex-wrap gap-1 sm:gap-2 md:gap-3"
              >
                {firstName.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    variants={{
                      hidden: { y: 90, opacity: 0, scale: 0.7 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          type: "spring",
                          damping: 12,
                          stiffness: 120
                        }
                      }
                    }}
                    className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Sub-name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-3 flex items-center gap-3 text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.35em] text-slate-400"
            >
              <span className="h-px w-6 sm:w-10 bg-cyan-500/40" />
              <span>DHANANJANA</span>
              <span className="h-px w-6 sm:w-10 bg-cyan-500/40" />
            </motion.div>

            {/* Glowing Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 sm:mt-12 w-52 sm:w-72 flex flex-col items-center gap-2.5"
            >
              {/* Outer Bar */}
              <div className="w-full h-1.5 sm:h-2 bg-slate-800/90 rounded-full overflow-hidden p-0.5 border border-cyan-500/20 backdrop-blur-md shadow-inner">
                {/* Animated Inner Glow Bar */}
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 shadow-[0_0_12px_rgba(6,182,212,0.85)] transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status & Numeric Percentage */}
              <div className="flex justify-between items-center w-full text-[11px] sm:text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold tracking-wider">LOADING EXPERIENCE</span>
                <span className="font-bold text-white tabular-nums">{progress