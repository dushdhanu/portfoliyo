import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'certifications',
  'github',
  'research',
  'experience',
  'contact'
] as const;

export type SectionId = typeof SECTION_IDS[number];

interface NavigationContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
  scrollToSection: (id: string) => void;
  isNavigating: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const HEADER_OFFSET_PX = 72; // Precise offset to clear the sticky glass navbar

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isNavigating, setIsNavigating] = useState(false);

  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Smoothly scroll to section with exact header offset and instant visual feedback
  const scrollToSection = useCallback((id: string) => {
    const cleanId = id.replace('#', '');
    const targetElement = document.getElementById(cleanId);

    // Provide 0ms instant visual tab feedback
    setActiveSection(cleanId);
    isNavigatingRef.current = true;
    setIsNavigating(true);

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    // Reset navigating flag when scroll finishes or after 850ms timeout
    scrollTimeoutRef.current = window.setTimeout(() => {
      isNavigatingRef.current = false;
      setIsNavigating(false);
    }, 850);

    if (targetElement) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const elementRect = targetElement.getBoundingClientRect();
      const targetScrollTop = elementRect.top + window.scrollY - HEADER_OFFSET_PX;

      window.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });

      // Update URL hash cleanly without forcing abrupt browser jump
      if (window.location.hash !== `#${cleanId}`) {
        window.history.pushState(null, '', `#${cleanId}`);
      }
    }
  }, []);

  // Listen for user interrupt (wheel, touchmove) to immediately return scroll control
  useEffect(() => {
    const handleUserInterrupt = () => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        setIsNavigating(false);
        if (scrollTimeoutRef.current) {
          window.clearTimeout(scrollTimeoutRef.current);
        }
      }
    };

    window.addEventListener('wheel', handleUserInterrupt, { passive: true });
    window.addEventListener('touchmove', handleUserInterrupt, { passive: true });
    window.addEventListener('pointerdown', handleUserInterrupt, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchmove', handleUserInterrupt);
      window.removeEventListener('pointerdown', handleUserInterrupt);
    };
  }, []);

  // Browser Back / Forward button support
  useEffect(() => {
    const handlePopState = () => {
      const hashId = window.location.hash.replace('#', '');
      if (hashId && SECTION_IDS.includes(hashId as SectionId)) {
        scrollToSection(hashId);
      } else {
        scrollToSection('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [scrollToSection]);

  // Setup efficient IntersectionObserver for natural scrolling
  useEffect(() => {
    // Collect observed elements
    const elementsToObserve: HTMLElement[] = [];
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) elementsToObserve.push(el);
    }

    if (elementsToObserve.length === 0) return;

    // Use rootMargin to detect the section currently dominating upper-middle of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // Skip updating active section while programmatic smooth scroll is underway to prevent flickering
        if (isNavigatingRef.current) return;

        // Find intersecting entries
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or proximity to viewport center
          visibleEntries.sort((a, b) => {
            return b.intersectionRatio - a.intersectionRatio;
          });

          const mostVisibleId = visibleEntries[0].target.id;
          if (mostVisibleId) {
            setActiveSection((prev) => (prev !== mostVisibleId ? mostVisibleId : prev));
          }
        }
      },
      {
        root: null,
        // Top margin clears navbar, bottom margin triggers before leaving screen
        rootMargin: '-15% 0px -50% 0px',
        threshold: [0.1, 0.3, 0.6]
      }
    );

    elementsToObserve.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
        scrollToSection,
        isNavigating
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
