// ServiceCarousel.tsx
import React from "react";
import styles from "./ServiceCarousel.module.css";
import "./ServiceCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const ServiceCarousel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "50px 0" }}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.serviceCard}>
            <i className="fas fa-code"></i>
            <h3>{t("services.carousel.slide1.title")}</h3>
            <p>{t("services.carousel.slide1.description")}</p>
            <div className={styles.keyFeatures}>
              <h4>{t("services.carousel.slide1.keyFeatures.heading")}</h4>
              <ul>
                <li>{t("services.carousel.slide1.keyFeatures.feature1")}</li>
                <li>{t("services.carousel.slide1.keyFeatures.feature2")}</li>
                <li>{t("services.carousel.slide1.keyFeatures.feature3")}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.serviceCard}>
            <i className="fas fa-server"></i>
            <h3>{t("services.carousel.slide2.title")}</h3>
            <p>{t("services.carousel.slide2.description")}</p>
            <div className={styles.keyFeatures}>
              <h4>{t("services.carousel.slide2.keyFeatures.heading")}</h4>
              <ul>
                <li>{t("services.carousel.slide2.keyFeatures.feature1")}</li>
                <li>{t("services.carousel.slide2.keyFeatures.feature2")}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.serviceCard}>
            <i className="fas fa-paint-brush"></i>
            <h3>{t("services.carousel.slide3.title")}</h3>
            <p>{t("services.carousel.slide3.description")}</p>
            <div className={styles.keyFeatures}>
              <h4>{t("services.carousel.slide3.keyFeatures.heading")}</h4>
              <ul>
                <li>{t("services.carousel.slide3.keyFeatures.feature1")}</li>
                <li>{t("services.carousel.slide3.keyFeatures.feature2")}</li>
                <li>{t("services.carousel.slide3.keyFeatures.feature3")}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.serviceCard}>
            <i className="fas fa-cogs"></i>
            <h3>{t("services.carousel.slide4.title")}</h3>
            <p>{t("services.carousel.slide4.description")}</p>
            <div className={styles.keyFeatures}>
              <h4>{t("services.carousel.slide4.keyFeatures.heading")}</h4>
              <ul>
                <li>{t("services.carousel.slide4.keyFeatures.feature1")}</li>
                <li>{t("services.carousel.slide4.keyFeatures.feature2")}</li>
                <li>{t("services.carousel.slide4.keyFeatures.feature3")}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
