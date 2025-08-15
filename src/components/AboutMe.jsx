import React from 'react';
import '../style/AboutMe.css';
import profileImage from '../assets/profile.png'; // Use your real image path

import { FaCode, FaBullhorn, FaPalette, FaServer } from "react-icons/fa";
import SpotlightCard from '../ReactBits/SpotlightCard';
import { motion } from "framer-motion";


const AboutMe = () => {
  return (
    <>
      <section className="about-section" id="about-me">
        <div className="about-head">
          <span className="about-intro">Introduction</span>
          <h1 className="about-title">About me</h1>
        </div>
        <div className="about-content-box">
          <div className="about-img-container">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, y: 50 }}          // Starting state: invisible and shifted down by 50px
              whileInView={{ opacity: 1, y: 0 }}      // Animate to visible and original position when in viewport
              viewport={{ once: true, amount: 0.6 }}  // Animate once when 60% of element is visible
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={profileImage} alt="Profile" className="about-img" />
          </div>
          <div className="about-text">
            <p>
              I’m a passionate Flutter developer with 4 years of experience building high-performance, cross-platform mobile applications. I specialize in creating smooth, scalable, and user-friendly apps, from concept to deployment. Over the past year, I’ve also expanded into web development using Next.js, gaining solid experience in building responsive, modern frontend interfaces.
            </p>
            <p>
              I thrive in fast-paced environments, whether working solo or collaborating with teams, and I’m driven by clean code, great UX, and continuous learning. Whether it’s launching a new product, optimizing existing codebases, or integrating with complex APIs, I bring a detail-oriented mindset and a problem-solving attitude to every project.
            </p>
          </div>
        </div>
      </section>

      <section className="spotlight-cards-section">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="icon-and-content-row">
            <div className="spotlight-icon-circle">
              <FaCode size={26} />
            </div>
            <div>
              <h3>Web Development</h3>
              <p>
                I create fast, responsive websites using Next.js and React, focused on clean design and smooth user experience across all devices.
              </p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="icon-and-content-row">
            <div className="spotlight-icon-circle">
              <FaBullhorn size={26} />
            </div>
            <div>
              <h3>Digital Marketing</h3>
              <p>
                I plan and execute effective online marketing campaigns to improve reach, engagement, and conversions.
              </p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="icon-and-content-row">
            <div className="spotlight-icon-circle">
              <FaPalette size={26} />
            </div>
            <div>
              <h3>UI/UX Design</h3>
              <p>
                I design clean, intuitive user interfaces with a strong focus on usability and aesthetics.
              </p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="icon-and-content-row">
            <div className="spotlight-icon-circle">
              <FaServer size={26} />
            </div>
            <div>
              <h3>API Integration</h3>
              <p>
                I integrate smooth backend services and third‑party APIs for optimal data flow and functionality.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </section>

    </>
  );
};

export default AboutMe;
