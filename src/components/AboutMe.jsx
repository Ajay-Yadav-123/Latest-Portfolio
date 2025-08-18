import React, { useRef } from 'react';
import '../style/AboutMe.css';
import profileImage from '../assets/profile.png';
import { FaCode, FaBullhorn, FaPalette, FaServer } from "react-icons/fa";
import SpotlightCard from '../ReactBits/SpotlightCard';
import { motion, useInView } from "framer-motion";

// Animation variants for modular use
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};
const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};
const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const AboutMe = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { margin: '-100px', once: false });

  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { margin: '-100px', once: false });

  const textRef = useRef(null);
  const textInView = useInView(textRef, { margin: '-100px', once: false });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { margin: '-100px', once: false });

  return (
    <>
      <section className="about-section" id="about-me">
        {/* Animated section header */}
        <motion.div
          ref={headerRef}
          className="about-head"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="about-intro">Introduction</span>
          <h1 className="about-title">About me</h1>
        </motion.div>

        <div className="about-content-box">
          <motion.div
            ref={imgRef}
            className="about-img-container"
            initial="hidden"
            animate={imgInView ? "visible" : "hidden"}
            variants={fadeFromLeft}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={profileImage}
              alt="Profile"
              className="about-img"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </motion.div>

          {/* Paragraphs fade in with stagger effect */}
          <motion.div
            ref={textRef}
            className="about-text"
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={fadeFromRight}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I’m a dedicated web developer with a strong foundation in building interactive, responsive websites using the latest technologies. Over the past several years, I’ve honed my skills in HTML, CSS, JavaScript, React.js, and WordPress, delivering user-friendly web experiences for clients and personal projects alike. My experience spans crafting custom portfolio sites, business websites, and integrating APIs to add dynamic features and value.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.38 }}
            >
              I thrive on clean, maintainable code, modern design principles, and continuous self-improvement. Whether working independently or as part of a team, I’m committed to delivering high-quality results, optimizing performance, and ensuring a seamless user experience across all devices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Spotlight cards with staggered entrance */}
      <section className="spotlight-cards-section">
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          style={{ display: "grid", gap: "1.4rem", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          {[
            {
              icon: <FaCode size={26} />,
              title: "Web Development",
              text: "I create fast, responsive websites using React.js and Wordpress focused on clean design and seamless user experiences across all devices."
            },
            {
              icon: <FaBullhorn size={26} />,
              title: "Digital Marketing",
              text: "I plan and execute effective online marketing campaigns to improve reach, engagement, and conversions."
            },
            {
              icon: <FaPalette size={26} />,
              title: "UI/UX Design",
              text: "I design clean, intuitive user interfaces with a strong focus on usability and aesthetics."
            },
            {
              icon: <FaServer size={26} />,
              title: "API Integration",
              text: "I integrate smooth backend services and third‑party APIs for optimal data flow and functionality."
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.55, delay: idx * 0.15 + 0.1, ease: 'easeOut' }}
            >
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="icon-and-content-row">
                  <div className="spotlight-icon-circle">{card.icon}</div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
