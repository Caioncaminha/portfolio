import React, { useState, useMemo } from "react";
import { useTranslation } from "../hooks/useTranslation";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Carousel } from "react-responsive-carousel";
import LaunchIcon from "@mui/icons-material/Launch";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "../assets/styles/Project.scss";

interface ProjectData {
  id: number;
  titleKey: string;
  shortDescKey: string;
  longDescKey: string;
  imgUrlsKey: string;
  repoUrlKey: string;
  stackKey: string;
}

const projectData: ProjectData[] = [
  {
    id: 1,
    titleKey: "project1Title",
    shortDescKey: "project1ShortDesc",
    longDescKey: "project1LongDesc",
    imgUrlsKey: "project1ImgUrls",
    repoUrlKey: "project1RepoUrl",
    stackKey: "project1Stack",
  },
  {
    id: 2,
    titleKey: "project2Title",
    shortDescKey: "project2ShortDesc",
    longDescKey: "project2LongDesc",
    imgUrlsKey: "project2ImgUrls",
    repoUrlKey: "project2RepoUrl",
    stackKey: "project2Stack",
  },
  {
    id: 3,
    titleKey: "project3Title",
    shortDescKey: "project3ShortDesc",
    longDescKey: "project3LongDesc",
    imgUrlsKey: "project3ImgUrls",
    repoUrlKey: "project3RepoUrl",
    stackKey: "project3Stack",
  },
];

function Project() {
  const { t } = useTranslation();

  const [openProject, setOpenProject] = useState<ProjectData | null>(null);

  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickOpen = (project: ProjectData) => {
    setOpenProject(project);
  };

  const handleClose = () => {
    setOpenProject(null);
  };

  const handleCodeClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDetailsClick = (e: React.MouseEvent, project: ProjectData) => {
    e.stopPropagation();
    handleClickOpen(project);
  };

  const lightboxSlides = useMemo(() => {
    if (!openProject) return [];
    return t[openProject.imgUrlsKey]
      .split(",")
      .map((url) => ({ src: url.trim() }));
  }, [openProject, t]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="projects-container" id="projects" data-aos="fade-up">
      <h1>{t.projectsTitle || "Personal Projects"}</h1>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => handleClickOpen(project)}
          >
            <div className="project-media">
              <div
                className="media-placeholder"
                style={{
                  backgroundImage: `url(${
                    t[project.imgUrlsKey]
                      ? t[project.imgUrlsKey].split(",")[0]
                      : ""
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="project-content">
              <h2>{t[project.titleKey]}</h2>
              <p>{t[project.shortDescKey]}</p>
              <div className="project-stack">
                {t[project.stackKey] &&
                  t[project.stackKey].split(",").map((tech, index) => (
                    <span key={index} className="tech-chip">
                      {tech.trim()}
                    </span>
                  ))}
              </div>
              <div className="project-card-actions">
                <Button
                  variant="contained"
                  endIcon={<LaunchIcon />}
                  onClick={(e) => handleDetailsClick(e, project)}
                >
                  {t.seeDetails || "See Details"}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  onClick={(e) => handleCodeClick(e, t[project.repoUrlKey])}
                >
                  {t.viewCode || "View Code"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        onClose={handleClose}
        open={openProject !== null}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{ fontWeight: "bold", fontSize: "1.5rem", padding: "20px 24px" }}
        >
          {openProject ? t[openProject.titleKey] : ""}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          {openProject && (
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              infiniteLoop
              autoPlay={false}
              className="carousel"
            >
              {t[openProject.imgUrlsKey].split(",").map((imgUrl, i) => (
                <img
                  key={i}
                  src={imgUrl.trim()}
                  alt={`${t[openProject.titleKey]} - Imagem ${i + 1}`}
                  className="carousel-image"
                  onClick={() => openLightbox(i)}
                />
              ))}
            </Carousel>
          )}

          <p style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
            {openProject ? t[openProject.longDescKey] : ""}
          </p>
        </DialogContent>

        <DialogActions sx={{ padding: "12px 24px" }}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href={openProject ? t[openProject.repoUrlKey] : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-view-code-button"
          >
            {t.viewCode || "View Code"}
          </Button>
        </DialogActions>
      </Dialog>
      <Lightbox
        open={isLightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentImageIndex}
        plugins={[Thumbnails, Zoom]}
        styles={{
          container: { backgroundColor: "rgba(12, 6, 32, 0.9)" },
        }}
      />
    </div>
  );
}

export default Project;
