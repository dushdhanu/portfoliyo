import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, ShieldCheck, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { Certificate } from '../../types/portfolio';

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose
}) => {
  if (!certificate) return null;

  const isPdf = certificate.certificateUrl?.toLowerCase().endsWith('.pdf');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-950/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
                    {certificate.category} Certification
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {certificate.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Certificate Media Preview */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-slate-100 dark:bg-navy-950 flex flex-col items-center justify-center min-h-[220px]">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-auto max-h-[350px] object-contain"
                  />
                ) : isPdf && certificate.certificateUrl ? (
                  <iframe
                    src={certificate.certificateUrl}
                    title={certificate.title}
                    className="w-full h-80 border-0"
                  />
                ) : (
                  <div className="p-8 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Verified Academic Credential
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mt-1">
                      Issued by <strong className="text-slate-700 dark:text-slate-300">{certificate.issuer}</strong> in {certificate.issueDate}.
                    </p>
                  </div>
                )}
              </div>

              {/* Metadata Details Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">
                    ISSUING ORGANIZATION
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {certificate.issuer}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">
                    ISSUE DATE
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    <span>{certificate.issueDate}</span>
                  </div>
                </div>

                {certificate.credentialId && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 sm:col-span-2">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">
                      CREDENTIAL / LICENSE ID
                    </span>
                    <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 break-all">
                      {certificate.credentialId}
                    </span>
                  </div>
                )}
              </div>

              {/* Skills Tags */}
              {certificate.skills && certificate.skills.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                    Demonstrated Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {certificate.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 text-xs font-medium"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-950/60 flex flex-col sm:flex-row items-center justify-end gap-3">
              {certificate.certificateUrl && (
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <FileText className="w-4 h-4 text-cyan-500" />
                  <span>Open PDF / Document</span>
                </a>
              )}

              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify on LinkedIn / Credly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

