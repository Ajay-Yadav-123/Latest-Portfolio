import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion, useInView } from "framer-motion";
import '../style/Contact.css';

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

// Variants for the entire section fade & rise
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
// Variants for staggered child fade & slide
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {}
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { margin: "-100px", once: false });

  return (
    <motion.section
      ref={sectionRef}
      className="contact-section"
      id="contact"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="about-head">
        <motion.span 
          className="about-intro"
          variants={itemVariants}
        >
          Contact
        </motion.span>
        <motion.h1
          className="about-title"
          variants={itemVariants}
        >
          Say Hello
        </motion.h1>
      </div>

      <motion.div
        className="contact-main-grid"
        variants={staggerContainer}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        {/* Contact Form */}
        <motion.form className="contact-form" variants={itemVariants}>
          <motion.h4 variants={itemVariants}>Send me a message</motion.h4>
          <motion.p variants={itemVariants}>Fill out the form below and I'll get back to you as soon as possible.</motion.p>
          <motion.div className="form-group" variants={itemVariants}>
            <label>Name</label>
            <input type="text" placeholder="John Doe" required />
          </motion.div>
          <motion.div className="form-group" variants={itemVariants}>
            <label>Email</label>
            <input type="email" placeholder="john@example.com" required />
          </motion.div>
          <motion.div className="form-group" variants={itemVariants}>
            <label>Subject</label>
            <input type="text" placeholder="Project Inquiry" required />
          </motion.div>
          <motion.div className="form-group" variants={itemVariants}>
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="I'd like to discuss a project opportunity..."
              required
              style={{ resize: 'none' }}
            />
          </motion.div>
          <motion.button type="submit" className="contact-submit" variants={itemVariants}>
            Send Message
          </motion.button>
        </motion.form>

        {/* Info Card */}
        <motion.div className="contact-info-card" variants={itemVariants}>
          <motion.h4 variants={itemVariants}>Connect with me</motion.h4>
          <motion.p variants={itemVariants}>You can also reach out to me directly through these channels,</motion.p>

          <motion.div className="contact-info-list" variants={staggerContainer}>
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
                style={{ textDecoration: 'none', color: 'inherit' }}
                variants={itemVariants}
              >
                <span className="info-icon">{info.icon}</span>
                <div className="info-column">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="contact-location" variants={itemVariants}>
            <h4>Current Location</h4>
            <span>Mumbai, Maharashtra, IN</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
