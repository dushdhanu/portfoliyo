import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { certifications } from '../../data/certifications';
import { Certificate, CertificateCategory } from '../../types/portfolio';
import { CertificateModal } from '../common/CertificateModal';
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  Eye, 
  Linkedin
} from 'lucide-react';
import { personalInfo } from '../../data/profile';

const CATEGORIES: CertificateCategory[] = [
  'All',
  'Programming',
  'Software Engineering',
  'Cybersecurity',
  'Artificial Intelligence',
  'Cloud Computing'
];

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>('All');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCertificates = selectedCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory);

  const handleOpenCertificate = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Verified Competencies"
          title="Certifications &"
          highlightedText="Credentials"
          subtitle="Continuous learning, professional accreditations, and specialized technical milestones in software engineering and security."
        />

        {/* Category Filters & LinkedIn Sync Bar */}
        <div className="mt-6 sm:mt-8 mb-8 sm:mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex overflow-x-auto no-scrollbar py-1 px-1.5 gap-1.5 sm:flex-wrap sm:justify-center rounded-2xl glass-card border border-slate-200 dark:border-white/10 max-w-full">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* LinkedIn Verified Sync Banner */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:border-cyan-500 hover:scale-105 transition-all shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>Verify on LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certifications Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Glowing hover accent */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />

                  <div>
                    {/* Top Category Badge & Issuer Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-semibold">
                        {cert.category}
                      </span>

                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-300 group-hover:text-cyan-400 transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Issuer & Date */}
                    <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {cert.issuer}
                      </span>
                      <div className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{cert.issueDate}</span>
                      </div>
                    </div>

                    {/* Credential ID */}
                    {cert.credentialId && (
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-100/70 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                        <span className="text-slate-400">ID:</span>
                        <span className="font-semibold text-cyan-600 dark:text-cyan-400 truncate max-w-[180px]">
                          {cert.credentialId}
                        </span>
                      </div>
                    )}

                    {/* Skills pills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 3).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions: View Certificate & Verify */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center gap-2">
                    <button
                      onClick={() => handleOpenCertificate(cert)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 dark:border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 text-xs font-bold transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </button>

                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-sm shadow-cyan-500/20 hover:scale-105 transition-all"
                        aria-label={`Verify ${cert.title}`}
                        title="Verify Credential"
                      >
                        <ShieldCheck className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Recruiter-friendly Verified Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 text-center rounded-3xl glass-card border border-slate-200 dark:border-white/10 max-w-2xl mx-auto shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto mb-5 shadow-lg shadow-cyan-500/10">
              <ShieldCheck className="w-8 h-8" />
            </div>
            
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 inline-block mb-3">
              Recruiter Transparency Guarantee
            </span>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Verified Credentials & Achievements
            </h3>
            
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
              In accordance with professional software engineering integrity, certificate images and license IDs are published exclusively upon direct verification. Please inspect my verified academic progress and certifications directly on LinkedIn.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>Verify on LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-cyan-500" />
              <span>To add new certificates, place files in <code className="text-cyan-400 font-mono">public/certificates/</code> and update <code className="text-cyan-400 font-mono">src/data/certifications.ts</code></span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
