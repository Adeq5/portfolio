// CallToAction.tsx
import React from "react";
import "./CallToAction.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface CallToActionProps {
  link?: string;
}
const CallToAction: React.FC<CallToActionProps> = ({ link }) => {
  const { t } = useTranslation();

  return (
    <div className="call-to-action">
      <h2 className="cta-headline">{t("services.callToAction.headline")}</h2>
      <Link to={link || "/"}>
        <button className="cta-button">
          {t("services.callToAction.button")}
        </button>
      </Link>
    </div>
  );
};

export default CallToAction;
