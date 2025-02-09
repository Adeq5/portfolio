// CallToAction.tsx
import React from "react";
import "./CallToAction.css";
import { useTranslation } from "react-i18next";

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="call-to-action">
      <h2 className="cta-headline">{t("services.callToAction.headline")}</h2>
      <button className="cta-button">
        {t("services.callToAction.button")}
      </button>
    </div>
  );
};

export default CallToAction;
