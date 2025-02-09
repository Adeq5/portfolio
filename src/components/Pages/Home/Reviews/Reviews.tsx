// Reviews.tsx
import React from "react";
import styles from "./Reviews.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { EffectCards, Autoplay } from "swiper/modules";
// Import ikon z react-icons
import { FaStar, FaUserCircle } from "react-icons/fa";
// Import hooka useTranslation
import { useTranslation } from "react-i18next";

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  // Przygotowanie danych dla opinii – pobieramy tłumaczenia dla poszczególnych slajdów
  const reviewsData = [
    {
      author: t("home.reviews.slide1.author"),
      text: t("home.reviews.slide1.text"),
    },
    {
      author: t("home.reviews.slide2.author"),
      text: t("home.reviews.slide2.text"),
    },
    {
      author: t("home.reviews.slide3.author"),
      text: t("home.reviews.slide3.text"),
    },
    {
      author: t("home.reviews.slide4.author"),
      text: t("home.reviews.slide4.text"),
    },
  ];

  return (
    <div className={styles.reviewsWrapper}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className={styles.reviews}
        autoplay={{
          delay: 1500, // opóźnienie między slajdami (ms)
          disableOnInteraction: false, // autoplay kontynuuje po interakcji użytkownika
        }}
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index} className={styles.reviewsSwiperSlide}>
            <div className={styles.reviewContent}>
              <FaUserCircle className={styles.userIcon} />
              <h2>{review.author}</h2>
              <p className={styles.reviewText}>{review.text}</p>
              <div className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
