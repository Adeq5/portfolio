// Services.tsx
import CallToAction from "./CallToAction/CallToAction";
import HowWeWork from "./HowWeWork/HowWeWork";
import "./Services.css";
import ServiceCarousel from "./ServicesCarusel/ServiceCarousel";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
const Services = () => {
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <h1>{t("services.header.title")}</h1>
        <p>{t("services.header.subtitle")}</p>
        <Link to="/contact" className="btn">
          {t("services.header.button")}
        </Link>
      </header>
      <section>
        <ServiceCarousel />
      </section>
      <section className="animate-on-scroll">
        <HowWeWork />
      </section>
      <section>
        <CallToAction link="/contact " />
      </section>
    </div>
  );
};

export default Services;
