import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../../data/profile';

interface ResumePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cvStyles = [
  { id: 'ats', label: 'ATS Classic', url: personalInfo.resumeUrl, filename: 'Dushmanthi_Dhananjana_ATS_CV.pdf' },
  { id: 'purple', label: 'Purple Template', url: import.meta.env.BASE_URL + 'Dushmanthi_Dhananjana_Purple_Template_CV.pdf', filename: 'Dushmanthi_Dhananjana_Purple_Template_CV.pdf' }
];

export const ResumePdfModal: React.FC<ResumePdfModalProps> = ({ isOpen, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [selectedStyleId, setSelectedStyleId] = useState('ats');
  const selectedStyle = cvStyles.find(style => style.id === selectedStyleId) ?? cvStyles[0];

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-slate-950/85 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full h-full sm:h-[90vh] sm:max-w-5xl flex flex-col bg-slate-900 border-0 sm:border sm:border-white/10 sm:rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="w-6 h-6 text-cyan-400 shrink-0" />
                <div className="min-w-0">
                  <h3 id="resume-modal-title" className="text-sm sm:text-base font-bold text-white">Curriculum Vitae</h3>
                  <p className="text-xs text-slate-400 truncate">Dushmanthi Dhananjana</p>
                </div>
              </div>
              <button ref={closeRef} onClick={onClose} aria-label="Close CV" className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div role="group" aria-label="CV style" className="flex flex-wrap gap-2 px-4 sm:px-6 pt-3 shrink-0">
              {cvStyles.map(style => (
                <button
                  key={style.id}
                  type="button"
                  aria-pressed={selectedStyle.id === style.id}
                  onClick={() => setSelectedStyleId(style.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${selectedStyle.id === style.id ? 'bg-violet-500/20 border-violet-400 text-violet-200' : 'border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'}`}
                >
                  {style.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-white/10 shrink-0">
              <a href={selectedStyle.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs sm:text-sm text-cyan-300 hover:text-cyan-200">
                <ExternalLink className="w-4 h-4" />Open PDF / Print
              </a>
              <a href={selectedStyle.url} download={selectedStyle.filename} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-colors">
                <Download className="w-4 h-4" />Download PDF
              </a>
            </div>
            <object key={selectedStyle.id} data={selectedStyle.url} type="application/pdf" aria-label={`Dushmanthi Dhananjana's CV — ${selectedStyle.label}`} className="w-full flex-1 min-h-0 bg-slate-100">
              <div className="p-8 text-center text-slate-700">
                <p>Your browser cannot display this PDF inline.</p>
                <a href={selectedStyle.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-700 underline">Open the CV in a new tab</a>
              </div>
            </object>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
