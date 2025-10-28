import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  const placeholders = [1, 2, 3];

  return (
    <div className="projects-container" id="projects" data-aos="fade-up">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {placeholders.map((i) => (
          <div className="project-card" key={i}>
            <a className="project-media" href={`/projects/${i}`}>
              <div className="media-placeholder">Project {i}</div>
            </a>
            <h2>Project Title {i}</h2>
            <p>
              Short description of the project goes here. Replace with real
              content later.
            </p>
            <a className="project-link" href={`/projects/${i}`}>
              View details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
