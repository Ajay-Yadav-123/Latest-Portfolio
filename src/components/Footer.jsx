import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../style/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main-grid">
        {/* About */}
        <div className="footer-about">
          <h4 className="footer-name">Achyut Katiyar</h4>
          <div className="footer-bio">
            Full Stack Web Developer &amp; based in Mumbai, Maharashtra, specializing in building modern, responsive websites and dynamic user interfaces.
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="/files/myResume.pdf" target="_blank" rel="noopener noreferrer">Resume<sup>↗</sup></a></li>

          </ul>
        </div>
        {/* Connect */}
        <div className="footer-connect">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-icons-row">
            <a href="https://github.com/Ajay-Yadav-123" target="_blank" rel="noopener noreferrer" title="GitHub" className="footer-social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ajay-yadav-b7902a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="footer-social-icon">
              <FaLinkedin />
            </a>
            <a href="ajmeansajay879@gmail.com" title="Email" className="footer-social-icon">
              <FaEnvelope />
            </a>
            <a href="tel:+917378927857" title="Phone" className="footer-social-icon">
              <FaPhone />
            </a>
          </div>
        </div>
        {/* Shortcuts */}
        <div className="footer-shortcuts">
          <h4 className="footer-heading">Keyboard Shortcuts</h4>
          <div className="shortcut-row"><kbd>T</kbd> <span>Toggle theme</span></div>
        </div>
      </div>
      {/* Copyright */}
      <div className="footer-bottom">
        <div className="deep-footer">
          <span>© 2025 Ajay Yadav. All rights reserved.</span>
          <span>
            Built with <span className="footer-heart">♥</span> using React.js
          </span>
        </div>
      </div>
    </footer>
  );
}
