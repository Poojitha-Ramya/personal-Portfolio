import React, { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download, FileText, Layout } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'formatted'
  const { personal, education, experience, projects, certifications } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const text = `
CHIPURUPALLI POOJITHA RAMYA
Nathavaram, Andhra Pradesh | 7013103439 | chpujitaramya@gmail.com
LinkedIn: ${personal.linkedin} | GitHub: ${personal.github} | LeetCode: ${personal.leetcode}

PROFESSIONAL SUMMARY
${personal.summary}

EDUCATION
- B.Tech in Information Technology (ML Specialization) | 2023–Present | GMR Institute of Technology, Rajam, Andhra Pradesh | CGPA: 9.50 / 10.0
- Intermediate (MPC) | 2021–2023 | Sri Chaitanya Junior College, Visakhapatnam | 92.2%
- SSC | 2021 | Sun Shine English Medium School, Nathavaram | 99.3%

TECHNICAL SKILLS
- Languages: Python, Java, SQL(Basic)
- Machine Learning & DL: Supervised Learning, Unsupervised Learning, CNN, RNN, n8n workflow automations
- Tools & Databases: MySQL, GitHub, VS Code
- Core CS: Data Structures & Algorithms(Basic), OOP, DBMS

WORK EXPERIENCE
React JS Developer Intern | BRVS Tech LLC (Remote) | July 2025 | 1 Month
- Developed a React.js-based Campus Management System for student, course, and faculty management.
- Implemented component-based architecture with local storage for efficient data persistence.
- Earned the React JS Web Application Development Internship Certification.

PROJECTS
1. JobFlow Engine — AI-Powered Career Intelligence Platform | Live: ai-job-matcher-eight.vercel.app
- Developed an AI-powered career platform using Google Gemini AI and n8n for resume analysis, ATS scoring, and skill gap detection.
- Built an AI-driven job matching engine to rank job listings based on candidate skills and compatibility.
- Deployed the application on Vercel and Railway with Supabase for scalable hosting and real-time data management.

2. Distracted Driver Detection System | Live: driver-distraction-frontend.vercel.app
- Developed a real-time distracted driver detection system using VGG16, CNN, and Transfer Learning. Achieved 98% classification accuracy through feature extraction and model optimization.
- Applied TensorFlow image augmentation and hyperparameter tuning to improve model generalization.

CERTIFICATIONS
- Principles of Generative AI — Infosys Springboard (May 2026)
- Artificial Intelligence Primer — Infosys Springboard (April 2026)
- React JS Web Application Development — BRVS Tech LLC (2025)
- Deep Learning Essentials — L&T EduTech (2024)
- SQL Intermediate — HackerRank (2024)
- Java Skill UP — GeeksforGeeks (2024)

ACHIEVEMENTS
- 150+ LeetCode basic problems solved across Data Structures & Algorithms
- 30+ day public DSA learning streak on LinkedIn
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="resume-toolbar no-print">
          <div className="toolbar-left">
            <h3 className="toolbar-title">Chipurupalli Poojitha Ramya — Official Resume</h3>
            
            {/* View Switcher: PDF / Text */}
            <div className="resume-view-switcher">
              <button
                className={`view-switch-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                onClick={() => setViewMode('pdf')}
              >
                <FileText size={15} />
                <span>Uploaded PDF</span>
              </button>
              <button
                className={`view-switch-btn ${viewMode === 'formatted' ? 'active' : ''}`}
                onClick={() => setViewMode('formatted')}
              >
                <Layout size={15} />
                <span>Document View</span>
              </button>
            </div>
          </div>

          <div className="toolbar-actions">
            <a
              href="/Poojitha_Ramya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="toolbar-btn"
              title="Open uploaded PDF in new browser tab"
            >
              <ExternalLink size={15} />
              <span>Open in New Tab</span>
            </a>

            <a
              href="/Poojitha_Ramya_Resume.pdf"
              download="Poojitha_Ramya_Resume.pdf"
              className="toolbar-btn toolbar-btn-highlight"
              title="Download exact uploaded PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="toolbar-btn"
              title="Print resume"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              className="toolbar-btn"
              title="Copy text"
            >
              {copied ? <Check size={15} className="text-orange" /> : <Copy size={15} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button className="modal-close-btn static" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* View Mode 1: Exact Uploaded PDF Preview */}
        {viewMode === 'pdf' ? (
          <div className="uploaded-pdf-viewer-wrap">
            <iframe
              src="/Poojitha_Ramya_Resume.pdf#toolbar=1"
              title="Poojitha Ramya Resume PDF"
              className="uploaded-pdf-frame"
            />
          </div>
        ) : (
          /* View Mode 2: Clean Printable Document Format matching latest uploaded PDF */
          <div className="printable-resume-paper">
            {/* Header */}
            <header className="resume-sheet-header">
              <h1 className="resume-sheet-name">CHIPURUPALLI POOJITHA RAMYA</h1>
              <div className="resume-sheet-contacts">
                <span>{personal.location.replace(', India', '')}</span>
                <span className="dot">•</span>
                <span>{personal.phone}</span>
                <span className="dot">•</span>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
                <span className="dot">•</span>
                <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <span className="dot">•</span>
                <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
                <span className="dot">•</span>
                <a href={personal.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
              </div>
            </header>

            {/* PROFESSIONAL SUMMARY */}
            <section className="resume-sheet-section">
              <h2 className="resume-section-heading">PROFESSIONAL SUMMARY</h2>
              <div className="resume-heading-line"></div>
              <p className="resume-sheet-text">
                {personal.summary}
              </p>
            </section>

            {/* EDUCATION */}
            <section className="resume-sheet-section">
              <h2 className="resume-section-heading">EDUCATION</h2>
              <div className="resume-heading-line"></div>
              {education.map((edu) => (
                <div key={edu.id} className="resume-edu-entry">
                  <div className="entry-header">
                    <div>
                      <strong className="entry-title">{edu.degree}</strong>
                      <p className="entry-subtitle">{edu.institution} {edu.score ? `| CGPA: ${edu.score}` : ''}</p>
                    </div>
                    <div className="entry-date">{edu.period}</div>
                  </div>
                </div>
              ))}
            </section>

            {/* TECHNICAL SKILLS */}
            <section className="resume-sheet-section">
              <h2 className="resume-section-heading">TECHNICAL SKILLS</h2>
              <div className="resume-heading-line"></div>
              <div className="resume-skills-table">
                <div className="skill-row">
                  <span className="skill-cat-label">Languages:</span>
                  <span className="skill-cat-value">Python, Java, SQL(Basic)</span>
                </div>
                <div className="skill-row">
                  <span className="skill-cat-label">Machine Learning & DL:</span>
                  <span className="skill-cat-value">Supervised Learning, Unsupervised Learning, CNN, RNN, n8n workflow automations</span>
                </div>
                <div className="skill-row">
                  <span className="skill-cat-label">Tools & Databases:</span>
                  <span className="skill-cat-value">MySQL, GitHub, VS Code</span>
                </div>
                <div className="skill-row">
                  <span className="skill-cat-label">Core CS:</span>
                  <span className="skill-cat-value">Data Structures & Algorithms(Basic), OOP, DBMS</span>
                </div>
              </div>
            </section>

            {/* WORK EXPERIENCE */}
            <section className="resume-sheet-section">
              <h2 className="resume-section-heading">WORK EXPERIENCE</h2>
              <div className="resume-heading-line"></div>
              {experience.map((exp) => (
                <div key={exp.id} className="resume-entry">
                  <div className="entry-header">
                    <div>
                      <strong className="entry-title">{exp.role}</strong> | <span className="entry-subtitle">{exp.company} ({exp.location})</span>
                    </div>
                    <div className="entry-date">{exp.period}</div>
                  </div>
                  <ul className="entry-bullets">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* PROJECTS */}
            <section className="resume-sheet-section">
              <h2 className="resume-section-heading">PROJECTS</h2>
              <div className="resume-heading-line"></div>
              {projects.map((proj) => (
                <div key={proj.id} className="resume-entry">
                  <div className="entry-header">
                    <div>
                      <strong className="entry-title">{proj.title} — {proj.subtitle}</strong>
                      {proj.liveUrl && (
                        <span> | Live: <a href={proj.liveUrl} target="_blank" rel="noreferrer">{proj.liveUrl.replace('https://', '')}</a></span>
                      )}
                    </div>
                  </div>
                  <ul className="entry-bullets">
                    {(proj.longDescription || [proj.description]).map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* CERTIFICATIONS */}
            <section className="resume-sheet-section">
              <h2 className="resume-section-heading">CERTIFICATIONS</h2>
              <div className="resume-heading-line"></div>
              <ul className="cert-list">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <strong>{cert.title}</strong> — {cert.issuer} {cert.date ? `(${cert.date})` : ''}
                  </li>
                ))}
              </ul>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="resume-sheet-section">
              <h2 className="resume-section-heading">ACHIEVEMENTS</h2>
              <div className="resume-heading-line"></div>
              <ul className="cert-list">
                <li>150+ LeetCode basic problems solved across Data Structures & Algorithms</li>
                <li>30+ day public DSA learning streak on LinkedIn</li>
              </ul>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
