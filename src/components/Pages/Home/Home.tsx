import "./Home.css";
import React from "react";
import Reviews from "./Reviews/Reviews";
import CallToAction from "../CallToAction/CallToAction";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import mockupImg from "../../img/mockup.png";
import { Link } from "react-router";
const Home = () => {
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
    <React.Fragment>
      <main>
        <section className="home-header-container">
          <div className="animate-on-scroll">
            <div className="left">
              <h1>
                {t("home.header.title")}
                <span className="mark">Puentech</span>.
              </h1>
              <p>{t("home.header.text")}</p>
              <div className="buttons-container">
                <Link to="/portfolio" className="cta-button">
                  {t("home.header.button")}
                </Link>
              </div>
            </div>
            <img src={mockupImg} alt="mockup" className="mockup-image" />
          </div>
        </section>
        <section className="why-us-container">
          <div className="why-us">
            <h2 className="animate-on-scroll">{t("home.whyUs.title")}</h2>
            <p>{t("home.whyUs.text")}</p>
            <ul>
              <li className="animate-on-scroll">
                <b>{t("home.whyUs.customSolutions")}</b>
                {t("home.whyUs.customSolutions_text")}
              </li>
              <li className="animate-on-scroll">
                <b>{t("home.whyUs.clientCentric")}</b>
                {t("home.whyUs.clientCentric_text")}
              </li>
              <li className="animate-on-scroll">
                <b>{t("home.whyUs.accessibleSupport")}</b>
                {t("home.whyUs.accessibleSupport_text")}
              </li>
            </ul>
            <Link to="/contact" className="btn">
              {t("home.whyUs.button")}
            </Link>
          </div>
          <div className="reviews-container animate-on-scroll">
            <Reviews />
          </div>
        </section>
        <div className="arrow-container"></div>
        <header className="home-header">
          <h1 className="animate-on-scroll">{t("home.secondHeader.title")}</h1>
          <button className="btn animate-on-scroll">
            {t("home.secondHeader.button")}
          </button>
        </header>
        <section className="skill-container">
          <div>
            <h3 className="animate-on-scroll">{t("home.services.title")}</h3>
            <hr className="skill-hr"></hr>
          </div>
          <div className="cards animate-on-scroll">
            <div className="card web-development">
              <i className="fas fa-code"></i>
              <h2>{t("home.services.webDevelopment.title")}</h2>
              <p>{t("home.services.webDevelopment.text")}</p>
            </div>
            <div className="card backend-development">
              <i className="fas fa-server"></i>
              <h2>{t("home.services.backendDevelopment.title")}</h2>
              <p>{t("home.services.backendDevelopment.text")}</p>
            </div>
            <div className="card frontend-design">
              <i className="fas fa-paint-brush"></i>
              <h2>{t("home.services.frontendDesign.title")}</h2>
              <p>{t("home.services.frontendDesign.text")}</p>
            </div>
            <div className="card custom-software">
              <i className="fas fa-cogs"></i>
              <h2>{t("home.services.customSoftware.title")}</h2>
              <p>{t("home.services.customSoftware.text")}</p>
            </div>
          </div>
          <Link to="/services" className="btn">
            {t("home.services.button")}
          </Link>
        </section>
        <CallToAction link="/contact" />
      </main>
    </React.Fragment>
  );
};

export default Home;
