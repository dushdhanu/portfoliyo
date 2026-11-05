import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { projects as curatedProjects } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Layers, 
  RefreshCw 
} from 'lucide-react';

interface GitHubRepoApi {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  homepage: string | null;
  topics?: string[];
  fork: boolean;
}

const CATEGORIES = [
  'All Projects',
  'Web Development',
  'Backend',
  'Mobile Applications',
  'Cybersecurity & Systems'
];

export const Projects: React.FC = () => {
  const [projectList, setProjectList] = useState<Project[]>(curatedProjects);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  // Fetch and sync GitHub Public Repositories metadata
  useEffect(() => {
    let isMounted = true;

    const syncGitHubRepos = async () => {
      setIsSyncing(true);
      try {
        const response = await fetch('https://api.github.com/users/dushdhanu/repos?sort=updated&per_page=50', {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (!response.ok) {
          // If rate limited or 403/404, gracefully maintain curated data
          setIsSyncing(false);
          return;
        }

        const repos: GitHubRepoApi[] = await response.json();
        if (!Array.isArray(repos) || !isMounted) return;

        // Merge GitHub metadata with curated projects
        const updatedCurated = curatedProjects.map((proj) => {
          const matched = repos.find(
            (r) =>
              r.name.toLowerCase() === proj.title.toLowerCase().replace(/\s+/g, '-') ||
              r.html_url.toLowerCase() === proj.githubUrl.toLowerCase() ||
              proj.githubUrl.toLowerCase().includes(r.name.toLowerCase())
          );

          if (matched) {
            return {
              ...proj,
              stars: matched.stargazers_count,
              forks: matched.forks_count,
              updatedAt: new Date(matched.updated_at).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short'
              }),
              githubUrl: matched.html_url,
              liveUrl: matched.homepage && matched.homepage.trim().length > 0 ? matched.homepage : proj.liveUrl,
              primaryLanguage: matched.language || proj.primaryLanguage
            };
          }
          return proj;
        });

        // Discover any additional public repos belonging to dushdhanu
        const additionalRepos: Project[] = repos
          .filter((r) => !r.fork && !updatedCurated.some((c) => c.githubUrl.toLowerCase().includes(r.name.toLowerCase())))
          .map((r) => {
            // Categorize based on language/topics
            let cat = 'Web Development';
            const lang = (r.language || '').toLowerCase();
            if (lang === 'dart' || lang === 'flutter') cat = 'Mobile Applications';
            else if (lang === 'python' || lang === 'java' || lang === 'c++') cat = 'Backend';
            else if (r.name.toLowerCase().includes('soc') || r.name.toLowerCase().includes('security')) cat = 'Cybersecurity & Systems';

            return {
              id: `gh-${r.name}`,
              title: r.name.replace(/[-_]/g, ' '),
              category: cat,
              description: r.description || `Open-source software repository built with ${r.language || 'modern technology'}.`,
              highlights: [
                `Public open-source repository on GitHub`,
                r.language ? `Primary language: ${r.language}` : `Active software development`,
                `Continuous updates and version control`
              ],
              technologies: [r.language || 'Code', 'Git', 'GitHub'].filter(Boolean),
              githubUrl: r.html_url,
              liveUrl: r.homepage && r.homepage.trim().length > 0 && !r.homepage.includes('github.com') ? r.homepage : undefined,
              stars: r.stargazers_count,
              forks: r.forks_count,
              updatedAt: new Date(r.updated_at).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short'
              }),
              primaryLanguage: r.language || 'Code',
              isFeatured: false,
              isPlaceholder: false
            };
          });

        if (isMounted) {
          setProjectList([...updatedCurated, ...additionalRepos]);
          setLastSynced(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
      } catch (err) {
        // Silently preserve curated fallback
        console.debug('GitHub public API synchronization note:', err);
      } finally {
        if (isMounted) setIsSyncing(false);
      }
    };

    syncGitHubRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All Projects'
    ? projectList
    : projectList.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Featured Engineering"
          title="Curated Projects &"
          highlightedText="GitHub Repositories"
          subtitle="Real-world full-stack platforms, backend microservices, mobile apps, and security tools built with clean architecture."
        />

        {/* Sync Status & Category Filters */}
        <div className="mt-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-card border border-slate-200 dark:border-white/10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GitHub Live Sync Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 ${isSyncing ? 'block' : 'hidden'}`} />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span>
              {isSyncing ? 'Syncing GitHub Repos...' : lastSynced ? `GitHub API Synced (${lastSynced})` : 'Live GitHub Linked'}
            </span>
            <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isSyncing ? 'animate-spin' : ''}`} />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 flex flex-col justify-between group relative"
              >
                {/* Project Card Header Area */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-200/50 dark:border-white/10">
                  {/* Glowing background orbs */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/15 blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-violet-600/15 blur-2xl group-hover:bg-violet-600/30 transition-all duration-500" />

                  {/* Top Bar with Category & Featured Badge */}
                  <div className="relative flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300">
                        {project.category}
                      </span>
                      {project.isFeatured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    {/* GitHub Stars & Forks live badges */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      {project.stars !== undefined && project.stars > 0 && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/40 border border-white/10 text-amber-300">
                          <Star className="w-3 h-3 fill-amber-300" />
                          <span>{project.stars}</span>
                        </span>
                      )}
                      {project.forks !== undefined && project.forks > 0 && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/40 border border-white/10 text-cyan-300">
                          <GitFork className="w-3 h-3" />
                          <span>{project.forks}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Center graphic styling */}
                  <div className="relative z-10 my-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Bottom info row (Primary Language & Date) */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-navy-950/90 border border-white/10 text-cyan-300">
                      <Code2 className="w-3 h-3" />
                      <span>{project.primaryLanguage || 'Code'}</span>
                    </span>
                    {project.updatedAt && (
                      <span className="inline-flex items-center gap-1 text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span>{project.updatedAt}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300/85 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="mt-4 space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Complete Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: GitHub & Optional Live Demo */}
                  <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 text-xs font-bold tracking-wide transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>

                    {/* Only display Live Demo when a genuine deployed demo URL exists */}
                    {project.liveUrl && project.liveUrl.startsWith('http') && !project.liveUrl.includes('github.com') && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold tracking-wide shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
