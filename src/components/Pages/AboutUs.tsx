import "./AboutUs.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaPhp,
} from "react-icons/fa";
import { SiTypescript, SiMariadb } from "react-icons/si";
import { DiMysql, DiMongodb } from "react-icons/di";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

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

  return (
    <div className="aboutus-container">
      <section className="section">
        <h1 className="aboutus-heading animate-on-scroll">
          {t("about.whoWeAre")}
        </h1>
        <p className="aboutus-paragraph animate-on-scroll">
          {t("about.description")}
        </p>
        <h2 className="aboutus-subheading animate-on-scroll">
          {t("about.frontendHeading")}
        </h2>
        <div className="aboutus-tech-stack animate-on-scroll">
          <span className="tech-item react" data-name="React">
            <FaReact />
          </span>
          <span className="tech-item html" data-name="HTML 5">
            <FaHtml5 />
          </span>
          <span className="tech-item css" data-name="CSS 3">
            <FaCss3Alt />
          </span>
          <span className="tech-item bootstrap" data-name="BOOT STRAP">
            <FaBootstrap />
          </span>
          <span className="tech-item js" data-name="Java Script">
            <FaJsSquare />
          </span>
          <span className="tech-item typescript" data-name="Type Script">
            <SiTypescript />
          </span>
        </div>
        <h2 className="aboutus-subheading animate-on-scroll">
          {t("about.backendHeading")}
        </h2>
        <div className="aboutus-tech-stack animate-on-scroll">
          <span className="tech-item php" data-name="PHP">
            <FaPhp />
          </span>
          <span className="tech-item mysql" data-name="MySQL">
            <DiMysql />
          </span>
          <span className="tech-item mongodb" data-name="Mongo DB">
            <DiMongodb />
          </span>
          <span className="tech-item mariadb" data-name="Maria DB">
            <SiMariadb />
          </span>
        </div>
      </section>

      <header>
        <h1>{t("about.ourExperienceHeading")}</h1>
        <p>{t("about.ourExperienceDescription")}</p>
      </header>
      <section className="section section-dark animate-on-scroll">
        <h2>{t("about.futureTogetherHeading")}</h2>
        <p className="aboutus-paragraph">
          {t("about.futureTogetherDescription")}
        </p>
      </section>
      <section className="section">
        <h2 className="aboutus-subheading animate-on-scroll">
          {t("about.whyChooseHeading")}
        </h2>
        <p className="aboutus-paragraph animate-on-scroll">
          <strong>{t("about.expertise")}</strong>
          {t("about.expertise2")}
        </p>
        <p className="aboutus-paragraph animate-on-scroll">
          <strong>{t("about.continuousGrowth")}</strong>
          {t("about.continuousGrowth2")}
        </p>
        <p className="aboutus-paragraph animate-on-scroll">
          <strong>{t("about.clientCentric")}</strong>
          {t("about.clientCentric2")}
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
