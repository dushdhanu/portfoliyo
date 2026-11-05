import { PersonalInfo, NavLink } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Dushmanthi Dhananjana",
  tagline: "Computer Science Undergraduate | Aspiring Software Engineer | Full Stack Developer",
  roles: [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "Computer Science Undergraduate",
    "Backend & Distributed Systems Enthusiast",
    "Creative Problem Solver"
  ],
  bio: "I'm a passionate Computer Science undergraduate who loves transforming ideas into robust, user-centric software. I specialize in building modern full-stack web applications, architecting backend RESTful microservices, and exploring intelligent systems and cybersecurity.",
  aboutStory: [
    "I am an enthusiastic Computer Science undergraduate with a deep curiosity for how software shapes our interconnected world. My journey started with core programming fundamentals and quickly grew into engineering full-stack web platforms, mobile applications, and exploring the frontiers of cybersecurity and AI.",
    "I thrive on writing clean, scalable code and turning complex business requirements into seamless, high-performance interfaces. Whether architecting backend RESTful services with Spring Boot and MySQL or designing responsive web experiences with React and Tailwind CSS, I am committed to engineering excellence, continuous learning, and collaborative problem-solving.",
    "Driven by the aspiration to build resilient, human-centered software, I am actively seeking internship and junior software engineering opportunities where I can contribute, learn, and grow alongside visionary engineering teams."
  ],
  location: "Sri Lanka",
  degree: "BSc (Hons) in Computer Science",
  university: "Undergraduate Computer Science Student (Sri Lanka)",
  email: undefined, // Add your verified email address here
  phone: undefined, // Add your verified phone number here
  github: "https://github.com/dushdhanu",
  linkedin: "https://www.linkedin.com/in/dushmanthi-dhananjana/",
  resumeUrl: "#resume-placeholder", // [EDITABLE: Replace with Google Drive or direct PDF link if preferred]
  careerGoal: "Become a professional Software Engineer and build innovative, high-impact software solutions that solve real-world problems.",
  passions: [
    "Software Engineering",
    "Full-Stack Web Development",
    "Backend Microservices & REST APIs",
    "Mobile Applications (Flutter)",
    "Artificial Intelligence",
    "Cybersecurity & Zero Trust Architecture"
  ],
  statusBadge: "Available for Software Engineering Internships & Opportunities",
  avatar: import.meta.env.BASE_URL + "my.jpeg"
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Research", href: "#research" },
  { label: "Education & Exp", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

