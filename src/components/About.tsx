import React from "react";
import "../assets/styles/About.scss";
import { useTranslation } from "../hooks/useTranslation";

function About() {
  const { t } = useTranslation();

  return (
    <div className="container" id="about" data-aos="fade-up">
      <h1 className="aboutTitle">{t.aboutTitle}</h1>
      <div className="about-section-expertise">
        <p>{t.softwareStudent}</p>
        <p>{t.studentDescription}</p>
        <p>{t.aboutExperience}</p>
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
          {t.skillsList &&
            t.skillsList
              .split(",")
              .map((skill, index) => <span key={index}>{skill.trim()}</span>)}
        </div>
      </div>
    </div>
  );
}

export default About;
