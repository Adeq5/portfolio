// CtaContact.tsx
import "./CtaContact.css";
import { FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CtaContact = () => {
  const { t } = useTranslation();

  return (
    <div className="call-to-action-dark animate-on-scroll">
      <h2 className="cta-headline-dark">{t("contact.cta.title")}</h2>
      <button className="cta-button-dark">
        {t("contact.cta.button")} <FaPhone className="phone-icon" />
      </button>
    </div>
  );
};

export default CtaContact;
