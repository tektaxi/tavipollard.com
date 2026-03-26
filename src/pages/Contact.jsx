import React, { useState } from 'react';
import { contactInfo } from '../data/content';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission. In a real scenario, you could hook this up to Formspree or EmailJS.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container section slide-up" id="contact">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="text-accent contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          {contactInfo.message}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Contact Info Side */}
          <div className="contact-info glass-panel" style={{ width: '100%', maxWidth: '650px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Contact Info</h3>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem', fontSize: '0.95rem' }}>Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-accent" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                {contactInfo.email}
              </a>
            </div>

            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem', fontSize: '0.95rem' }}>Social</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-accent" style={{ fontSize: '1.1rem', fontWeight: 500, textDecoration: 'underline' }}>LinkedIn</a>
                <a href={contactInfo.github} target="_blank" rel="noreferrer" className="text-accent" style={{ fontSize: '1.1rem', fontWeight: 500, textDecoration: 'underline' }}>GitHub</a>
              </div>
            </div>
          </div>

          {/* Form Side (temporarily hidden for launch) */}
          {false && (
          <div className="contact-form-container glass-panel">
            {submitted ? (
              <div className="success-message" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-primary)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Message Sent!</h3>
                <p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Send Message</button>
              </form>
            )}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
