// PortfolioGrid.tsx
import React, { useState, useEffect } from "react";
import "./PortfolioGrid.css";
import { useTranslation } from "react-i18next";
import mockupImg from "../../img/pexels-goumbik-574071.jpg";
interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  liveLink: string;
}

const PortfolioGrid: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      title: "Fundacja bądź w ruchu",
      imageUrl: mockupImg,
      description: t("portfolio.description.w_ruchu"),
      technologies: ["HTML", "JS", "CSS", "PHP", "MySQL", "TinyMCE"],
      liveLink: "https://www.fundacjabadzwruchu.pl",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleCloseModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="portfolio-container">
      <div className="grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card card-portfolio animate-on-scroll"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="card-image"
            />
            <div className="card-title">{project.title}</div>
            <div className="card-overlay">
              <button
                className="cta-button-dark"
                onClick={() => setActiveProject(project)}
              >
                {t("portfolio.grid.viewMore")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <p>
              <strong>{t("portfolio.grid.modal.technologies")}</strong>{" "}
              {activeProject.technologies.join(", ")}
            </p>
            <a
              href={activeProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("portfolio.grid.modal.liveLink")}
            </a>
            <button className="close-modal" onClick={handleCloseModal}>
              {t("portfolio.grid.modal.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
