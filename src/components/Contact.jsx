import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, LeetcodeIcon } from './SocialIcons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaenapnl';

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

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
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#ff6500', '#ff8d3a', '#ffffff']
        });

        setFormData({
          name: '',
          email: '',
          message: ''
        });

        setTimeout(() => setSubmitSuccess(false), 7000);
      } else {
        const data = await response.json();
        setErrorMessage(
          data?.errors?.map((err) => err.message).join(', ') ||
          'Failed to send message. Please try again or email directly.'
        );
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow-container">
          <span className="orange-bar"></span>
          <span className="section-eyebrow">GET IN TOUCH</span>
        </div>
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtitle">
          Seeking entry-level roles in Software Engineering, ML, AI/ML Engineering, or Front-End Development.
          Feel free to reach out directly or send a message below!
        </p>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <Mail size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Email</span>
                <a href={`mailto:${personal.email}`} className="contact-card-val">
                  {personal.email}
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy(personal.email, 'email')}
                title="Copy email address"
              >
                {copiedField === 'email' ? <Check size={16} className="text-orange" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <Phone size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Phone</span>
                <a href={`tel:${personal.rawPhone}`} className="contact-card-val">
                  {personal.phone}
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy(personal.phone, 'phone')}
                title="Copy phone number"
              >
                {copiedField === 'phone' ? <Check size={16} className="text-orange" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <MapPin size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-val">{personal.location}</span>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="contact-social-card">
              <span className="contact-card-label">Professional Profiles</span>
              <div className="contact-social-links">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill"
                >
                  <LeetcodeIcon size={18} />
                  <span>LeetCode</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-subtitle">Messages are sent directly to Poojitha via Formspree.</p>

              {submitSuccess && (
                <div className="form-success-banner">
                  <Check size={20} />
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>Thank you for reaching out. Poojitha will be in touch with you shortly.</p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="form-error-banner">
                  <AlertCircle size={20} />
                  <div>
                    <strong>Error sending message</strong>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="actual-contact-form">
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Poojitha, I came across your portfolio and would love to discuss..."
                    rows={5}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-send-message"
                  id="send-message-btn"
                >
                  {isSubmitting ? (
                    <span>Sending message to Formspree...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
