import React from 'react';
import { MapPin, Award, CheckCircle2, Sparkles, GraduationCap, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutMe() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow-container">
          <span className="orange-bar"></span>
          <span className="section-eyebrow">ABOUT ME</span>
        </div>
        <h2 className="section-title">My Story & Background</h2>

        <div className="about-clean-container">
          <div className="about-story-card">
            <p className="about-narrative">
              {personal.aboutStory}
            </p>

            {/* Location Badge */}
            <div className="location-badge">
              <MapPin size={18} className="location-icon" />
              <span>{personal.location.replace(', India', '')}</span>
            </div>

            {/* Key Accomplishments highlights */}
            <div className="about-highlights-row">
              <div className="highlight-item">
                <Award size={20} className="highlight-icon" />
                <div>
                  <strong>Two-Time Technical Competition Winner</strong>
                  <span>Inter-college technical and coding competitions</span>
                </div>
              </div>

              <div className="highlight-item">
                <GraduationCap size={20} className="highlight-icon" />
                <div>
                  <strong>Academic Distinction</strong>
                  <span>9.50/10.0 CGPA at GMR Institute of Technology</span>
                </div>
              </div>

              <div className="highlight-item">
                <Code size={20} className="highlight-icon" />
                <div>
                  <strong>Industry Ready</strong>
                  <span>Hands-on experience in Machine Learning & React.js SPA development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
