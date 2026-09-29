import React from 'react';
import { FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, LeetcodeIcon } from './SocialIcons';

export default function Hero({ onOpenHireMe, onOpenResume }) {
  const { personal } = portfolioData;

  const handleOpenResume = () => {
    onOpenResume();
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Bio & Call to Actions */}
        <div className="hero-content">
          <p className="hero-greeting">Hi I am</p>
          <h1 className="hero-name">{personal.shortName}</h1>
          <h2 className="hero-title">{personal.role}</h2>

          {/* Action Buttons: Hire Me and Resume */}
          <div className="hero-buttons">
            <button
              className="btn-hire-me hero-btn-hire"
              onClick={onOpenHireMe}
              id="hero-hire-me-btn"
            >
              Hire Me
            </button>

            <button
              className="btn-view-resume hero-btn-resume"
              onClick={handleOpenResume}
              id="hero-view-resume-btn"
              title="View Uploaded Resume"
            >
              <FileText size={18} />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Icons Row */}
          <div className="hero-socials">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LeetCode Profile"
              aria-label="LeetCode"
            >
              <LeetcodeIcon size={20} />
            </a>
          </div>

          {/* Hero Floating Stats Card */}
          <div className="hero-stats-card">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="stat-column">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Circular Portrait with exact user photo */}
        <div className="hero-image-wrapper">
          <div className="hero-portrait-circle">
            <img
              src={personal.photo}
              alt={personal.fullName}
              className="hero-portrait-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
