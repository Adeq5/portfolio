import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
  };

  const buttonStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#333",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle: React.CSSProperties = {
    width: "80%",
    height: "80%",
    objectFit: "cover",
    borderRadius: "50%",
  };
  return (
    <button
      onClick={toggleLanguage}
      style={buttonStyle}
      className="language-button"
    >
      <img
        src={
          i18n.language === "en"
            ? "src/components/img/flags/britishFlag.png"
            : "src/components/img/flags/polishFlag.png"
        }
        alt={i18n.language === "en" ? "Flaga brytyjska" : "Flaga polska"}
        style={imageStyle}
      />
    </button>
  );
};

export default LanguageButton;
