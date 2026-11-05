export interface PersonalInfo {
  name: string;
  tagline: string;
  roles: string[];
  bio: string;
  aboutStory: string[];
  location: string;
  degree: string;
  university: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  careerGoal: string;
  passions: string[];
  statusBadge: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Backend API' | 'Mobile' | 'Upcoming';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  isPlaceholder?: boolean;
}

export interface ResearchInterest {
  title: string;
  subtitle: string;
  domain: string;
  status: string;
  overview: string;
  pillars: {
    title: string;
    description: string;
  }[];
  targetedOutcomes: string[];
  securityFocus: string[];
}

export interface TimelineEntry {
  id: string;
  category: 'education' | 'experience' | 'certification';
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  isPlaceholder?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
