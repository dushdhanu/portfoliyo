import { Certificate } from '../types/portfolio';

/**
 * =========================================================================
 * CERTIFICATIONS & PROFESSIONAL CREDENTIALS DATA
 * =========================================================================
 * 
 * HOW TO ADD A NEW CERTIFICATE:
 * 1. Place your certificate image (PNG/JPG) or PDF file inside the `public/certificates/` folder.
 *    Example: `public/certificates/java-cert.pdf` or `public/certificates/python-cert.png`
 * 2. Add a new entry to the `certifications` array below.
 * 3. Set `certificateUrl` or `image` to `/portfoliyo/certificates/your-file-name.ext`
 *    (or use an external URL from Credly, Coursera, LinkedIn, etc.)
 * 4. Choose an appropriate category:
 *    - 'Programming'
 *    - 'Software Engineering'
 *    - 'Cybersecurity'
 *    - 'Artificial Intelligence'
 *    - 'Cloud Computing'
 *    - 'Other'
 * =========================================================================
 */

export const certifications: Certificate[] = [
  // Example verified/standard structure ready for your credentials:
  {
    id: "cert-java-dev",
    title: "Java SE Programming & Object-Oriented Design",
    issuer: "Oracle / Certified Training Partner",
    issueDate: "2024",
    credentialId: "UC-JAVA-CS2024",
    category: "Programming",
    skills: ["Java", "OOP Principles", "Data Structures", "Exception Handling"],
    certificateUrl: "", // Paste your PDF or Credly link here
    verificationUrl: "https://www.linkedin.com/in/dushmanthi-dhananjana/",
    featured: true
  },
  {
    id: "cert-python-data",
    title: "Python for Computer Science & Software Systems",
    issuer: "Coursera / University Partner",
    issueDate: "2024",
    credentialId: "PY-CS-88912",
    category: "Programming",
    skills: ["Python", "Algorithms", "Automation", "Data Processing"],
    certificateUrl: "",
    verificationUrl: "https://www.linkedin.com/in/dushmanthi-dhananjana/",
    featured: true
  },
  {
    id: "cert-cybersecurity-foundations",
    title: "Foundations of Cybersecurity & Network Defense",
    issuer: "Cisco Networking Academy / Coursera",
    issueDate: "2024",
    credentialId: "CSCO-SEC-0912",
    category: "Cybersecurity",
    skills: ["Network Security", "Threat Modeling", "Zero Trust Concepts", "Cryptography"],
    certificateUrl: "",
    verificationUrl: "https://www.linkedin.com/in/dushmanthi-dhananjana/",
    featured: true
  },
  {
    id: "cert-fullstack-spring",
    title: "Full-Stack Development with Spring Boot & React",
    issuer: "Online Learning / Meta / Coursera",
    issueDate: "2024",
    credentialId: "FS-SPRING-2024",
    category: "Software Engineering",
    skills: ["Spring Boot", "React", "REST APIs", "Microservices", "MySQL"],
    certificateUrl: "",
    verificationUrl: "https://www.linkedin.com/in/dushmanthi-dhananjana/",
    featured: true
  }
];
