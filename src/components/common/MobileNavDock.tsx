import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code2, Menu } from 'lucide-react';

interface MobileNavDockProps {
  activeSection: string;
  onOpenMenu: () => void;
  isDrawerOpen?: boolean;
}

interface DockItem {
  id: string;
  label: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  isAction?: boolean;
}

const DOCK_ITEMS: DockItem[] = [
  { id: 'home', label: 'Home', href: '#home', icon: Home },
  { id: 'about', label: 'About', href: '#about', icon: User },
  { id: 'projects', label: 'Projects', href: '#projects', icon: Briefcase },
  { id: 'skills', label: 'Skills', href: '#skills', icon: Code2 },
  { id: 'menu', label: 'Menu', icon: Menu, isAction: true },
];

export const MobileNavDock: React.FC<MobileNavDockProps> = ({
  activeSection,
  onOpenMenu,
  isDrawerOpen = false
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (!href) return;
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update hash without forcing browser jump
      window.history.pushState(null, '', href);
    }
  };

  // If mobile drawer is open, keep dock hidden to prevent overlapping
  if (isDrawerOpen) return null;

  return (
    <nav 
      aria-label="Mobile Navigation Dock"
      className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[380px] md:hidden pointer-events-auto transition-all duration-300"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="floating-glass-dock rounded-full px-2 py-1.5 flex items-center justify-between border border-white/15 shadow-2xl">
        {DOCK_ITEMS.map((item) => {
          const isActive = !item.isAction && activeSection === item.id;
          const IconComponent = item.icon;

          if (item.isAction) {
            return (
              <button
                key={item.id}
                onClick={onOpenMenu}
                aria-label="Open Full Navigation Menu"
                className="relative flex flex-col items-center justify-center min-w-[54px] min-h-[44px] py-1 px-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 active:scale-95 transition-all"
              >
                <div className="p-1 rounded-full">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold tracking-tight">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              aria-label={`Navigate to ${item.label}`}
              className={`relative flex flex-col items-center justify-center min-w-[54px] min-h-[44px] py-1 px-2 rounded-full transition-all ${
                isActive
                  ? 'text-cyan-500 dark:text-cyan-300 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockBubble"
                  className="absolute inset-0 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.25)] -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <div className="p-1 rounded-full">
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-medium tracking-tight">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
