import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container project-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="project-modal-header">
          <div className="project-meta-row">
            <span className="project-year-badge">{project.year}</span>
            <span className="project-cat-badge">{project.category}</span>
          </div>
          <h3 className="project-modal-title">{project.title}</h3>
          {project.subtitle && <p className="project-modal-subtitle">{project.subtitle}</p>}
        </div>

        {/* Preview Image */}
        {project.image && (
          <div className="project-modal-image-wrapper">
            <img src={project.image} alt={project.title} className="project-modal-img" />
          </div>
        )}

        {/* Modal Body */}
        <div className="project-modal-body">
          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="project-metrics-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="metric-box">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="project-modal-details">
            <h4 className="detail-section-title">Key Architectural Highlights</h4>
            <ul className="project-modal-bullets">
              {(project.longDescription || [project.description]).map((bullet, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="bullet-check text-orange" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="project-modal-tech">
            <h4 className="detail-section-title">Technologies & Tools</h4>
            <div className="project-tags">
              {project.tags.map((t, idx) => (
                <span key={idx} className="project-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="project-modal-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hire-me project-modal-live-btn"
              >
                <span>Launch Live Application</span>
                <ExternalLink size={16} />
              </a>
            )}
            <button className="btn-modal-close-action" onClick={onClose}>
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
