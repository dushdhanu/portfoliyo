import { PersonalInfo, SkillCategory, Project, ResearchInterest, TimelineEntry, NavLink } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Dushmanthi Dhananjana",
  tagline: "Computer Science Undergraduate | Aspiring Software Engineer | Full Stack Developer",
  roles: [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "Computer Science Undergraduate",
    "Creative Problem Solver"
  ],
  bio: "I'm a passionate Computer Science undergraduate who loves transforming ideas into meaningful digital experiences. I enjoy building modern web applications, exploring emerging technologies, and solving real-world problems through software development.",
  aboutStory: [
    "I am an enthusiastic Computer Science undergraduate with a deep curiosity for how software shapes our interconnected world. My journey started with core programming fundamentals and quickly grew into building full-stack web platforms, mobile applications, and exploring the frontiers of cybersecurity and AI.",
    "I thrive on writing clean, scalable code and turning complex requirements into seamless, user-centric interfaces. Whether architecting backend RESTful services with Spring Boot or designing responsive web experiences with React, I am committed to engineering excellence, continuous learning, and collaborative problem-solving.",
    "Driven by the aspiration to build resilient, human-centered software, I am actively seeking internship and junior software engineering opportunities where I can contribute, learn, and grow alongside visionary engineering teams."
  ],
  location: "Sri Lanka",
  degree: "BSc (Hons) in Computer Science",
  university: "University Name (e.g. University of Colombo / Moratuwa / SLIIT)", // [EDITABLE PLACEHOLDER]
  email: "dushmanthi.contact@example.com", // [EDITABLE PLACEHOLDER - Replace with your actual email]
  phone: "+94 7X XXX XXXX", // [EDITABLE PLACEHOLDER - Replace with your phone number]
  github: "https://github.com/dushdhanu", // Connected to your GitHub profile
  linkedin: "https://linkedin.com/in/dushmanthi-dhananjana", // [EDITABLE PLACEHOLDER - Replace with your LinkedIn profile]
  resumeUrl: "#resume-placeholder", // [EDITABLE PLACEHOLDER - Replace with your Google Drive / PDF link]
  careerGoal: "Become a professional Software Engineer and build innovative, high-impact software solutions that solve real-world problems.",
  passions: [
    "Software Development",
    "Full-Stack Web Engineering",
    "Cross-Platform Mobile Apps",
    "Artificial Intelligence",
    "Cybersecurity & Zero Trust Architecture"
  ],
  statusBadge: "Available for Software Engineering Internships & Opportunities"
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Education & Exp", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages for systems, algorithms, and application logic",
    icon: "Code2",
    skills: [
      { name: "Java", featured: true },
      { name: "Python", featured: true },
      { name: "C", featured: false },
      { name: "C++", featured: false },
      { name: "JavaScript", featured: true }
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
      { name: "JavaScript (ES6+)", featured: true },
      { name: "HTML5", featured: false },
      { name: "CSS3", featured: false }
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
      { name: "REST APIs", featured: true },
      { name: "Microservices Architecture", featured: false }
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
      { name: "Spring Data JPA", featured: true },
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
      { name: "Mobile UI Design", featured: false }
    ]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Development environments, version control, and toolchains",
    icon: "Wrench",
    skills: [
      { name: "Git", featured: true },
      { name: "GitHub", featured: true },
      { name: "VS Code", featured: true },
      { name: "IntelliJ IDEA", featured: true },
      { name: "Android Studio", featured: true }
    ]
  },
  {
    id: "other",
    name: "Specialized Domains",
    description: "Emerging domains and academic competencies",
    icon: "ShieldCheck",
    skills: [
      { name: "Cybersecurity", featured: true },
      { name: "Artificial Intelligence", featured: true },
      { name: "Computer Networking", featured: true },
      { name: "Database Management", featured: false }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "bookshop-delivery",
    title: "Bookshop Delivery Management System",
    category: "Full Stack",
    description: "A comprehensive management and delivery tracking solution tailored for bookstore logistics, order processing, and dispatch management.",
    highlights: [
      "Role-based order lifecycle management from checkout to doorstep dispatch",
      "Interactive delivery status tracker with responsive customer dashboard",
      "Clean relational database schema ensuring data integrity across orders and inventory"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/dushdhanu/bookshop-delivery-management", // [EDITABLE PLACEHOLDER]
    liveUrl: "#project-preview-bookshop",
    isPlaceholder: true
  },
  {
    id: "user-management-api",
    title: "User Management REST API",
    category: "Backend API",
    description: "Enterprise-ready authentication and user lifecycle service built with Spring Boot, secure credential handling, and Spring Data JPA.",
    highlights: [
      "Secure authentication with token-based access and password hashing",
      "Full CRUD operations with structured error responses and input validation",
      "Automated schema mappings and database migrations using Spring Data JPA"
    ],
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "JWT", "REST API"],
    githubUrl: "https://github.com/dushdhanu/user-management-rest-api", // [EDITABLE PLACEHOLDER]
    liveUrl: "#project-preview-api",
    isPlaceholder: true
  },
  {
    id: "medscan-ai",
    title: "MedScan AI - Intelligent Medicine Identifier & Healthcare Assistant",
    category: "AI & Mobile Healthcare",
    description: "An offline-first clinical assistant mobile app that identifies prescription medicines, blister packs, and dosages from camera photos using Google Gemini Vision AI, complete with bilingual Sinhala and English reporting.",
    highlights: [
      "AI-powered visual analysis of medication blister packs, active ingredients, and safety warnings using Google Gemini 1.5 Flash",
      "Bilingual real-time translation & Text-to-Speech (TTS) narration with native Sinhala (සිංහල) Unicode and English support",
      "Offline SQLite medical record vault, persistent dosage reminder notifications, and an in-app emergency pharmacy directory",
      "Interactive in-app clinical PDF report generator with high-resolution direct export and cross-platform sharing"
    ],
    technologies: ["Flutter", "Dart", "Google Gemini Vision AI", "SQLite", "Text-to-Speech", "PDF Generation", "Material 3"],
    githubUrl: "https://github.com/dushdhanu/mediscan-ai-assistant",
    liveUrl: "#project-preview-medscan",
    isPlaceholder: false
  },
  {
    id: "future-projects",
    title: "AI & Cybersecurity Laboratory (In Development)",
    category: "Upcoming",
    description: "An experimental testbed exploring lightweight cryptographic primitives and intelligent network anomaly detection for edge devices.",
    highlights: [
      "Benchmarking encryption overhead on simulated microcontrollers",
      "Integrating Zero-Trust access control policies",
      "Continuous experimentation with next-generation protocols"
    ],
    technologies: ["Python", "Cryptography", "Network Security", "AI Algorithms"],
    githubUrl: "https://github.com/dushdhanu",
    liveUrl: "#upcoming",
    isPlaceholder: true
  }
];

