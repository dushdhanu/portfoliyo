import { jsPDF } from 'jspdf';
import { ResumeData } from '../data/resumeData';

/**
 * Generates an ATS-compliant, selectable-text, multi-page vector PDF
 * with clickable hyperlinks, standard A4 dimensions, and professional typography.
 */
export const generateResumePdf = async (data: ResumeData): Promise<void> => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 14;
  const marginTop = 14;
  const marginBottom = 14;
  const contentWidth = pageWidth - marginX * 2;
  const maxContentY = pageHeight - marginBottom;

  let y = marginTop;

  // Helper: Check space and add new page if needed
  const ensureSpace = (neededHeight: number) => {
    if (y + neededHeight > maxContentY) {
      doc.addPage();
      y = marginTop;
    }
  };

  // Helper: Draw Section Title with divider
  const drawSectionTitle = (title: string) => {
    ensureSpace(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(title.toUpperCase(), marginX, y);
    y += 1.5;

    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.4);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 4.5;
  };

  // ==========================================
  // HEADER
  // ==========================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42);
  doc.text(data.personalInfo.name.toUpperCase(), marginX, y);
  y += 6;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(2, 132, 199); // cyan-700
  doc.text(data.personalInfo.title.toUpperCase(), marginX, y);
  y += 5;

  // Contact Info Row with Clickable Hyperlinks
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85); // slate-700

  const contactItems: { text: string; url?: string }[] = [
    { text: data.personalInfo.location },
    ...(data.personalInfo.email ? [{ text: data.personalInfo.email, url: `mailto:${data.personalInfo.email}` }] : []),
    ...(data.personalInfo.phone ? [{ text: data.personalInfo.phone }] : []),
    { text: data.personalInfo.githubDisplay, url: data.personalInfo.github },
    { text: data.personalInfo.linkedinDisplay, url: data.personalInfo.linkedin }
  ];

  let contactX = marginX;
  contactItems.forEach((item, idx) => {
    const isLast = idx === contactItems.length - 1;
    const label = item.text + (isLast ? '' : '   |   ');
    const width = doc.getTextWidth(label);

    if (item.url) {
      doc.setTextColor(2, 132, 199);
      doc.textWithLink(item.text, contactX, y, { url: item.url });
      if (!isLast) {
        doc.setTextColor(148, 163, 184);
        const itemWidth = doc.getTextWidth(item.text);
        doc.text('   |   ', contactX + itemWidth, y);
      }
    } else {
      doc.setTextColor(51, 65, 85);
      doc.text(label, contactX, y);
    }
    contactX += width;
  });

  y += 4;
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.6);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 5;

  // Professional Summary
  if (data.personalInfo.summary) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const summaryLines = doc.splitTextToSize(data.personalInfo.summary, contentWidth);
    doc.text(summaryLines, marginX, y);
    y += summaryLines.length * 4 + 3;
  }

  // ==========================================
  // SECTION: EDUCATION
  // ==========================================
  drawSectionTitle('Education & Academic Credentials');

  data.education.forEach((edu) => {
    ensureSpace(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, marginX, y);

    // Period (Right Aligned)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(edu.period, marginX + contentWidth, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`${edu.institution} • ${edu.location}`, marginX, y);
    y += 3.5;

    edu.bullets.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 4);
      ensureSpace(bulletLines.length * 3.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      doc.text(bulletLines, marginX + 3, y);
      y += bulletLines.length * 3.5 + 0.5;
    });
    y += 2.5;
  });

  y += 2;

  // ==========================================
  // SECTION: TECHNICAL COMPETENCIES
  // ==========================================
  drawSectionTitle('Technical Competencies');

  data.skills.forEach((skillGroup) => {
    const label = `${skillGroup.category}: `;
    const items = skillGroup.items.join(', ');
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    const labelWidth = doc.getTextWidth(label);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const itemLines = doc.splitTextToSize(items, contentWidth - labelWidth);

    ensureSpace(itemLines.length * 4);
    
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(label, marginX, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(itemLines[0], marginX + labelWidth, y);

    if (itemLines.length > 1) {
      for (let i = 1; i < itemLines.length; i++) {
        y += 3.8;
        doc.text(itemLines[i], marginX + labelWidth, y);
      }
    }
    y += 4;
  });

  y += 2;

  // ==========================================
  // SECTION: FEATURED ENGINEERING PROJECTS
  // ==========================================
  drawSectionTitle('Featured Engineering Projects');

  data.projects.forEach((proj) => {
    ensureSpace(24);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, marginX, y);

    // Clickable GitHub Link
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(2, 132, 199);
    doc.textWithLink('[ View Repository ]', marginX + contentWidth, y, {
      url: proj.githubUrl,
      align: 'right'
    });
    y += 3.8;

    // Tech Stack Line
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`Technologies: ${proj.technologies.join(' • ')}`, marginX, y);
    y += 3.5;

    // Project Bullet points
    proj.bullets.forEach((b) => {
      const bLines = doc.splitTextToSize(`•  ${b}`, contentWidth - 4);
      ensureSpace(bLines.length * 3.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      doc.text(bLines, marginX + 3, y);
      y += bLines.length * 3.5 + 0.5;
    });
    y += 2.5;
  });

  y += 2;

  // ==========================================
  // SECTION: ACADEMIC RESEARCH & FOCUS
  // ==========================================
  drawSectionTitle('Academic Research & Security Specialization');

  ensureSpace(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(data.research.title, marginX, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(data.research.status, marginX + contentWidth, y, { align: 'right' });
  y += 3.8;

  const resDescLines = doc.splitTextToSize(data.research.description, contentWidth);
  ensureSpace(resDescLines.length * 3.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text(resDescLines, marginX, y);
  y += resDescLines.length * 3.5 + 1.5;

  data.research.outcomes.forEach((outcome) => {
    const oLines = doc.splitTextToSize(`•  ${outcome}`, contentWidth - 4);
    ensureSpace(oLines.length * 3.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(oLines, marginX + 3, y);
    y += oLines.length * 3.5 + 0.5;
  });

  // ==========================================
  // FOOTER (PAGE NUMBERING ON ALL PAGES)
  // ==========================================
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184); // slate-400
    
    // Bottom rule
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(marginX, pageHeight - 9, marginX + contentWidth, pageHeight - 9);

    doc.text(
      `Dushmanthi Dhananjana • Curriculum Vitae • ${data.personalInfo.githubDisplay}`,
      marginX,
      pageHeight - 5.5
    );
    doc.text(
      `Page ${i} of ${totalPages}`,
      marginX + contentWidth,
      pageHeight - 5.5,
      { align: 'right' }
    );
  }

  // Trigger real browser download
  doc.save('Dushmanthi_Dhananjana_Resume.pdf');
};
