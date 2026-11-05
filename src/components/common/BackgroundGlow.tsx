import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Top Left Electric Cyan Orb */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-[128px] animate-blob" 
      />

      {/* Center Right Neon Violet Orb */}
      <div 
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-violet-600/15 dark:bg-violet-600/20 blur-[140px] animate-blob"
        style={{ animationDelay: '2s' }}
      />

      {/* Bottom Left Royal Blue Orb */}
      <div 
        className="absolute bottom-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-blue-600/15 dark:bg-blue-600/20 blur-[130px] animate-blob"
        style={{ animationDelay: '4s' }}
      />

      {/* Bottom Center Subtle Ambient Tint */}
      <div 
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[36rem] h-[20rem] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px]"
      />
    </div>
  );
};
