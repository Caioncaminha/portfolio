import React from "react";
import unentelLogo from "../assets/images/unentel-logo.jpg";
import fiapLogo from "../assets/images/fiap-logo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss"; // O SCSS fará todo o trabalho de estilização
import { useTranslation } from "../hooks/useTranslation";

function Timeline() {
  const { t } = useTranslation();

  return (
    <div id="history">
      <div className="items-container" data-aos="fade-up">
        <h1>{t.careerHistory}</h1>

        {/* A VerticalTimeline agora é estilizada puramente pelo SCSS */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t.dateTimeUnentel}
            icon={<img src={unentelLogo} alt="Unentel Logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              {t.presalesIntern} @{" "}
              <a
                href="https://unentel.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unentel
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              📍{t.location}
            </h4>

            {/* Adicionado 'whiteSpace: "pre-wrap"' para renderizar os bullet points */}
            <p style={{ whiteSpace: "pre-wrap" }}>{t.descUnentelIntern}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t.dateTimeFiap}
            icon={<img src={fiapLogo} alt="FIAP Logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              {t.techLeader} @{" "}
              <a
                href="https://fiap.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                FIAP
              </a>{" "}
              {t.academicProject}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              📍{t.location}
            </h4>
            {t.fiapRespTitle ? (
              <>
                <strong className="timeline-subtitle">{t.fiapRespTitle}</strong>
                <p style={{ whiteSpace: "pre-wrap", marginTop: "8px" }}>
                  {t.fiapRespList}
                </p>
                <strong
                  className="timeline-subtitle"
                  style={{ marginTop: "16px" }}
                >
                  {t.fiapResultsTitle}
                </strong>
                <p style={{ whiteSpace: "pre-wrap", marginTop: "8px" }}>
                  {t.fiapResultsList}
                </p>
              </>
            ) : (
              // Se NÃO (estamos em EN), usamos o layout antigo
              <p style={{ whiteSpace: "pre-wrap" }}>{t.teamCoordination}</p>
            )}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
