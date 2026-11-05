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
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  GitFork,
  Star
} from 'lucide-react';

interface GitHubUserApi {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
  html_url: string;
}

interface LanguageStat {
  name: string;
  count: number;
  percent: number;
  color: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Java: 'bg-amber-500',
  Python: 'bg-blue-500',
  TypeScript: 'bg-cyan-500',
  JavaScript: 'bg-yellow-400',
  Dart: 'bg-sky-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-indigo-500',
  'C++': 'bg-pink-500',
  C: 'bg-slate-400'
};

export const GithubActivity: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUserApi | null>(null);
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiFailed, setApiFailed] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubData = async () => {
      setIsLoading(true);
      setApiFailed(false);

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/dushdhanu', {
            headers: { Accept: 'application/vnd.github.v3+json' }
          }),
          fetch('https://api.github.com/users/dushdhanu/repos?sort=updated&per_page=100', {
            headers: { Accept: 'application/vnd.github.v3+json' }
          })
        ]);

        if (!userRes.ok || !reposRes.ok) {
          if (isMounted) setApiFailed(true);
          return;
        }

        const user: GitHubUserApi = await userRes.json();
        const repos = await reposRes.json();

        if (!Array.isArray(repos)) {
          if (isMounted) setApiFailed(true);
          return;
        }

        // Calculate language counts dynamically from real non-fork repositories
        const langCounts: Record<string, number> = {};
        let totalLangRepos = 0;

        repos.forEach((repo: { language?: string | null; fork?: boolean }) => {
          if (!repo.fork && repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            totalLangRepos += 1;
          }
        });

        const calculatedLangs: LanguageStat[] = Object.entries(langCounts)
          .map(([name, count]) => ({
            name,
            count,
            percent: totalLangRepos > 0 ? Math.round((count / totalLangRepos) * 100) : 0,
            color: LANGUAGE_COLORS[name] || 'bg-cyan-500'
          }))
          .sort((a, b) => b.count - a.count);

        if (isMounted) {
          setUserData(user);
          setLanguages(calculatedLangs);
          setApiFailed(false);
        }
      } catch (err) {
        if (isMounted) setApiFailed(true);
        console.debug('GitHub API notice:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Open Source & Version Control"
          title="GitHub Profile &"
          highlightedText="Engineering Activity"
          subtitle="Real-time public repository metrics, dynamic language calculations, and verified open-source software."
        />

        {/* API Failure / Rate Limit Graceful Banner */}
        {apiFailed && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>
                GitHub REST API public rate limit reached for your current network. Live metrics are paused to avoid fabricated data.
              </span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-semibold transition-colors"
            >
              Inspect on GitHub &rarr;
            </a>
          </motion.div>
        )}

        {/* GitHub Header Profile Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-12 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 relative overflow-hidden"
        >
          {/* Subtle glowing background orb */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* User Identity */}
            <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
              <div className="relative">
                <img
                  src={personalInfo.avatar || userData?.avatar_url || `${import.meta.env.BASE_URL}my.jpeg`}
                  alt={personalInfo.name}
                  className="w-20 h-20 rounded-2xl border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20 object-cover object-top"
                  onError={(e) => {
                    if (userData?.avatar_url) {
                      (e.currentTarget as HTMLImageElement).src = userData.avatar_url;
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
                  {userData?.bio || personalInfo.tagline}
                </p>
              </div>
            </div>

            {/* Live Metrics */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center min-w-[100px]">
                <span className="text-lg font-bold text-slate-900 dark:text-white block">
                  {userData ? userData.public_repos : (isLoading ? '...' : 'Available')}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Public Repos
                </span>
              </div>

              <div className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center min-w-[100px]">
                <span className="text-lg font-bold text-cyan-500 dark:text-cyan-400 block">
                  {userData ? userData.followers : (isLoading ? '...' : 'Profile')}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Followers
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
          {/* Left Column: Dynamic Language Distribution */}
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
                    Repository Languages
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {isLoading ? 'Calculating...' : 'Calculated Live'}
                </span>
              </div>

              {/* Dynamic progress bar stack */}
              {languages.length > 0 ? (
                <>
                  <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex mb-6">
                    {languages.map((lang, idx) => (
                      <div
                        key={idx}
                        className={`${lang.color} h-full transition-all duration-700`}
                        style={{ width: `${lang.percent}%` }}
                        title={`${lang.name}: ${lang.percent}% (${lang.count} repos)`}
                      />
                    ))}
                  </div>

                  <div className="space-y-3">
                    {languages.map((lang, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-3 h-3 rounded-full ${lang.color}`} />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {lang.name}
                          </span>
                        </div>
                        <span className="font-mono text-slate-500 dark:text-slate-400 font-medium">
                          {lang.percent}% <span className="text-[11px] text-slate-400">({lang.count} repos)</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-8 text-center text-xs text-slate-500 dark:text-slate-400">
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                      <span>Fetching verified language metrics...</span>
                    </div>
                  ) : (
                    <span>Direct language distribution accessible on GitHub profile.</span>
                  )}
                </div>
              )}
            </div>

            {/* Quality Standard Note */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Real-time calculation from public non-forked GitHub repositories.</span>
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
                  Verified Repositories
                </h4>
              </div>
              <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold">
                GitHub Public
              </span>
            </div>

            <div className="space-y-3">
              {projects.map((p) => (
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
                      {p.stars !== undefined && p.stars > 0 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{p.stars}</span>
                        </span>
                      )}
                      {p.forks !== undefined && p.forks > 0 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                          <GitFork className="w-3 h-3" />
                          <span>{p.forks}</span>
                        </span>
                      )}
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
