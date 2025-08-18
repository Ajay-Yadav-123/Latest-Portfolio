import React, { useState, useEffect, useRef } from 'react';
import '../style/HomePage.css';
import profileImage from '../assets/profile.png';
import {
  FaSun, FaMoon,
  FaLinkedin, FaGithub, FaWhatsapp,
  FaBars, FaTimes
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import TrueFocus from '../ReactBits/TrueFocus';
import { SiX } from 'react-icons/si';
import ResumeButton from './ResumeButton';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

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

    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [theme, navOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 't' || e.key === 'T') {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const handleNavClick = () => setNavOpen(false);

  // Refs and InView hooks for animation controls with reverse on scroll out
  const profileImgRef = useRef(null);
  const profileImgInView = useInView(profileImgRef, { margin: '-100px', once: false });

  const greetingRef = useRef(null);
  const greetingInView = useInView(greetingRef, { margin: '-100px', once: false });

  const descRef = useRef(null);
  const descInView = useInView(descRef, { margin: '-100px', once: false });

  const socialRef = useRef(null);
  const socialInView = useInView(socialRef, { margin: '-100px', once: false });

  const buttonRef = useRef(null);
  const buttonInView = useInView(buttonRef, { margin: '-100px', once: false });

  return (
    <div className="homepage" id='home'>
      <header className="navbar">
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
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <motion.div
            ref={profileImgRef}
            className="profile-image-container"
            initial="hidden"
            animate={profileImgInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={profileImage}
              alt="Profile"
              className="profile-image"
              initial={{ opacity: 0, y: 50 }}
              animate={profileImgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div className="hero-text">
            <motion.h2
              ref={greetingRef}
              className="greeting"
              initial="hidden"
              animate={greetingInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi! I'm Ajay
            </motion.h2>

            <TrueFocus />

            <motion.p
              ref={descRef}
              className="description"
              initial="hidden"
              animate={descInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Based in Mumbai, Maharashtra, India. I build interactive and responsive websites that work seamlessly across all platforms and devices.
            </motion.p>
          </motion.div>

          <motion.div
            ref={socialRef}
            className="social-icons"
            initial="hidden"
            animate={socialInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
            ref={buttonRef}
            className="action-buttons"
            initial="hidden"
            animate={buttonInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
