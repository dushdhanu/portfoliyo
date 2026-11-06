import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 contain-strict">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-60" />

      {/* Top Left Electric Cyan Aura - Hardware Accelerated Static Orb */}
      <div 
        className="absolute -top-28 -left-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-[90px] sm:blur-[120px] transform-gpu will-change-transform" 
      />

      {/* Center Right Neon Violet Aura */}
      <div 
        className="absolute top-1/3 -right-28 w-[22rem] sm:w-[28rem] h-[22rem] sm:h-[28rem] rounded-full bg-violet-600/15 dark:bg-violet-600/20 blur-[100px] sm:blur-[130px] transform-gpu will-change-transform"
      />

      {/* Bottom Left Royal Blue Aura */}
      <div 
        className="absolute bottom-24 -left-20 w-[20rem] sm:w-[26rem] h-[20rem] sm:h-[26rem] rounded-full bg-blue-600/15 dark:bg-blue-600/20 blur-[90px] sm:blur-[120px] transform-gpu will-change-transform"
      />

      {/* Bottom Center Subtle Ambient Tint */}
      <div 
        className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[24rem] sm:w-[32rem] h-[16rem] sm:h-[20rem] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[90px] sm:blur-[110px] transform-gpu"
      />
    </div>
  );
};
