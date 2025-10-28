import React from "react";
import "../assets/styles/Education.scss";
import { useTranslation } from "../hooks/useTranslation";
import fiapLogo from "../assets/images/fiap-logo-black.png";

function Education() {
  const { t } = useTranslation();

  return (
    <div className="container" id="education">
      <h1>{t.educationTitle}</h1>
      <div className="education-content">
        <div className="education-card">
          <img src={fiapLogo} alt="FIAP Logo" className="education-logo" />
          <div className="education-text">
            <h2>{t.degree}</h2>
            <p>{t.university}</p>
            <p>{t.graduation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
