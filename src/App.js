import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
