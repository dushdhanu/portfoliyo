import { Certificate } from '../types/portfolio';

/**
 * =========================================================================
 * CERTIFICATIONS & PROFESSIONAL CREDENTIALS DATA
 * =========================================================================
 * 
 * Verified Policy:
 * To maintain 100% credibility with engineering recruiters, only real,
 * verified certificates with valid files or verification URLs are displayed.
 * 
 * HOW TO ADD A NEW CERTIFICATE:
 * 1. Place your certificate image (PNG/JPG) or PDF file inside the `public/certificates/` folder.
 *    Example: `public/certificates/java-cert.pdf` or `public/certificates/python-cert.png`
 * 2. Add an entry to the `certifications` array below:
 * 
 *    {
 *      id: "cert-java",
 *      title: "Your Certificate Name",
 *      issuer: "Issuing Organization (e.g. Oracle, Coursera, Cisco, Meta)",
 *      issueDate: "Month Year (e.g. Nov 2024)",
 *      credentialId: "Your Credential ID or License Number",
 *      category: "Programming", // 'Programming' | 'Software Engineering' | 'Cybersecurity' | 'Artificial Intelligence' | 'Cloud Computing' | 'Other'
 *      skills: ["Skill 1", "Skill 2"],
 *      certificateUrl: "/portfoliyo/certificates/your-file.pdf",
 *      verificationUrl: "https://www.linkedin.com/in/dushmanthi-dhananjana/",
 *      featured: true
 *    }
 * =========================================================================
 */

export const certifications: Certificate[] = [
  // Certificates are currently in verified empty state pending uploaded proof.
  // Add your real certificates here as documented above.
];
