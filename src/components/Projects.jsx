import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardsGroup from "../ReactBits/CardsGroup";
import "../style/Projects.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

function Projects() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { margin: "-100px", once: false });

  return (
    <>
      <div
        className="projects"
      >
        <motion.div className="about-head"
        ref={sectionRef}
        id="projects"
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}>
          <span className="about-intro">Projects</span>
          <h1 className="about-title">Things I've Created</h1>
        </motion.div>
        <motion.div
        ref={sectionRef}
        id="projects"
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CardsGroup />
        </motion.div>
        
      </div>
    </>
  );
}

export default Projects;
