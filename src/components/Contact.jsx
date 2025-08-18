import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import "../style/Contact.css";

const contactInfo = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Ajay-Yadav-123",
    link: "https://github.com/Ajay-Yadav-123",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/ajay-yadav-aj/",
    link: "https://www.linkedin.com/in/ajay-yadav-aj",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "ajmeansajay879@gmail.com",
    link: "mailto:ajmeansajay879@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+917378927857",
    link: "tel:+917378927857",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { margin: "-100px", once: false });
  const formRef = useRef();

  // ✅ Handling form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bot1yww", // from EmailJS
        "template_wbwxdb6", // from EmailJS
        formRef.current,
        "VG3P7n-OgINnSKAA1" // from EmailJS
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <motion.section
      ref={sectionRef}
      className="contact-section"
      id="contact"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
    >
      <div className="about-head">
        <motion.span className="about-intro">Contact</motion.span>
        <motion.h1 className="about-title">Say Hello</motion.h1>
      </div>

      <motion.div className="contact-main-grid">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <h4>Send me a message</h4>
          <p>
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Project Inquiry" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="I'd like to discuss a project opportunity..."
              required
              style={{ resize: "none" }}
            />
          </div>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </motion.form>

        {/* Info Card */}
        <motion.div className="contact-info-card">
          <h4>Connect with me</h4>
          <p>You can also reach out to me directly through these channels,</p>
          <div className="contact-info-list">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
                style={{ textDecoration: "none", color: "inherit" }}
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
