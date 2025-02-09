import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { Squash as Hamburger } from "hamburger-react";
import LanguageButton from "./LanguageButton";
import { useTranslation } from "react-i18next";
const Header: React.FC = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string): boolean => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getActiveLinkText = () => {
    if (isActive("/")) return t("header.home");
    if (isActive("/about")) return t("header.about");
    if (isActive("/contact")) return t("header.contact");
    if (isActive("/portfolio")) return t("header.portfolio");
    if (isActive("/services")) return t("header.services");
    return "";
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="hamburger-container">
          {getActiveLinkText() && (
            <span className="active-indicator">
              <Link to={location.pathname} className="active-secondary">
                {getActiveLinkText()}
              </Link>
            </span>
          )}
          <button className="hamburger" onClick={toggleMenu}>
            <Hamburger></Hamburger>
          </button>
        </div>

        {/* Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            {t("header.home")}
          </Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            {t("header.about")}
          </Link>
          <Link
            to="/services"
            className={isActive("/services") ? "active" : ""}
          >
            {t("header.services")}
          </Link>
          <Link
            to="/portfolio"
            className={isActive("/portfolio") ? "active" : ""}
          >
            {t("header.portfolio")}
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            {t("header.contact")}
          </Link>
        </div>
        <LanguageButton></LanguageButton>
      </div>
    </nav>
  );
};

export default Header;
