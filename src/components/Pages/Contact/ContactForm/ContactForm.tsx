// ContactForm.tsx
import "./ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-form-container">
      <form method="post" action="">
        <div className="name-container">
          <div className="input-container half-width">
            <div className="entryarea">
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t("contact.form.name")}
                required
              />
              <div className="labelname">{t("contact.form.name")}</div>
            </div>
          </div>

          <div className="input-container half-width">
            <div className="entryarea">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder={t("contact.form.lastName")}
                required
              />
              <div className="labelname">{t("contact.form.lastName")}</div>
            </div>
          </div>
        </div>

        <div className="email-container">
          <div className="input-container">
            <div className="entryarea">
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t("contact.form.email")}
                required
              />
              <div className="labelname">{t("contact.form.email")}</div>
            </div>
          </div>

          <div className="input-container">
            <div className="entryarea">
              <textarea
                placeholder={t("contact.form.message")}
                required
              ></textarea>
              <div className="labelname">{t("contact.form.message")}</div>
            </div>
          </div>
        </div>
        <button type="submit">{t("contact.form.submit")}</button>
      </form>
    </div>
  );
};

export default ContactForm;
