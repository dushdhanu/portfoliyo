import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Download, 
  MapPin, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Briefcase, 
  Code, 
  ShieldCheck, 
  Sparkles, 
  Loader2, 
  CheckCircle2, 
  ExternalLink,
  Mail
} from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { generateResumePdf } from '../../utils/generatePdf';

interface ResumePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePdfModal: React.FC<ResumePdfModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Lock background scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle Client-Side Real Vector PDF Generation
  const handleDownloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      setErrorMessage(null);
      await generateResumePdf(resumeData);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error('PDF generation error:', err);
      setErrorMessage('Could not generate PDF directly in browser. Please use the Print option.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md no-print"
          />

          {/* Modal Container: Fullscreen on Mobile, Rounded Window on Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full h-full sm:h-auto sm:max-h-[94vh] sm:max-w-4xl flex flex-col bg-slate-900 border-0 sm:border sm:border-white/10 sm:rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-slate-900/95 backdrop-blur-xl shrink-0 z-20 no-print">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 id="resume-modal-title" className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                    Curriculum Vitae
                  </h3>
                  <p className="text-[11px] text-cyan-400 font-mono tracking-wider uppercase truncate">
                    A4 Clean Format &bull; Selectable Text
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Real Download PDF Button */}
                <button
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                  title="Download Vector Selectable PDF"
                >
                  {isGeneratingPdf ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                  ) : downloadSuccess ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span className="hidden sm:inline">
                    {isGeneratingPdf ? 'Generating...' : downloadSuccess ? 'Downloaded!' : 'Download PDF'}
                  </span>
                  <span className="sm:hidden">
                    {isGeneratingPdf ? '...' : downloadSuccess ? 'Done' : 'PDF'}
                  </span>
                </button>

                {/* Print / Save as PDF Button */}
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wide border border-white/10 hover:border-cyan-400/50 hover:bg-white/5 text-slate-200 hover:text-cyan-300 transition-all"
                  title="Open Browser Print Dialog"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label="Close CV Modal"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Error Message if PDF Generation Fails */}
            {errorMessage && (
              <div className="px-6 py-2 bg-rose-500/10 border-b border-rose-500/20 text-rose-300 text-xs text-center no-print">
                {errorMessage}
              </div>
            )}

            {/* Scrollable Document Area: Flex-1 with min-h-0 guarantees scrollability without cutoffs */}
            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 sm:p-6 md:p-8 bg-slate-950/90 flex flex-col items-center">
              {/* Unified White A4 Resume Card: Wraps ALL content completely so no text ever spills onto dark background */}
              <div
                id="printable-cv"
                ref={resumeRef}
                className="w-full max-w-[800px] bg-white text-slate-900 p-4 sm:p-10 md:p-12 rounded-xl shadow-2xl border border-slate-200/80 space-y-5 sm:space-y-6 leading-relaxed font-sans text-left"
              >
                {/* CV Header */}
                <header className="border-b-2 border-slate-800 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">
                      {resumeData.personalInfo.name}
                    </h1>
                    <p className="text-xs sm:text-sm font-bold text-cyan-700 tracking-wider">
                      {resumeData.personalInfo.title}
                    </p>
                    <p className="text-xs text-slate-600 max-w-xl pt-1 leading-relaxed">
                      {resumeData.personalInfo.summary}
                    </p>
                  </div>

                  {/* Contact Badges */}
                  <div className="text-xs text-slate-700 space-y-1.5 shrink-0 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                      <span>{resumeData.personalInfo.location}</span>
                    </div>

                    {resumeData.personalInfo.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:underline text-cyan-700">
                          {resumeData.personalInfo.email}
                        </a>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <Github className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                      <a 
                        href={resumeData.personalInfo.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline text-cyan-700 flex items-center gap-1"
                      >
                        <span>{resumeData.personalInfo.githubDisplay}</span>
                        <ExternalLink className="w-2.5 h-2.5 no-print" />
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Linkedin className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                      <a 
                        href={resumeData.personalInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline text-cyan-700 flex items-center gap-1"
                      >
                        <span>{resumeData.personalInfo.linkedinDisplay}</span>
                        <ExternalLink className="w-2.5 h-2.5 no-print" />
                      </a>
                    </div>
                  </div>
                </header>

                {/* Section: Education */}
                <section className="avoid-break space-y-3">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Education & Academic Credentials</span>
                  </h2>

                  <div className="space-y-4">
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="space-y-1 text-xs">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h3 className="font-bold text-slate-950 text-sm">
                            {edu.degree}
                          </h3>
                          <span className="text-slate-500 font-semibold text-[11px] sm:text-right shrink-0">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-cyan-800 font-medium text-xs">
                          {edu.institution} &bull; {edu.location}
                        </p>
                        <div className="space-y-1 pt-1">
                          {edu.bullets.map((bullet, bIdx) => (
                            <p key={bIdx} className="text-slate-600 text-[11px] leading-relaxed pl-2 border-l border-slate-200">
                              &bull; {bullet}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Technical Competencies */}
                <section className="avoid-break space-y-3">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2">
                    <Code className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Technical Competencies</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                    {resumeData.skills.map((skillGroup, idx) => (
                      <div key={idx} className="flex items-baseline gap-1.5">
                        <span className="font-bold text-slate-800 shrink-0">{skillGroup.category}:</span>
                        <span className="text-slate-600">{skillGroup.items.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Featured Engineering Projects */}
                <section className="avoid-break space-y-3">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Featured Engineering Projects</span>
                  </h2>

                  <div className="space-y-4">
                    {resumeData.projects.map((proj) => (
                      <div key={proj.id} className="space-y-1.5 text-xs">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                            <span>{proj.title}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-normal">
                              {proj.category}
                            </span>
                          </h3>

                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-700 font-semibold hover:underline text-[11px] inline-flex items-center gap-1"
                          >
                            <span>[ View Repository ]</span>
                            <ExternalLink className="w-2.5 h-2.5 no-print" />
                          </a>
                        </div>

                        <p className="text-[11px] text-slate-500 font-mono">
                          <span className="font-bold text-slate-700 font-sans">Technologies: </span>
                          {proj.technologies.join(' &bull; ')}
                        </p>

                        <div className="pl-3 border-l-2 border-cyan-600/40 space-y-1 my-1">
                          {proj.bullets.map((b, bIdx) => (
                            <p key={bIdx} className="text-slate-600 text-[11px] leading-relaxed">
                              &bull; {b}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Academic Research Focus */}
                <section className="avoid-break space-y-2">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Academic Research Focus & Specialization</span>
                  </h2>

                  <div className="text-xs space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="font-bold text-slate-950 text-sm">
                        {resumeData.research.title}
                      </h3>
                      <span className="text-slate-500 font-semibold text-[11px] shrink-0">
                        {resumeData.research.status}
                      </span>
                    </div>

                    <p className="text-cyan-800 font-semibold text-[11px]">
                      Domain: {resumeData.research.domain}
                    </p>

                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      {resumeData.research.description}
                    </p>

                    <div className="pl-3 border-l-2 border-cyan-600/40 space-y-1 pt-1">
                      {resumeData.research.outcomes.map((outcome, oIdx) => (
                        <p key={oIdx} className="text-slate-600 text-[11px] leading-relaxed">
                          &bull; {outcome}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Document Footer */}
                <footer className="pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span>Verified Developer Curriculum Vitae &bull; Dushmanthi Dhananjana</span>
                  <span>github.com/dushdhanu</span>
                </footer>
              </div>
            </div>

            {/* Bottom Modal Footer with Action Buttons */}
            <div className="px-4 sm:px-6 py-3 border-t border-white/10 bg-slate-900/95 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 z-20 no-print">
              <p className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
                Selectable-text vector PDF generated dynamically in your browser.
              </p>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 text-xs font-semibold transition-colors"
                >
                  Close
                </button>

                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 text-xs font-bold transition-all"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save as PDF</span>
                </button>

                <button
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                >
                  {isGeneratingPdf ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span>{isGeneratingPdf ? 'Generating...' : 'Download PDF'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
