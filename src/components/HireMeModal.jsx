import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function HireMeModal({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState('Full-Time Software / ML Engineer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaenapnl';

  const roleOptions = [
    'Full-Time Software / ML Engineer',
    'AI / ML & Deep Learning Project',
    'Frontend / React.js Development',
    'Internship / Entry-Level Role'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          inquiryType: 'Hire Me Inquiry',
          roleType: selectedRole,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#ff6500', '#ffffff', '#ffaa00']
        });
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
          onClose();
        }, 4000);
      } else {
        const data = await response.json();
        setErrorMessage(
          data?.errors?.map((err) => err.message).join(', ') ||
          'Failed to send inquiry. Please try again.'
        );
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container hire-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="modal-header">
          <div className="hire-badge-header">
            <Sparkles size={16} className="text-orange" />
            <span>Open to Opportunities</span>
          </div>
          <h3 className="modal-title">Hire Poojitha Ramya</h3>
          <p className="modal-subtitle">
            Seeking entry-level roles in Software Engineering, ML, AI/ML Engineering, or Front-End Development.
          </p>
        </div>

        {submitted ? (
          <div className="hire-success-view">
            <CheckCircle2 size={56} className="success-icon" />
            <h4>Inquiry Received!</h4>
            <p>
              Thank you for considering Poojitha! Your message has been sent to her Formspree inbox and she will get back to you promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="hire-form">
            {errorMessage && (
              <div className="form-error-banner">
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="role-selector-group">
              <label className="form-label">Role or Opportunity Type:</label>
              <div className="role-pills-grid">
                {roleOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    className={`role-pill-option ${selectedRole === opt ? 'selected' : ''}`}
                    onClick={() => setSelectedRole(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row-2col">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Company / Organization</label>
              <input
                type="text"
                placeholder="e.g. Microsoft, Google, Tech Startup"
                className="form-input"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message / Job Description</label>
              <textarea
                rows={3}
                placeholder="Tell me a bit about the role, team, or project requirements..."
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-send-message modal-submit-btn"
            >
              {isSubmitting ? (
                <span>Sending to Formspree...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
