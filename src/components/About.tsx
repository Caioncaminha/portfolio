import React from "react";
import "../assets/styles/About.scss";
import { useTranslation } from "../hooks/useTranslation";

function About() {
  const { t } = useTranslation();

  return (
    <div className="container" id="about">
      <h1 className="aboutTitle">{t.aboutTitle}</h1>
      <div className="about-section-expertise">
        <p>{t.softwareStudent}</p>
        <p>{t.studentDescription}</p>
        <p>{t.experience}</p>
        <br />
        <p>
          <strong>{t.areasOfInterest}</strong>
        </p>
        <p>{t.interestAreas}</p>
        <br />
        <p>{t.portuguese}</p>
        <p>{t.english}</p>
        <p>{t.spanish}</p>
      </div>
      <div className="skills-list">
        <h1>{t.skillsTitle}</h1>
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
          <span>Seaborn</span>
          <span>Jupyter</span>
          <span>Power BI</span>
          <span>Excel</span>
          <span>Git</span>
        </div>
      </div>
    </div>
  );
}

export default About;
