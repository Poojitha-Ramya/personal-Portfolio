import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
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
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-row">
          {/* Logo & Headline */}
          <div className="footer-brand-col">
            <a href="#home" className="brand-logo footer-logo">
              <span className="logo-letter-p">P</span>
              <span className="logo-letter-r">R</span>
            </a>
            <h3 className="footer-name">{personal.fullName}</h3>
            <p className="footer-tagline">{personal.subtitle}</p>
          </div>

          {/* Nav links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#journey">Career Journey</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="footer-social-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-icons">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LeetCode"
              >
                <LeetcodeIcon size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="footer-social-btn"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personal.rawPhone}`}
                className="footer-social-btn"
                title="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
            <p className="footer-location-text">{personal.location}</p>
          </div>
        </div>

        {/* Footer Bottom Divider */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Chipurupalli Poojitha Ramya. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Back to Top"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
