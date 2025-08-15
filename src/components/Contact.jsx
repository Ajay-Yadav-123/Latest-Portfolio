import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../style/Contact.css'; // Reference the CSS below

const contactInfo = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/Ajay-Yadav-123',
    link: 'https://github.com/Ajay-Yadav-123',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ajay-yadav-aj/',
    link: 'https://www.linkedin.com/in/ajay-yadav-aj',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'ajmeansajay879@gmail.com',
    link: 'mailto:ajmeansajay879@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+917378927857',
    link: 'tel:+917378927857',
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="about-head">
        <span className="about-intro">Contact</span>
        <h1 className="about-title">Say Hello</h1>
      </div>
      <div className="contact-main-grid">
        {/* Contact Form */}
        <form className="contact-form">
          <h4>Send me a message</h4>
          <p>Fill out the form below and I'll get back to you as soon as possible.</p>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Project Inquiry" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="I'd like to discuss a project opportunity..."
              required
              style={{ resize: 'none' }}
            />
          </div>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
        {/* Info Card */}
        <div className="contact-info-card">
          <h4>Connect with me</h4>
          <p>You can also reach out to me directly through these channels,</p>
          <div className="contact-info-list">
            {contactInfo.map((info, i) => (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="info-row"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="info-icon">{info.icon}</span>
                <div className="info-column">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="contact-location">
            <h4>Current Location</h4>
            <span>Mumbai, Maharashtra, IN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
