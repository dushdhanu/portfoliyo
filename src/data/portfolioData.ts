import { ResearchInterest, TimelineEntry } from '../types/portfolio';

// Re-export modular structured data
export { personalInfo, navLinks } from './profile';
export { projects } from './projects';
export { skillCategories } from './skills';
export { certifications } from './certifications';

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
    institution: "Academic Institution / University",
    period: "2023 - Present (Undergraduate)",
    location: "Sri Lanka",
    description: "Pursuing an honors degree in Computer Science, focusing on software engineering principles, algorithms, distributed systems, and cybersecurity.",
    bullets: [
      "Rigorous coursework in Data Structures, Object-Oriented Programming (Java/C++), and Database Design",
      "Core fundamentals in Computer Networks, Operating Systems, and Web Technologies",
      "Collaborative software engineering team projects and software lifecycle methodology"
    ],
    isPlaceholder: false
  },
  {
    id: "edu-2",
    category: "education",
    title: "Secondary & Advanced Level Education",
    institution: "Secondary College / School",
    period: "Completed",
    location: "Sri Lanka",
    description: "Completed secondary education with focused studies in Mathematics, Information Technology, and Physical Sciences.",
    bullets: [
      "Developed strong analytical problem-solving foundation",
      "Active participant in ICT societies and technology competitions"
    ],
    isPlaceholder: false
  },
  {
    id: "exp-1",
    category: "experience",
    title: "Software Engineering Intern / Trainee (Open for Opportunities)",
    institution: "Prospective Software Engineering Organization",
    period: "Immediate / Available",
    location: "Sri Lanka / Remote",
    description: "Actively seeking a hands-on Software Engineering Internship to contribute full-stack development skills, learn industry best practices, and build enterprise software.",
    bullets: [
      "Ready to contribute with React, TypeScript, Spring Boot, Java, Python, and SQL",
      "Eager to collaborate within Agile/Scrum cross-functional engineering teams",
      "Dedicated to writing clean, maintainable, tested code"
    ],
    isPlaceholder: true
  }
];
