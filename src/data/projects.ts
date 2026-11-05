import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: "bookshop-delivery",
    title: "Bookshop Delivery Management System",
    category: "Web Development",
    description: "A comprehensive full-stack bookstore logistics and delivery tracking platform tailored for order lifecycle management, inventory sync, and real-time dispatch tracking.",
    highlights: [
      "Role-based order lifecycle management from checkout to doorstep dispatch",
      "Interactive delivery status tracker with responsive customer dashboard",
      "Clean relational database schema ensuring data integrity across orders and inventory"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/dushdhanu/Bookshop-Delivery-System",
    liveUrl: "https://github.com/dushdhanu/Bookshop-Delivery-System",
    primaryLanguage: "Java",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "bank-fraud-detection",
    title: "Bank Fraud Detection & Alert System",
    category: "Backend",
    description: "An intelligent financial transaction monitoring service that analyzes suspicious activity patterns, triggers real-time fraud prevention alerts, and safeguards customer accounts.",
    highlights: [
      "Real-time rule engine evaluating risk scores on incoming transaction streams",
      "Automated alerting mechanism notifying security officers and account holders",
      "Robust RESTful backend with transactional consistency and audit trail logging"
    ],
    technologies: ["Python", "Java", "Spring Boot", "SQL", "REST API", "Security Rules Engine"],
    githubUrl: "https://github.com/dushdhanu/Bank-Fraud-Detection-Alert-System",
    liveUrl: "https://github.com/dushdhanu/Bank-Fraud-Detection-Alert-System",
    primaryLanguage: "Python",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "soc-live",
    title: "SOC-Live Security Monitoring System",
    category: "Cybersecurity & Systems",
    description: "A centralized Security Operations Center (SOC) live monitoring platform for log ingestion, threat detection, event correlation, and cybersecurity posture visualization.",
    highlights: [
      "Real-time event streaming and anomalous telemetry detection dashboard",
      "Log aggregation and severity-based incident triage classification",
      "Defensive security architecture aligned with modern Zero Trust principles"
    ],
    technologies: ["Python", "Linux", "Bash", "Networking", "Log Analysis", "SIEM/SOC Tools"],
    githubUrl: "https://github.com/dushdhanu/soc-live",
    liveUrl: "https://github.com/dushdhanu/soc-live",
    primaryLanguage: "Python",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "medscan-ai",
    title: "MedScan AI - Healthcare Assistant",
    category: "Mobile Applications",
    description: "An offline-first clinical assistant mobile app that identifies prescription medicines, blister packs, and dosages from camera photos using Google Gemini Vision AI, complete with bilingual Sinhala and English reporting.",
    highlights: [
      "AI-powered visual analysis of medication blister packs, active ingredients, and safety warnings using Google Gemini 1.5 Flash",
      "Bilingual real-time translation & Text-to-Speech (TTS) narration with native Sinhala (සිංහල) Unicode and English support",
      "Offline SQLite medical record vault, persistent dosage reminder notifications, and an in-app emergency pharmacy directory"
    ],
    technologies: ["Flutter", "Dart", "Google Gemini Vision AI", "SQLite", "Text-to-Speech", "Material 3"],
    githubUrl: "https://github.com/dushdhanu/mediscan-ai-assistant",
    liveUrl: "https://github.com/dushdhanu/mediscan-ai-assistant",
    primaryLanguage: "Dart",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "portfolio-web",
    title: "Personal Interactive Developer Portfolio",
    category: "Web Development",
    description: "Modern, responsive personal developer portfolio engineered with React 18, TypeScript, Tailwind CSS, and Framer Motion with animated splash screen, dynamic GitHub synchronization, and certifications showcase.",
    highlights: [
      "Production deployment to GitHub Pages with automated CI/CD GitHub Actions workflow",
      "Dynamic GitHub public REST API repository metadata synchronization and caching",
      "Accessible dark/light theme switching, responsive glassmorphism UI, and interactive modals"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "GitHub Actions"],
    githubUrl: "https://github.com/dushdhanu/portfoliyo",
    liveUrl: "https://dushdhanu.github.io/portfoliyo/",
    primaryLanguage: "TypeScript",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "user-management-api",
    title: "User Management REST API",
    category: "Backend",
    description: "Enterprise-ready authentication and user lifecycle service built with Spring Boot, secure credential handling, and Spring Data JPA.",
    highlights: [
      "Secure authentication with token-based access and password hashing",
      "Full CRUD operations with structured error responses and input validation",
      "Automated schema mappings and database migrations using Spring Data JPA"
    ],
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "JWT", "REST API"],
    githubUrl: "https://github.com/dushdhanu/user-management-rest-api",
    liveUrl: "https://github.com/dushdhanu/user-management-rest-api",
    primaryLanguage: "Java",
    isFeatured: false,
    isPlaceholder: false
  }
];

