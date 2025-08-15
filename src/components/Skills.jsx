import React from "react";
import ImageTrail from '../ReactBits/ImageTrail'
import "../style/Skills.css"

import photo1 from '../assets/html.jpg';
import photo2 from '../assets/css.jpg';
import photo3 from '../assets/js.jpg';
import photo4 from '../assets/reactjs.jpg';
import photo5 from '../assets/nodejs.jpg';
import photo6 from '../assets/tailwind.jpg';
import photo7 from '../assets/bootstrap.jpg';
import photo8 from '../assets/expressjs.jpg';
import photo9 from '../assets/mongodb.jpg';
import photo10 from '../assets/WordPress-logo-Vector.jpg';
import photo11 from '../assets/canva.jpg';
import photo12 from '../assets/figma.jpg';

function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="about-head">
          <span className="about-intro">Skills</span>
          <h1 className="about-title">What I Know</h1>
        </div>
        <div className="hover-div" style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
          <h3 className="hover-me">Hover Me</h3>
          <h3 className="hover-me-mobile">Tap Around</h3>
          <ImageTrail 
            items={[
              photo1,
              photo2,
              photo3,
              photo4,
              photo5,
              photo6,
              photo7,
              photo8,
              photo9,
              photo10,
              photo11,
              photo12,
              // ...
            ]}
            variant={3}
          />
        </div>
      </section>

    </>

  );
}

export default Skills;