import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, LeetcodeIcon } from './SocialIcons';

export default function Hero({ onOpenHireMe, onOpenResume }) {
  const { personal } = portfolioData;

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      const navHeight = 80;
      const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Formatted matching reference layout */}
        <div className="hero-content">
          {/* Status Pill: OPEN TO AI/ML & SDE ROLES */}
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span className="status-text">OPEN TO AI/ML &amp; SDE ROLES</span>
          </div>

          {/* Eyebrow: MY NAME IS */}
          <p className="hero-eyebrow">MY NAME IS</p>

          {/* Bold Headline Name */}
          <h1 className="hero-name">POOJITHA RAMYA</h1>

          {/* Role Statement */}
          <div className="hero-statement">
            <h2 className="hero-statement-lead">
              I am an <span className="hero-role-highlight">AI/ML Engineer</span>
            </h2>
            <p className="hero-statement-desc">
              &amp; Full Stack Developer crafting intelligent models and production platforms.
            </p>
          </div>

          {/* Action Links with Underlines: ABOUT ME, PROJECTS, HIRE ME / VIEW RESUME */}
          <div className="hero-action-links">
            <div className="hero-action-row">
              <a
                href="#about"
                className="hero-underline-link"
                onClick={(e) => handleScrollTo(e, '#about')}
              >
                ABOUT ME
              </a>

              <a
                href="#projects"
                className="hero-underline-link"
                onClick={(e) => handleScrollTo(e, '#projects')}
              >
                PROJECTS
              </a>

              <button
                type="button"
                className="hero-underline-link"
                onClick={onOpenHireMe}
                id="hero-hire-me-link"
              >
                HIRE ME
              </button>
            </div>

            <div className="hero-action-row">
              <button
                type="button"
                className="hero-underline-link"
                onClick={onOpenResume}
                id="hero-resume-link"
              >
                VIEW RESUME
              </button>
            </div>
          </div>

          {/* Social Icons Row: GitHub, LinkedIn, LeetCode, Email, Phone */}
          <div className="hero-social-row">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon size={21} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={21} />
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon-btn"
              title="LeetCode Profile"
              aria-label="LeetCode"
            >
              <LeetcodeIcon size={21} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="hero-social-icon-btn"
              title={`Email: ${personal.email}`}
              aria-label="Email"
            >
              <Mail size={21} />
            </a>

            <a
              href={`tel:${personal.rawPhone}`}
              className="hero-social-icon-btn"
              title={`Phone: ${personal.phone}`}
              aria-label="Phone"
            >
              <Phone size={21} />
            </a>
          </div>
        </div>

        {/* Right Column: Natural Cutout Portrait Blended into Background */}
        <div className="hero-image-wrapper">
          <div className="hero-portrait-stage">
            {/* Ambient Backlight Glow */}
            <div className="hero-portrait-glow" aria-hidden="true"></div>

            {/* Seamless blended portrait photo (NO circle) */}
            <img
              src={personal.photo}
              alt={personal.fullName}
              className="hero-portrait-photo"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
