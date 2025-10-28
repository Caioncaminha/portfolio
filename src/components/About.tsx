import React from "react";
import "../assets/styles/About.scss";

function About() {
  return (
    <div className="container" id="about">
      <div className="skills-container">
        <h1>About Me</h1>
        <div className="about-section-expertise">
          <p>
            <strong>Software Engineering Student</strong> with a focus on
            Python, algorithms, and data structures. I emphasize practices such
            as <strong>SOLID</strong>, version control, and clean code.
          </p>
          <p>
            Experience as a leader and co-leader in semi-professional teams both
            inside and outside the academic environment, contributing to
            small-scale projects, notably the <strong>"Passa a Bola"</strong>{" "}
            project currently.
          </p>
          <p>
            <strong>Areas of interest (Internship):</strong> Data Science, Data
            Analyst, Data Engineer, BI Analyst, or related fields.
          </p>
          <p>
            <strong>Languages:</strong>
            <br />
            Portuguese - Native (C2)
            <br />
            English - Upper-Intermediate (B2+)
            <br />
            Spanish - Beginner (A2)
          </p>
        </div>
        <div className="skills-section" id="skills">
          <h2>Skills</h2>
          <div className="skills-row">
            <span>Python</span>
            <span>SQLite</span>
            <span>SQL</span>
            <span>NoSQL</span>
            <span>Cloud Firestore</span>
            <span>MongoDB</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Matplotlib</span>
            <span>Jupyter</span>
            <span>Seaborn</span>
            <span>Power BI</span>
            <span>Excel</span>
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
