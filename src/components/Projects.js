import React from 'react';



const Projects = ({ projects }) => {
  console.log('Projects props:', projects);
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title scroll-reveal">Featured Projects</h2>
        <div className="projects-grid">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, idx) => (
              <div className="project-card scroll-reveal" key={project.name + idx}>
                <div className="project-image">
                  <span>{project.name}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: 'red' }}>No projects to display.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
