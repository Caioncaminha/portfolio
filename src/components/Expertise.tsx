import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-Learn",
  "Power BI",
  "Excel",
  "SQL",
  "PostgreSQL",
  "Jupyter Notebooks",
];

const labelsSecond = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Flask",
  "REST APIs",
  "JSON",
];

const labelsThird = [
  "Team Leadership",
  "Project Management",
  "Agile Methodologies",
  "Communication",
  "Mentoring",
  "Code Reviews",
  "Collaboration",
  "Conflict Resolution",
  "Scrum",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science</h3>
            <p>
              Comfortable cleaning and exploring datasets, writing basic SQL
              queries, and creating simple visualizations with
              pandas/matplotlib. Familiar with building and evaluating simple
              models and assisting in ETL tasks.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Moderate Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using standard web technologies such as React, TypeScript,
              JavaScript, HTML5, CSS3, and Flask. Not the stack I use daily, but
              comfortable with front-end in general.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faUserGroup} size="3x" />
            <h3>Leadership</h3>
            <p>
              Experienced in leading teams of 4-10 members in academic and
              professional projects. Skilled in task delegation, code reviews,
              and fostering collaboration to achieve project goals efficiently.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
