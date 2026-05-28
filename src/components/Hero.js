import React from 'react';

const resumeUrl = encodeURI(`${process.env.PUBLIC_URL || ''}/Hemalatha KG CV.txt`);

const Hero = ({ name, summary }) => (
  <section id="home" className="hero">
    <div className="hero-content">
      <span className="hero-badge scroll-reveal">Resume Portfolio</span>
      <h1 className="scroll-reveal">Hello, I'm {name}</h1>
      <p className="scroll-reveal">{summary}</p>
      <div className="hero-actions scroll-reveal">
        <a href="#contact" className="cta-button">Hire Me</a>
        <a href="#experience" className="secondary-button">View Resume</a>
        <a href={resumeUrl} download className="download-button">Download Resume</a>
      </div>
    </div>
  </section>
);

export default Hero;
