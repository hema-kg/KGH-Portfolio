import React from 'react';

const Experience = ({ experience = [], education = {} }) => (
  <section id="experience">
    <div className="container">
      <h2 className="section-title scroll-reveal">Experience & Education</h2>
      <div className="timeline">
        {experience.map((item, index) => (
          <div className="timeline-item scroll-reveal" key={`${item.title}-${index}`}>
            <span className="timeline-badge">0{index + 1}</span>
            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-period">{item.period}</p>
              <ul>
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {education.degree && (
        <div className="education-card scroll-reveal">
          <h3>Education</h3>
          <p className="timeline-company">{education.degree}</p>
          <p>{education.institution}</p>
          <p className="timeline-period">Graduated {education.year}</p>
        </div>
      )}
    </div>
  </section>
);

export default Experience;
