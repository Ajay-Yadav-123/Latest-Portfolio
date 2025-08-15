import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../style/Contact.css'; // Reference the CSS below

const contactInfo = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/achyutk21',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/achyutkatiyar2103/',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'achyutkatiyar21@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+18575766733',
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id='contact'>
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
            <textarea rows="4" placeholder="I'd like to discuss a project opportunity..." required />
          </div>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
        {/* Info Card */}
        <div className="contact-info-card">
          <h4>Connect with me</h4>
          <p>You can also reach out to me directly through these channels m, </p>
          <div className="contact-info-list">
            {contactInfo.map((info, i) => (
              <div className="info-row" key={i}>
                <span className="info-icon">{info.icon}</span>
                <div className="info-column">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>

              </div>
            ))}
          </div>
          <div className="contact-location">
            <h4>Current Location</h4>
            <span>Boston, Massachusetts, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
