import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo } from '../../data/profile';
import { projects } from '../../data/projects';
import { 
  Github, 
  Code2, 
  ExternalLink, 
  BookOpen, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';

interface GitHubUserStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
}

export const GithubActivity: React.FC = () => {
  const [stats, setStats] = useState<GitHubUserStats>({
    public_repos: 12, // Curated baseline
    followers: 5,
    following: 10,
    avatar_url: "https://avatars.githubusercontent.com/u/148727457?v=4",
    bio: "Computer Science Undergraduate | Aspiring Software Engineer"
  });


  // Fetch real GitHub user data client-side
  useEffect(() => {
    let isMounted = true;
    fetch('https://api.github.com/users/dushdhanu')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && isMounted) {
          setStats({
            public_repos: data.public_repos ?? 12,
            followers: data.followers ?? 5,
            following: data.following ?? 10,
            avatar_url: data.avatar_url || "https://avatars.githubusercontent.com/u/148727457?v=4",
            bio: data.bio || personalInfo.tagline
          });
        }
      })
      .catch((err) => {
        console.debug('GitHub public user stats note:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const languageDistribution = [
    { name: "Java", percent: 38, color: "bg-amber-500", text: "text-amber-400" },
    { name: "Python", percent: 28, color: "bg-blue-500", text: "text-blue-400" },
    { name: "TypeScript / React", percent: 22, color: "bg-cyan-500", text: "text-cyan-400" },
    { name: "Dart / Flutter", percent: 12, color: "bg-sky-400", text: "text-sky-400" }
  ];

  return (
    <section id="github" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Open Source & Version Control"
          title="GitHub Profile &"
          highlightedText="Engineering Activity"
          subtitle="Explore my open-source code repositories, version control discipline, and programming language activity."
        />

        {/* GitHub Header Profile Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-12 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 relative overflow-hidden"
        >
          {/* Subtle glowing orb */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* User Identity */}
            <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
              <div className="relative">
                <img
                  src={personalInfo.avatar || stats.avatar_url}
                  alt={personalInfo.name}
                  className="w-20 h-20 rounded-2xl border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20 object-cover object-top"
                  onError={(e) => {
                    // Fallback to network avatar or stylized initials
                    const target = e.currentTarget;
                    if (stats.avatar_url && target.src !== stats.avatar_url) {
                      target.src = stats.avatar_url;
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
                <div className="absolute -bottom-1 -right-1 p-1 rounded-lg bg-navy-950 border border-cyan-400/50 text-cyan-400">
                  <Github className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold">
                    @dushdhanu
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md">
                  {stats.bio || personalInfo.tagline}
                </p>
              </div>
            </div>

            {/* Quick Metrics & Direct GitHub Link */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center min-w-[90px]">
                <span className="text-lg font-bold text-slate-900 dark:text-white block">
                  {stats.public_repos}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Repositories
                </span>
              </div>

              <div className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center min-w-[90px]">
                <span className="text-lg font-bold text-cyan-500 dark:text-cyan-400 block">
                  4+
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Tech Stacks
                </span>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Bento: Languages Breakdown & Highlighted Repositories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Language Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-500" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Primary Languages
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-400">Repositories</span>
              </div>

              {/* Progress bar stack */}
              <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex mb-6">
                {languageDistribution.map((lang, idx) => (
                  <div
                    key={idx}
                    className={`${lang.color} h-full transition-all duration-500`}
                    style={{ width: `${lang.percent}%` }}
                    title={`${lang.name}: ${lang.percent}%`}
                  />
                ))}
              </div>

              {/* Legend List */}
              <div className="space-y-3">
                {languageDistribution.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-3 h-3 rounded-full ${lang.color}`} />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {lang.name}
                      </span>
                    </div>
                    <span className="font-mono text-slate-500 dark:text-slate-400 font-medium">
                      {lang.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Standard Note */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Structured repository design, Git branching discipline, and CI/CD automation.</span>
            </div>
          </motion.div>

          {/* Right Column: Verified Featured Repositories Quick List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-500" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Featured Repositories
                </h4>
              </div>
              <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold">
                Verified Public
              </span>
            </div>

            <div className="space-y-3">
              {projects.slice(0, 4).map((p) => (
                <a
                  key={p.id}
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <Terminal className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 truncate">
                        {p.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-navy-950 text-[10px] font-mono text-cyan-600 dark:text-cyan-300 font-semibold">
                        {p.primaryLanguage || 'Code'}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {p.description}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
