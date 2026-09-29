import React, { useState } from 'react';
import { Briefcase, Award, GraduationCap, Calendar, CheckCircle2, Building, Sparkles, Code2, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CareerJourney() {
  const [activeTab, setActiveTab] = useState('all');
  const { experience, certifications, education } = portfolioData;

  const tabs = [
    { id: 'all', label: 'All Journey' },
    { id: 'experience', label: 'Internship Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow-container">
          <span className="orange-bar"></span>
          <span className="section-eyebrow">CAREER JOURNEY</span>
        </div>
        
        <div className="journey-header-row">
          <h2 className="section-title">Experience & Certifications</h2>
          
          {/* Journey Sub-Tabs */}
          <div className="journey-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`journey-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="journey-content-stack">
          {/* INTERNSHIP EXPERIENCE */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="journey-group">
              <div className="journey-group-header">
                <Briefcase size={22} className="group-header-icon" />
                <h3 className="journey-group-title">Internship Experience</h3>
              </div>

              <div className="experience-cards-list">
                {experience.map((exp) => (
                  <div key={exp.id} className="experience-card">
                    <div className="experience-card-top">
                      <div className="exp-role-info">
                        <span className="exp-type-badge">{exp.type}</span>
                        <h4 className="exp-role">{exp.role}</h4>
                        <p className="exp-company">
                          <Building size={16} />
                          <span>{exp.company}</span>
                          <span className="company-divider">•</span>
                          <span>{exp.location}</span>
                        </p>
                      </div>

                      <div className="exp-period-badge">
                        <Calendar size={15} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="exp-bullets">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="exp-bullet-item">
                          <CheckCircle2 size={16} className="bullet-check" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="exp-tech-chips">
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CERTIFICATIONS */}
          {(activeTab === 'all' || activeTab === 'certifications') && (
            <div className="journey-group">
              <div className="journey-group-header">
                <Award size={22} className="group-header-icon" />
                <h3 className="journey-group-title">Professional Certifications</h3>
              </div>

              <div className="certifications-grid">
                {certifications.map((cert) => (
                  <div key={cert.id} className="certification-card">
                    <div className="cert-top-row">
                      <div className="cert-icon-wrapper">
                        <Award size={22} />
                      </div>
                      <span className="cert-date">{cert.date}</span>
                    </div>

                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>

                    <div className="cert-badge-pill">
                      <span>{cert.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="journey-group">
              <div className="journey-group-header">
                <GraduationCap size={22} className="group-header-icon" />
                <h3 className="journey-group-title">Education</h3>
              </div>

              <div className="education-grid">
                {education.map((edu) => (
                  <div key={edu.id} className="education-card">
                    <div className="edu-top-row">
                      <span className="edu-period">{edu.period}</span>
                      <span className="edu-score-badge">{edu.score}</span>
                    </div>

                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>

                    <ul className="edu-highlights">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx}>
                          <CheckCircle2 size={14} className="edu-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
