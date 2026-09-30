import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, LeetcodeIcon } from './SocialIcons';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-minimal-section">
      <div className="container footer-minimal-container">
        {/* Brand & Identity Block: Box Logo + Name & Subtitle */}
        <div className="footer-identity-group">
          <div className="footer-box-logo" title="PR">
            <span className="logo-letter-p">P</span>
            <span className="logo-letter-r">R</span>
          </div>

          <div className="footer-text-group">
            <h3 className="footer-title-name">{personal.fullName}</h3>
            <p className="footer-meta-line">
              AI/ML Engineer <span className="meta-dot">•</span> Full Stack Developer <span className="meta-dot">•</span> Andhra Pradesh, India
            </p>
          </div>
        </div>

        {/* Minimalist Social Icons Row */}
        <div className="footer-social-row">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>

          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            title="LeetCode Profile"
            aria-label="LeetCode"
          >
            <LeetcodeIcon size={22} />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="footer-social-link"
            title={`Email: ${personal.email}`}
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Back To Top Action */}
        <div className="footer-back-to-top-wrap">
          <button
            onClick={scrollToTop}
            className="footer-back-to-top-btn"
            id="footer-back-to-top-btn"
            title="Back to Top"
          >
            <span>BACK TO TOP</span>
            <span className="arrow-up-icon" aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
