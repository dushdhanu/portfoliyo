import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: "bookshop-delivery",
    title: "Bookshop Delivery Management System",
    category: "Web Development",
    description: "Full-stack bookstore logistics and delivery tracking platform tailored for order lifecycle management, inventory sync, and real-time dispatch tracking.",
    highlights: [
      "Role-based order lifecycle management from checkout to doorstep dispatch",
      "Interactive delivery status tracker with responsive customer dashboard",
      "Clean relational database schema ensuring data integrity across orders and inventory"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/dushdhanu/Bookshop-Delivery-System",
    // No liveUrl until a verified public cloud deployment is created
    primaryLanguage: "Java",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "bank-fraud-detection",
    title: "Bank Fraud Detection & Alert System",
    category: "Backend",
    description: "Financial transaction monitoring service designed to evaluate suspicious activity patterns, calculate fraud risk scores, and trigger real-time defensive alerts.",
    highlights: [
      "Rule-based risk score assessment for incoming transaction streams",
      "Alerting framework notifying security operators of anomalous transactions",
      "Robust RESTful backend with transactional consistency and audit trail logging"
    ],
    technologies: ["Python", "Java", "SQL", "REST API"],
    githubUrl: "https://github.com/dushdhanu/Bank-Fraud-Detection-Alert-System",
    // No liveUrl until a verified public cloud deployment is created
    primaryLanguage: "Python",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "soc-live",
    title: "SOC-Live Security Monitoring System",
    category: "Cybersecurity & Systems",
    description: "Security Operations Center (SOC) live monitoring platform for log ingestion, threat detection, event correlation, and defensive telemetry visualization.",
    highlights: [
      "Real-time event streaming and anomalous telemetry detection dashboard",
      "Log aggregation and severity-based incident triage classification",
      "Defensive security architecture aligned with core network defense principles"
    ],
    technologies: ["Python", "Linux", "Bash", "Networking", "Log Analysis"],
    githubUrl: "https://github.com/dushdhanu/soc-live",
    // No liveUrl until a verified public cloud deployment is created
    primaryLanguage: "Python",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "medscan-ai",
    title: "MedScan AI - Healthcare Assistant",
    category: "Mobile Applications",
    description: "Offline-first clinical assistant mobile app that identifies prescription medicines, blister packs, and dosages from camera photos using Google Gemini Vision AI, complete with bilingual Sinhala and English reporting.",
    highlights: [
      "AI-powered visual analysis of medication blister packs and safety warnings using Gemini Vision",
      "Bilingual real-time translation & Text-to-Speech narration with native Sinhala and English support",
      "Offline SQLite medical record vault and persistent dosage reminders"
    ],
    technologies: ["Flutter", "Dart", "Google Gemini Vision AI", "SQLite", "Material 3"],
    githubUrl: "https://github.com/dushdhanu/mediscan-ai-assistant",
    // Mobile APK / app repository
    primaryLanguage: "Dart",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "portfolio-web",
    title: "Interactive Developer Portfolio",
    category: "Web Development",
    description: "Modern, responsive personal developer portfolio engineered with React 18, TypeScript, Tailwind CSS, and Framer Motion with animated splash screen, dynamic GitHub synchronization, and certifications showcase.",
    highlights: [
      "Production deployment to GitHub Pages with automated CI/CD GitHub Actions workflow",
      "Dynamic GitHub public REST API repository metadata synchronization and caching",
      "Accessible dark/light theme switching, responsive glassmorphism UI, and interactive modals"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "GitHub Actions"],
    githubUrl: "https://github.com/dushdhanu/portfoliyo",
    liveUrl: "https://dushdhanu.github.io/portfoliyo/", // REAL DEPLOYED URL
    primaryLanguage: "TypeScript",
    isFeatured: true,
    isPlaceholder: false
  }
];
