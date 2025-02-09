// HowWeWork.tsx
import React from "react";
import "./HowWeWork.css";
import { FaSearch, FaMapSigns, FaCode, FaRocket } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HowWeWork: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="how-we-work">
      <h1 className="heading">{t("services.howWeWork.heading")}</h1>
      <div className="cards">
        <div className="card discovery">
          <div className="icon">
            <FaSearch />
          </div>
          <h2>{t("services.howWeWork.discovery.title")}</h2>
          <p>{t("services.howWeWork.discovery.description")}</p>
        </div>
        <div className="card planning">
          <div className="icon">
            <FaMapSigns />
          </div>
          <h2>{t("services.howWeWork.planning.title")}</h2>
          <p>{t("services.howWeWork.planning.description")}</p>
        </div>
        <div className="card development">
          <div className="icon">
            <FaCode />
          </div>
          <h2>{t("services.howWeWork.development.title")}</h2>
          <p>{t("services.howWeWork.development.description")}</p>
        </div>
        <div className="card testing">
          <div className="icon">
            <FaRocket />
          </div>
          <h2>{t("services.howWeWork.launchSupport.title")}</h2>
          <p>{t("services.howWeWork.launchSupport.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
