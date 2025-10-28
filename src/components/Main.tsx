import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import "../assets/styles/Main.scss";
import { useTranslation } from "../hooks/useTranslation";

function Main() {
  const { t, lang } = useTranslation();

  const cvPath =
    lang === "pt"
      ? "/curriculo_caio_nascimento_caminha.pdf"
      : "/en_curriculo_caio_nascimento_caminha.pdf";

  const downloadName =
    lang === "pt"
      ? "curriculo_caio_nascimento_caminha.pdf"
      : "en_curriculo_caio_nascimento_caminha.pdf";

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHpJqU7Xo3e3Q/profile-displayphoto-crop_800_800/B4DZmqWnxeJAAI-/0/1759499681255?e=1762992000&v=beta&t=Qfv2YIErvc2FGCQJAc2KZ_ri3qCeb7Kcc6y-39FSv-w"
            alt="Avatar"
            style={{ width: "180px", height: "180px" }}
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Caioncaminha"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/caionascimentocaminha/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Caio Caminha</h1>
          <p>{t.role}</p>
          <p style={{ fontSize: "1em" }}>📍 {t.location}</p>

          <Button
            variant="contained"
            href={cvPath}
            download={downloadName}
            startIcon={<DownloadIcon />}
            sx={{
              marginTop: "15px",
              fontWeight: "bold",
              backgroundColor: "#4915c0", // <-- Sua cor
              // Adiciona um efeito 'hover' para escurecer um pouco
              "&:hover": {
                backgroundColor: "#390ea0ff",
              },
            }}
          >
            {t.downloadCV || "Download CV"}
          </Button>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Caioncaminha"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/caionascimentocaminha/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
