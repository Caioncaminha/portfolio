import { Chrono } from "react-chrono";
import styled from "styled-components";
import "../assets/styles/Timeline.scss";
import { useTranslation } from "../hooks/useTranslation";
import unentelLogo from "../assets/images/unentel-logo.jpg";
import fiapLogo from "../assets/images/fiap-logo.png";

const ChronoWrapper = styled.div<{ theme: any }>`
  --primary-color: ${(props) => props.theme.accent};
  --secondary-color: ${(props) => props.theme.cardBg};
  --card-bg-color: ${(props) => props.theme.cardBg};
  --card-details-color: ${(props) => props.theme.textMuted};
  --card-media-bg-color: ${(props) => props.theme.accent};
  --card-subtitle-color: ${(props) => props.theme.textMuted};
  --card-text-color: ${(props) => props.theme.textMain};
  --card-title-color: ${(props) => props.theme.textMain};
  --title-color: ${(props) => props.theme.textMain};
  --title-color-active: ${(props) => props.theme.accentStrong};

  /* Ajustes finos adicionais podem ser feitos aqui */
  .timeline-card-content {
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.border};
  }
`;

function Timeline() {
  const { t } = useTranslation();

  const items = [
    {
      title: t.dateTimeUnentel,
      cardTitle: t.presalesIntern,
      cardSubtitle: `Unentel - 📍${t.location}`,
      cardDetailedText: t.descUnentelIntern?.split("\n"),
      media: { type: "IMAGE" as const, source: { url: unentelLogo } }, // <-- Correção aqui
    },
    {
      title: t.dateTimeFiap,
      cardTitle: `${t.techLeader} - FIAP ${t.academicProject}`,
      cardSubtitle: `📍${t.location}`,
      cardDetailedText: [
        `**${t.fiapRespTitle}**`,
        ...(t.fiapRespList?.split("\n") || []),
        "",
        `**${t.fiapResultsTitle}**`,
        ...(t.fiapResultsList?.split("\n") || []),
      ],
      media: { type: "IMAGE" as const, source: { url: fiapLogo } }, // <-- Correção aqui
    },
  ];

  const isLightMode = document.body.classList.contains("light-mode");

  const theme = {
    accent: "var(--accent)",
    accentStrong: "var(--accent-strong)",
    cardBg: isLightMode ? "var(--bg-light)" : "var(--card-elev)",
    textMain: isLightMode ? "var(--text-dark)" : "var(--text-light)",
    textMuted: isLightMode
      ? "var(--text-muted-light)"
      : "var(--text-muted-dark)",
    border: isLightMode ? "var(--border-light)" : "var(--border-dark)",
  };

  return (
    <div id="experience" data-aos="fade-up">
      <div className="items-container">
        <h1>{t.careerHistory}</h1>

        <ChronoWrapper theme={theme}>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            cardHeight={250}
            theme={{
              primary: theme.accent,
              secondary: theme.cardBg,
              cardBgColor: theme.cardBg,
              textColor: theme.textMain, // <-- Correção aqui
              titleColor: theme.textMain,
              titleColorActive: theme.accentStrong,
            }}
            fontSizes={{
              cardSubtitle: "0.85rem",
              cardText: "0.9rem",
              cardTitle: "1.2rem",
              title: "1rem",
            }}
            scrollable={items.length > 3}
          />
        </ChronoWrapper>
      </div>
    </div>
  );
}

export default Timeline;
