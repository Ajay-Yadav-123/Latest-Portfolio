import React, { useState, useEffect } from 'react';
import '../style/HomePage.css';
import profileImage from '../assets/profile.png';
import {
  FaSun, FaMoon,
  FaLinkedin, FaGithub, FaWhatsapp,
  FaBars, FaTimes
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import TrueFocus from '../ReactBits/TrueFocus';
import { SiX } from 'react-icons/si';
import ResumeButton from './ResumeButton';

const HomePage = () => {
  // Hamburger state
  const [navOpen, setNavOpen] = useState(false);
  // Theme logic
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    }
    return 'dark';
  };
  const [theme, setTheme] = useState(getInitialTheme());
  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme);
    // Prevent scroll when nav open
    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    // eslint-disable-next-line
  }, [theme, navOpen]);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const handleNavClick = () => setNavOpen(false);

  return (
    <div className="homepage" id='home'>
      <motion.header
        initial={{ opacity: 0, y: -22 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}

        className="navbar">
        <div className="nav-container">
          <img src={profileImage} alt="Profile" className="nav-logo" id='home' />
          {/* Hamburger Button */}
          <button
            className="hamburger-btn"
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
          {/* Navigation Menu */}
          <nav className={`nav-menu${navOpen ? " open" : ""}`}>
            <a href="#home" className="nav-link" onClick={handleNavClick}>Home</a>
            <a href="#about-me" className="nav-link" onClick={handleNavClick}>About</a>
            <a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a>
            <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>
            <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
          </nav>
          <div className="theme-toggle">
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <main className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, y: 50 }}          // Starting state: invisible and shifted down by 50px
              whileInView={{ opacity: 1, y: 0 }}      // Animate to visible and original position when in viewport
              viewport={{ once: true, amount: 0.6 }}  // Animate once when 60% of element is visible
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div className="hero-text">
            <motion.h2

              initial={{ opacity: 0, y: 50 }}          // Starting state: invisible and shifted down by 50px
              whileInView={{ opacity: 1, y: 0 }}      // Animate to visible and original position when in viewport
              viewport={{ once: true, amount: 0.6 }}  // Animate once when 60% of element is visible
              transition={{ duration: 0.8, ease: "easeOut" }}

              className="greeting">Hi! I'm Ajay</motion.h2>

            <TrueFocus />

            <motion.p

              initial={{ opacity: 0, y: 50 }}          // Starting state: invisible and shifted down by 50px
              whileInView={{ opacity: 1, y: 0 }}      // Animate to visible and original position when in viewport
              viewport={{ once: true, amount: 0.6 }}  // Animate once when 60% of element is visible
              transition={{ duration: 0.8, ease: "easeOut" }}

              className="description">
              Based in Mumbai, Maharashtra, India. I build interactive and responsive websites that work seamlessly across all platforms and devices.
            </motion.p>
          </div>
          <motion.div

            initial={{ opacity: 0, y: 50 }}          // Starting state: invisible and shifted down by 50px
            whileInView={{ opacity: 1, y: 0 }}      // Animate to visible and original position when in viewport
            viewport={{ once: true, amount: 0.6 }}  // Animate once when 60% of element is visible
            transition={{ duration: 0.8, ease: "easeOut" }}

            className="social-icons">
            <a href="https://www.linkedin.com/in/ajay-yadav-b7902a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/Ajay-Yadav-123" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} />
            </a>
            <a href="https://x.com/Ajay38251016?t=glv-F_a29dhsTmkV5m6ixA&s=09" className="social-icon" aria-label="X" target="_blank" rel="noopener noreferrer">
              <SiX size={22} />
            </a>
            <a href="https://wa.me/917378927857" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={22} />
            </a>
          </motion.div>
          <motion.div

            initial={{ opacity: 0, y: 50 }}          // Starting state: invisible and shifted down by 50px
            whileInView={{ opacity: 1, y: 0 }}      // Animate to visible and original position when in viewport
            viewport={{ once: true, amount: 0.6 }}  // Animate once when 60% of element is visible
            transition={{ duration: 0.8, ease: "easeOut" }}

            className="action-buttons">
            <a href='https://wa.me/917378927857' className="btn btn-primary">
              <MdEmail size={20} style={{ marginRight: "0.5em" }} />
              Contact Me
            </a>
            <ResumeButton />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;