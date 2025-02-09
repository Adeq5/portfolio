// Contact.tsx
import ContactForm from "./ContactForm/ContactForm";
import "./Contact.css";
import { useEffect } from "react";
import CtaContact from "./CtaContact/CtaContact";
import { FAQ } from "./FAQ/Faq";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t("contact.faq.q1"),
      answer: t("contact.faq.a1"),
    },
    {
      question: t("contact.faq.q2"),
      answer: t("contact.faq.a2"),
    },
    {
      question: t("contact.faq.q3"),
      answer: t("contact.faq.a3"),
    },
  ];

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
    <div>
      <section>
        <header>
          <h1>{t("contact.header.title")}</h1>
          <p>{t("contact.header.subtitle")}</p>
        </header>
      </section>

      <section className="contact-content">
        <div className="form-header-container animate-on-scroll">
          <div>
            <h2>
              {t("contact.formSection.heading")}
              <span className="mark">?</span>
            </h2>
            <h2>
              {t("contact.formSection.heading2")}
              <span className="mark">!</span>
            </h2>
            <div className="description-wrapper">
              <p>{t("contact.formSection.description")}</p>
              <p>
                {t("contact.formSection.emailInfo")}{" "}
                <a href={`mailto:${t("contact.formSection.email")}`}>
                  {t("contact.formSection.email")}
                </a>
              </p>
            </div>

            <h2>
              {t("contact.faqHeading")}
              <span className="mark">:</span>
            </h2>
            <FAQ items={faqItems} />
          </div>
        </div>
        <div className="form-container">
          <ContactForm />
        </div>
      </section>
      <CtaContact />
    </div>
  );
};

export default Contact;
