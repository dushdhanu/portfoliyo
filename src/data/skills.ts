import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages for systems, algorithms, and application logic",
    icon: "Code2",
    skills: [
      { name: "Java", featured: true },
      { name: "Python", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript (ES6+)", featured: true },
      { name: "C", featured: false },
      { name: "C++", featured: false }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Creating responsive, accessible, and high-performance interfaces",
    icon: "Layout",
    skills: [
      { name: "React", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "TypeScript", featured: true },
      { name: "HTML5 & CSS3", featured: false },
      { name: "Framer Motion", featured: true },
      { name: "Vite", featured: true }
    ]
  },
  {
    id: "backend",
    name: "Backend & APIs",
    description: "Robust service layers, business logic, and API architecture",
    icon: "Server",
    skills: [
      { name: "Java", featured: true },
      { name: "Spring Boot", featured: true },
      { name: "RESTful APIs", featured: true },
      { name: "Microservices", featured: false },
      { name: "JWT Authentication", featured: true },
      { name: "Node.js Basics", featured: false }
    ]
  },
  {
    id: "database",
    name: "Databases & ORM",
    description: "Data modeling, relational design, and persistent storage",
    icon: "Database",
    skills: [
      { name: "MySQL", featured: true },
      { name: "SQL", featured: true },
      { name: "Spring Data JPA / Hibernate", featured: true },
      { name: "SQLite", featured: true },
      { name: "Database Normalization", featured: false }
    ]
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "Cross-platform mobile applications with smooth native performance",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", featured: true },
      { name: "Dart", featured: true },
      { name: "Mobile UI Design", featured: false },
      { name: "State Management", featured: false }
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    description: "Development environments, version control, and CI/CD pipelines",
    icon: "Wrench",
    skills: [
      { name: "Git", featured: true },
      { name: "GitHub", featured: true },
      { name: "GitHub Actions (CI/CD)", featured: true },
      { name: "VS Code", featured: true },
      { name: "IntelliJ IDEA", featured: true },
      { name: "Android Studio", featured: true },
      { name: "Postman", featured: true }
    ]
  },
  {
    id: "specialized",
    name: "Specialized Domains",
    description: "Security architecture and intelligent computing",
    icon: "ShieldCheck",
    skills: [
      { name: "Cybersecurity & SOC", featured: true },
      { name: "Zero Trust Architecture", featured: true },
      { name: "Lightweight Cryptography", featured: true },
      { name: "Artificial Intelligence & Vision", featured: true },
      { name: "Computer Networking", featured: true }
    ]
  }
];

