import React from "react";
import unentelLogo from "../assets/images/unentel-logo.jpg";
import fiapLogo from "../assets/images/fiap-logo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Nov/2025 - present"
            iconStyle={{ background: "white" }}
            icon={
              <img
                src={unentelLogo}
                alt="Unentel Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Pre-Sales Intern at{" "}
              <a
                href="https://unentel.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unentel
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              São Paulo, SP
            </h4>
            <p>
              Solution Design, Client Engagement, Technical Presentations,
              Front-End Development and Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar/2025 - Oct/2025"
            iconStyle={{ background: "white" }}
            icon={
              <img
                src={fiapLogo}
                alt="FIAP Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Technical Leader at{" "}
              <a
                href="https://fiap.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                FIAP
              </a>
              {"\u00A0"}(Academic Project)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              São Paulo, SP
            </h4>
            <p>
              Team Coordination, Backend Development, Cloud Infrastructure, Code
              Reviews, Pitching Ideas and Presentations
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
