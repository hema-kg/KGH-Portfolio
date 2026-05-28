import React from 'react';



const About = ({ summary, strengths = [], languages = [] }) => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title scroll-reveal">About Me</h2>
        <div className="about-content">
          <div className="about-text scroll-reveal">
            <p>{summary}</p>
            {strengths.length > 0 && (
              <>
                <h3>Strengths</h3>
                <ul>
                  {strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </>
            )}
            {languages.length > 0 && (
              <>
                <h3>Languages</h3>
                <ul className="languages-list">
                  {languages.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
              </>
            )}
          </div>
          <div className="about-image scroll-reveal">
            <div className="about-card">
              <h3>Resume Highlights</h3>
              <p>6+ years building scalable React + Node.js applications with strong delivery and leadership focus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