export const researchProject: ResearchInterest = {
  title: "Lightweight Cryptography and Zero Trust Integration for Secure IoMT Edge Networks",
  subtitle: "Academic Research Focus & Architectural Exploration",
  domain: "Internet of Medical Things (IoMT) & Edge Computing Security",
  status: "Academic Research Proposal & Focus Area",
  overview: "The Internet of Medical Things (IoMT) is revolutionizing digital healthcare by connecting wearable biosensors and patient monitoring devices. However, resource constraints (battery, memory, compute power) make traditional cryptographic suites computationally expensive. This research explores lightweight cryptographic primitives combined with Zero-Trust Network Architecture (ZTNA) to enforce continuous authentication and data confidentiality without draining edge device resources.",
  pillars: [
    {
      title: "Resource-Constrained Cryptography",
      description: "Investigating ultra-lightweight ciphers that minimize clock cycles and memory footprint while safeguarding sensitive patient telemetry data."
    },
    {
      title: "Zero Trust Architecture at the Edge",
      description: "Eliminating implicit network trust through strict continuous verification, dynamic identity validation, and least-privilege microsegmentation."
    },
    {
      title: "Resilient Medical Sensor Networks",
      description: "Preventing unauthorized tampering, man-in-the-middle attacks, and eavesdropping in latency-critical healthcare environments."
    }
  ],
  targetedOutcomes: [
    "Evaluating lightweight encryption algorithms against standard AES/RSA benchmarks",
    "Formulating a Zero Trust continuous verification protocol tailored for battery-powered sensors",
    "Analyzing packet transmission overhead and energy consumption in simulated IoMT edge nodes"
  ],
  securityFocus: [
    "Lightweight Block & Stream Ciphers",
    "Continuous Authentication",
    "Edge Microsegmentation",
    "Zero-Trust Network Access (ZTNA)",
    "IoMT Telemetry Protection"
  ]
};

export const timelineData: TimelineEntry[] = [
  {
    id: "edu-1",
    category: "education",
    title: "BSc (Hons) in Computer Science",
    institution: "University / Academic Institution Name", // [EDITABLE PLACEHOLDER]
    period: "2023 - Present (Undergraduate)", // [EDITABLE PLACEHOLDER]
    location: "Sri Lanka",
    description: "Pursuing an honors degree in Computer Science, focusing on software engineering principles, algorithms, distributed systems, and cybersecurity.",
    bullets: [
      "Rigorous coursework in Data Structures, Object-Oriented Programming (Java/C++), and Database Design",
      "Core fundamentals in Computer Networks, Operating Systems, and Web Technologies",
      "Collaborative software engineering team projects and software lifecycle methodology"
    ],
    isPlaceholder: true
  },
  {
    id: "edu-placeholder-2",
    category: "education",
    title: "Advanced Level / Secondary Education",
    institution: "College / School Name", // [EDITABLE PLACEHOLDER]
    period: "Previous Academic Milestones", // [EDITABLE PLACEHOLDER]
    location: "Sri Lanka",
    description: "Completed secondary education with focused studies in Mathematics, Information Technology, and Physical Sciences.",
    bullets: [
      "Developed strong analytical problem-solving foundation",
      "Active participant in ICT societies and coding clubs"
    ],
    isPlaceholder: true
  },
  {
    id: "exp-placeholder-1",
    category: "experience",
    title: "Software Engineering Intern / Trainee (Open for Opportunities)",
    institution: "Prospective Software Engineering Organization", // [EDITABLE PLACEHOLDER]
    period: "Upcoming / Available Immediately",
    location: "Sri Lanka / Remote",
    description: "Actively seeking a hands-on Software Engineering Internship to contribute full-stack development skills, learn industry best practices, and build enterprise software.",
    bullets: [
      "Ready to contribute with React, Spring Boot, Java, Python, and SQL",
      "Eager to collaborate within Agile/Scrum cross-functional engineering teams",
      "Dedicated to writing clean, maintainable, tested code"
    ],
    isPlaceholder: true
  },
  {
    id: "cert-placeholder-1",
    category: "certification",
    title: "Continuous Learning & Certifications",
    institution: "Online Platforms (Coursera / HackerRank / Oracle / Cisco)", // [EDITABLE PLACEHOLDER]
    period: "Ongoing",
    location: "Online",
    description: "Self-driven technical development across full-stack engineering, algorithms, and cybersecurity fundamentals.",
    bullets: [
      "Editable slot: Add your completed certifications here (e.g., Java Foundations, Python, Spring Boot)",
      "Continuous hands-on problem solving and algorithmic challenges on platforms like LeetCode and HackerRank"
    ],
    isPlaceholder: true
  }
];
