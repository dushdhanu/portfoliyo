import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, MapPin, Github, Linkedin, GraduationCap, Briefcase, Code, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo, projects, skillCategories, researchProject, timelineData } from '../../data/portfolioData';

interface ResumePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePdfModal: React.FC<ResumePdfModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 dark:bg-navy-950/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden my-auto z-10"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/90 dark:bg-navy-950/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    Professional Curriculum Vitae
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    A4 Clean Format • Instant Print & Save as PDF
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Dushmanthi_Dhananjana_Resume.pdf"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wide border border-slate-300 dark:border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-700 dark:text-slate-200 hover:text-cyan-400 transition-all"
                  title="Download static PDF if uploaded"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Save as PDF / Print</span>
                  <span className="sm:hidden">Print</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close CV Modal"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Resume Sheet Preview */}
            <div className="overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-navy-950 flex justify-center">
              <div
                id="printable-cv"
                ref={resumeRef}
                className="w-full max-w-[800px] bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200/80 space-y-7 leading-relaxed font-sans"
              >
                {/* CV Header */}
                <header className="border-b-2 border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">
                      {personalInfo.name}
                    </h1>
                    <p className="text-sm sm:text-base font-bold text-cyan-700 uppercase tracking-widest mt-1">
                      {personalInfo.degree} • Software Engineer Aspirant
                    </p>
                    <p className="text-xs text-slate-600 mt-2 max-w-xl">
                      {personalInfo.bio}
                    </p>
                  </div>

                  {/* Contact Badges */}
                  <div className="text-xs text-slate-700 space-y-1.5 shrink-0">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-700" />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-3.5 h-3.5 text-cyan-700" />
                      <span>github.com/dushdhanu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-3.5 h-3.5 text-cyan-700" />
                      <span>linkedin.com/in/dushmanthi-dhananjana</span>
                    </div>
                  </div>
                </header>

                {/* Section: Education */}
                <section className="avoid-break">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-cyan-700" />
                    <span>Education & Academic Credentials</span>
                  </h2>

                  <div className="space-y-3">
                    {timelineData.filter(t => t.category === 'education').map(edu => (
                      <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                        <div>
                          <h3 className="font-bold text-slate-900 text-sm">{edu.title}</h3>
                          <p className="text-slate-700 font-medium">{edu.institution} • {edu.location}</p>
                          <p className="text-slate-600 mt-0.5">{edu.description}</p>
                        </div>
                        <span className="text-slate-500 font-semibold shrink-0 sm:text-right mt-1 sm:mt-0">
                          {edu.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Technical Competencies */}
                <section className="avoid-break">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2 mb-3">
                    <Code className="w-4 h-4 text-cyan-700" />
                    <span>Technical Competencies</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                    {skillCategories.map(cat => (
                      <div key={cat.id} className="flex items-baseline gap-2">
                        <span className="font-bold text-slate-800 shrink-0">{cat.name}:</span>
                        <span className="text-slate-700">
                          {cat.skills.map(s => s.name).join(', ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Featured Engineering Projects */}
                <section className="avoid-break">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-cyan-700" />
                    <span>Featured Engineering Projects</span>
                  </h2>

                  <div className="space-y-4">
                    {projects.map(proj => (
                      <div key={proj.id} className="space-y-1 text-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                            <span>{proj.title}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                              {proj.category}
                            </span>
                          </h3>
                        </div>

                        <p className="text-slate-700">{proj.description}</p>

                        <div className="pl-3 border-l-2 border-cyan-600/40 space-y-0.5 my-1.5">
                          {proj.highlights.map((h, idx) => (
                            <p key={idx} className="text-slate-600 text-[11px] leading-relaxed">
                              • {h}
                            </p>
                          ))}
                        </div>

                        <p className="text-[11px] text-slate-500 font-mono">
                          <span className="font-bold text-slate-700 font-sans">Technologies: </span>
                          {proj.technologies.join(' • ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Academic Research Focus */}
                <section className="avoid-break">
                  <h2 className="text-xs font-extrabold tracking-widest uppercase text-slate-900 pb-1 border-b border-slate-300 flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-700" />
                    <span>Academic Research & Specializations</span>
                  </h2>

                  <div className="text-xs space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <h3 className="font-bold text-slate-900 text-sm">
                        {researchProject.title}
                      </h3>
                      <span className="text-slate-500 font-semibold">{researchProject.status}</span>
                    </div>
                    <p className="text-cyan-800 font-semibold text-[11px]">
                      {researchProject.subtitle}
                    </p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      {researchProject.overview}
                    </p>
                  </div>
                </section>

                {/* Footer Note */}
                <footer className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-500 flex items-center justify-between">
                  <span>Verified Curriculum Vitae • Dushmanthi Dhananjana</span>
                  <span>Portfolio: github.com/dushdhanu</span>
                </footer>
              </div>
            </div>

            {/* Bottom Bar with One-Tap Print CTA */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50/90 dark:bg-navy-950/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Tapping <strong className="text-slate-800 dark:text-slate-200">"Save as PDF"</strong> opens your device dialog. Choose <span className="font-semibold text-cyan-500">Destination: Save as PDF</span>.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 text-xs font-semibold transition-colors"
                >
                  Close
                </button>

                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download / Print PDF</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

