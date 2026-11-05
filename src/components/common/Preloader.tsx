import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Name letters for slow, elegant staggered reveal
  const firstName = "DUSHMANTHI".split("");

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    // Slower, smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hold gracefully at 100% before transition
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              document.body.style.overflow = 'unset';
              onComplete?.();
            }, 1000); // Slower, luxury exit duration
          }, 700);
          return 100;
        }
        // Small gentle increments for slow, cinematic fill
        const step = Math.floor(Math.random() * 3) + 1; // 1 to 3% per tick
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  // Allow clicking anywhere to skip if recruiter wants to jump straight into portfolio
  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete?.();
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            opacity: 0.95,
            transition: {
              duration: 1.05,
              ease: [0.76, 0, 0.24, 1] // Luxury ease curve
            }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden select-none cursor-default"
        >
          {/* Ambient Glow Orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Main Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
            
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1 mb-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>PORTFOLIO INITIALIZING</span>
            </motion.div>

            {/* Refined Name "DUSHMANTHI" with Slower Stagger and Elegant Size */}
            <div className="overflow-hidden py-2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.09, // Slower, calmer stagger
                      delayChildren: 0.25
                    }
                  }
                }}
                className="flex items-center justify-center flex-wrap gap-1 sm:gap-2 md:gap-2.5"
              >
                {firstName.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    variants={{
                      hidden: { y: 50, opacity: 0, scale: 0.85 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.85,
                          ease: [0.22, 1, 0.36, 1] // Smooth cinematic deceleration
                        }
                      }
                    }}
                    className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]"
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
              transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
              className="mt-4 flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.4em] text-slate-400"
            >
              <span className="h-px w-8 sm:w-12 bg-cyan-500/40" />
              <span>DHANANJANA</span>
              <span className="h-px w-8 sm:w-12 bg-cyan-500/40" />
            </motion.div>

            {/* Slower Glowing Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 sm:mt-14 w-48 sm:w-64 flex flex-col items-center gap-3"
            >
              {/* Outer Bar */}
              <div className="w-full h-1.5 sm:h-2 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-cyan-500/25 backdrop-blur-md shadow-inner">
                {/* Animated Inner Glow Bar */}
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 shadow-[0_0_12px_rgba(6,182,212,0.85)] transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status & Numeric Percentage */}
              <div className="flex justify-between items-center w-full text-[11px] sm:text-xs font-mono text-slate-400">
                <span className="text-cyan-400/90 font-medium tracking-wider">EXPERIENCE LOADING</span>
                <span className="font-bold text-white tabular-nums tracking-widest">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Info & Optional Skip Button */}
          <div className="absolute bottom-6 sm:bottom-8 flex flex-col items-center gap-2 z-10 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-500 uppercase text-center"
            >
              Computer Science Undergraduate &bull; Full Stack Developer
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              onClick={handleSkip}
              className="text-[10px] font-mono tracking-widest text-slate-400 hover:text-cyan-400 transition-colors uppercase mt-1 cursor-pointer"
            >
              [ Skip Intro &rarr; ]
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
