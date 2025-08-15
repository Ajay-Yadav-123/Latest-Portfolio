import React from "react";
import CardsGroup from "../ReactBits/CardsGroup";
import "../style/Projects.css";

function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <div className="about-head">
          <span className="about-intro">Projects</span>
          <h1 className="about-title">Things I've Created</h1>
        </div>
        <CardsGroup />
      </div>
    </>
  );
}

export default Projects;