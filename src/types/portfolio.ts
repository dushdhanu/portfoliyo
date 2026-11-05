export interface PersonalInfo {
  name: string;
  tagline: string;
  roles: string[];
  bio: string;
  aboutStory: string[];
  location: string;
  degree: string;
  university: string;
  email?: string;
  phone?: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  careerGoal: string;
  passions: string[];
  statusBadge: string;
  avatar?: string;
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
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  updatedAt?: string;
  primaryLanguage?: string;
  isFeatured?: boolean;
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

export type CertificateCategory =
  | 'All'
  | 'Programming'
  | 'Artificial Intelligence'
  | 'Cybersecurity'
  | 'Cloud Computing'
  | 'Software Engineering'
  | 'Other';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  image?: string;
  certificateUrl?: string;
  verificationUrl?: string;
  category: 'Programming' | 'Artificial Intelligence' | 'Cybersecurity' | 'Cloud Computing' | 'Software Engineering' | 'Other';
  skills?: string[];
  featured?: boolean;
}
