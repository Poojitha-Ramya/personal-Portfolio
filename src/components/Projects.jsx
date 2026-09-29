import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow-container">
          <span className="orange-bar"></span>
          <span className="section-eyebrow">FEATURED WORKS</span>
        </div>
        
        <h2 className="section-title">My Projects</h2>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              {/* Project Preview Image */}
              {project.image && (
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-overlay-glow"></div>
                </div>
              )}

              {/* Project Details */}
              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-year-badge">{project.year}</span>
                  <span className="project-cat-badge">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-desc">{project.description}</p>

                {/* Tech Badges */}
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links / Action */}
                <div className="project-actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Live</span>
                      <ArrowRight size={16} className="arrow-icon" />
                    </a>
                  ) : (
                    <button
                      className="project-live-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} className="arrow-icon" />
                    </button>
                  )}

                  <button
                    className="project-details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                  >
                    Overview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
