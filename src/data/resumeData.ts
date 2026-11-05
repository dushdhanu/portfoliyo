/**
 * =========================================================================
 * RESUME SINGLE SOURCE OF TRUTH (ATS-FRIENDLY & RECRUITER-VERIFIED)
 * =========================================================================
 * Both the on-screen interactive modal and the client-side generated PDF
 * consume this exact data structure.
 * =========================================================================
 */

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    github: string;
    githubDisplay: string;
    linkedin: string;
    linkedinDisplay: string;
    email?: string; // Omitted if not provided
    phone?: string; // Omitted if not provided
    summary: string;
  };
  education: {
    id: string;
    degree: string;
    institution: string;
    location: string;
    period: string;
    bullets: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    id: string;
    title: string;
    category: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    bullets: string[];
  }[];
  research: {
    title: string;
    status: string;
    domain: string;
    description: string;
    outcomes: string[];
  };
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Dushmanthi Dhananjana",
    title: "BSc (Hons) Computer Science Undergraduate | Aspiring Software Engineer",
    location: "Sri Lanka",
    github: "https://github.com/dushdhanu",
    githubDisplay: "github.com/dushdhanu",
    linkedin: "https://www.linkedin.com/in/dushmanthi-dhananjana/",
    linkedinDisplay: "linkedin.com/in/dushmanthi-dhananjana",
    // Email and phone are omitted until real verified information is provided:
    email: undefined,
    phone: undefined,
    summary: "Dedicated Computer Science undergraduate with hands-on competencies in full-stack web engineering, backend RESTful microservices, and mobile applications. Proven ability to architect reliable software systems with Java, Spring Boot, React, and Python. Driven by continuous learning, engineering rigor, and collaborative problem-solving, currently seeking Software Engineering Internship and graduate opportunities."
  },
  education: [
    {
      id: "edu-1",
      degree: "BSc (Hons) in Computer Science",
      institution: "Undergraduate Student",
      location: "Sri Lanka",
      period: "2023 - Present (Undergraduate)",
      bullets: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Systems, Operating Systems",
        "Foundational competencies in Computer Networks, Distributed Architecture, and Software Engineering methodologies",
        "Collaborative team-based software engineering projects adhering to Agile/Scrum best practices"
      ]
    },
    {
      id: "edu-2",
      degree: "Secondary & Advanced Level Education",
      institution: "Secondary College / School",
      location: "Sri Lanka",
      period: "Completed",
      bullets: [
        "Focused academic foundation in Mathematics, Information Technology, and Physical Sciences",
        "Active participant in ICT societies and algorithmic problem-solving competitions"
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript (ES6+)", "C", "C++", "Dart", "SQL"]
    },
    {
      category: "Frontend Development",
      items: ["React", "Tailwind CSS", "TypeScript", "HTML5", "CSS3", "Framer Motion", "Vite"]
    },
    {
      category: "Backend & Architecture",
      items: ["Spring Boot", "RESTful APIs", "Spring Data JPA", "Hibernate", "JWT Auth", "Microservices"]
    },
    {
      category: "Databases & Storage",
      items: ["MySQL", "SQL", "Spring Data JPA", "SQLite", "Schema Normalization"]
    },
    {
      category: "Mobile Development",
      items: ["Flutter", "Dart", "Mobile UI Design", "SQLite Integration"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "GitHub Actions (CI/CD)", "VS Code", "IntelliJ IDEA", "Postman"]
    },
    {
      category: "Specialized Domains",
      items: ["Cybersecurity & SOC", "Zero Trust Architecture", "Lightweight Cryptography", "Google Gemini Vision AI"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Bookshop Delivery Management System",
      category: "Full Stack Web Platform",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API", "Tailwind CSS"],
      githubUrl: "https://github.com/dushdhanu/Bookshop-Delivery-System",
      bullets: [
        "Architected full-stack bookstore logistics platform managing customer orders from checkout to dispatch tracking",
        "Engineered normalized relational database schema ensuring data integrity across orders, stock inventory, and customers",
        "Developed responsive customer dashboard with real-time order status tracking and RESTful API endpoints"
      ]
    },
    {
      id: "proj-2",
      title: "Bank Fraud Detection & Alert System",
      category: "Backend Security Service",
      technologies: ["Python", "Java", "SQL", "REST API", "Security Rules Engine"],
      githubUrl: "https://github.com/dushdhanu/Bank-Fraud-Detection-Alert-System",
      bullets: [
        "Built financial anomaly monitoring engine analyzing transaction streams to compute risk scores and flag fraud",
        "Implemented proactive notification mechanism alerting security operators to suspicious transaction patterns",
        "Structured transactional consistency, audit trail logging, and error handling for high-reliability financial operations"
      ]
    },
    {
      id: "proj-3",
      title: "SOC-Live Security Monitoring System",
      category: "Cybersecurity & Systems",
      technologies: ["Python", "Linux", "Bash", "Log Analysis", "Network Telemetry"],
      githubUrl: "https://github.com/dushdhanu/soc-live",
      bullets: [
        "Developed Security Operations Center live event monitoring dashboard for real-time telemetry and log ingestion",
        "Implemented log aggregation and severity-based incident triage classification following security best practices",
        "Designed defensive architecture aligned with fundamental network defense and Zero Trust principles"
      ]
    },
    {
      id: "proj-4",
      title: "MedScan AI - Healthcare Assistant",
      category: "Mobile Healthcare Application",
      technologies: ["Flutter", "Dart", "Google Gemini Vision AI", "SQLite", "Text-to-Speech"],
      githubUrl: "https://github.com/dushdhanu/mediscan-ai-assistant",
      bullets: [
        "Engineered offline-first clinical assistant mobile app analyzing prescription blister packs using Gemini Vision AI",
        "Implemented bilingual real-time translation and native Sinhala/English Text-to-Speech audio narration",
        "Constructed local encrypted SQLite medical record vault with persistent dosage reminder scheduling"
      ]
    },
    {
      id: "proj-5",
      title: "Interactive Developer Portfolio",
      category: "Frontend Web Engineering",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "GitHub Actions"],
      githubUrl: "https://github.com/dushdhanu/portfoliyo",
      liveUrl: "https://dushdhanu.github.io/portfoliyo/",
      bullets: [
        "Engineered accessible personal developer portfolio with dynamic GitHub REST API public repository synchronization",
        "Integrated multi-page client-side selectable text PDF generation and automated GitHub Pages CI/CD workflow"
      ]
    }
  ],
  research: {
    title: "Lightweight Cryptography and Zero Trust Integration for Secure IoMT Edge Networks",
    status: "Academic Research Proposal & Focus Area",
    domain: "IoMT & Edge Computing Cybersecurity",
    description: "Investigating computational efficiency and data confidentiality trade-offs in Internet of Medical Things (IoMT) edge devices through lightweight cryptographic primitives and continuous Zero-Trust verification.",
    outcomes: [
      "Benchmark lightweight encryption algorithms against standard AES/RSA under memory and clock constraints",
      "Formulate dynamic continuous authentication protocols designed for battery-powered biomedical sensors"
    ]
  }
};

