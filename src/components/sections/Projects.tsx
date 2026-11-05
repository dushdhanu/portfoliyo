import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { PlaceholderModal } from '../common/PlaceholderModal';
import { Github, ExternalLink, Code2, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    type: 'project-github' | 'project-demo';
  }>({
    isOpen: false,
    title: '',
    description: '',
    type: 'project-github'
  });

  const handleOpenGithub = (project: Project) => {
    setActiveModal({
      isOpen: true,
      title: `${project.title} - Source Code`,
      description: `The repository link for "${project.title}" is currently set as an editable placeholder in src/data/portfolioData.ts. Once you publish the repository to your GitHub profile (https://github.com/dushdhanu), update the URL in portfolioData.ts to take visitors directly to your repository.`,
      type: 'project-github'
    });
  };

  const handleOpenLiveDemo = (project: Project) => {
    setActiveModal({
      isOpen: true,
      title: `${project.title} - Live Demonstration`,
      description: `The live demo link for "${project.title}" is marked as a placeholder in src/data/portfolioData.ts. Deploying to Vercel, Netlify, or your cloud provider of choice will allow you to link the live production URL directly here.`,
      type: 'project-demo'
    });
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Featured Engineering"
          title="Curated Projects &"
          highlightedText="Showcase"
          subtitle="A selection of software applications, backend services, and mobile systems developed with clean code, testability, and modern frameworks."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              {/* Project Card Header / Preview Area */}
              <div className="relative h-52 sm:h-60 bg-gradient-to-br from-navy-900 via-slate-900 to-navy-950 p-6 flex flex-col justify-between overflow-hidden border-b border-white/10">
                {/* Ambient glowing orb inside card */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/15 blur-2xl group-hover:bg-cyan-500/25 transition-all" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-violet-600/15 blur-2xl group-hover:bg-violet-600/25 transition-all" />

                {/* Top bar with category badge and icon */}
                <div className="relative flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300">
                    {project.category}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                    <Code2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Center graphic styling */}
                <div className="relative z-10 my-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:scale-105 transition-transform">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-slate-200">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Bottom tech badges preview */}
                <div className="relative z-10 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-navy-950/80 border border-white/10 text-[10px] font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded-lg bg-navy-950/80 border border-white/10 text-[10px] font-mono text-slate-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Complete Tech Badges */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: GitHub & Live Demo */}
                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => handleOpenGithub(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300/60 dark:border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 text-slate-800 dark:text-slate-200 hover:text-cyan-400 text-xs font-bold tracking-wide transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </button>

                  <button
                    onClick={() => handleOpenLiveDemo(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold tracking-wide shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <PlaceholderModal
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal(prev => ({ ...prev, isOpen: false }))}
        title={activeModal.title}
        description={activeModal.description}
        itemType={activeModal.type}
      />
    </section>
  );
};
