// Portfolio.tsx
import "./Portfolio.css";
import PortfolioGrid from "./PortfolioGrid/PortfolioGrid";
import React from "react";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <header>
        <h1>{t("portfolio.header.title")}</h1>
        <p>{t("portfolio.header.subtitle")}</p>
      </header>
      <PortfolioGrid />
    </React.Fragment>
  );
};

export default Portfolio;
