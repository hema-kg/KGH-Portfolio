import React from 'react';

const skillLevelMap = {
  frontend: 95,
  backend: 90,
  database: 85,
  toolsPlatforms: 88,
  apis: 80,
  projectManagement: 78,
  other: 70
};

const formatCategory = (category) => category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

const Skills = ({ technicalSkills }) => {
  const entries = technicalSkills && Object.entries(technicalSkills);
  const totalSkills = entries ? entries.reduce((count, [, skills]) => count + skills.length, 0) : 0;

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title scroll-reveal">Skills & Expertise</h2>
        <div className="skills-overview scroll-reveal">
          <div className="skill-stat">
            <span>{totalSkills}</span>
            <p>Core Skills</p>
          </div>
          <div className="skill-stat">
            <span>{entries ? entries.length : 0}</span>
            <p>Skill Domains</p>
          </div>
          <div className="skill-stat">
            <span>6+</span>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="skill-bars scroll-reveal">
          {entries && entries.map(([category, skills]) => {
            const level = skillLevelMap[category] || 72;
            return (
              <div className="skill-bar-item" key={category}>
                <div className="skill-bar-label">
                  <span>{formatCategory(category)}</span>
                  <strong>{level}%</strong>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${level}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-grid">
          {entries && entries.length > 0 ? (
            entries.map(([category, skills]) => (
              <div className="skill-card scroll-reveal" key={category}>
                <div className="skill-icon">💡</div>
                <h3>{formatCategory(category)}</h3>
                <ul>
                  {skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))
          ) : (
            <p style={{ color: 'red' }}>No skills to display.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
