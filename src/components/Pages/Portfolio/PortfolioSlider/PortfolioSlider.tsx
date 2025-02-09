import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import styles from "./PortfolioSlider.module.css";

const PortfolioSlider = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Scrollbar]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <div className={styles.slideText}>
              <h2>Slide 1</h2>
              <p>Description for Slide 1</p>
            </div>
            <div className={styles.slideImage}>
              <img
                src="src/components/img/pexels-goumbik-574071.jpg"
                alt="Slide 1"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <div className={styles.slideText}>
              <h2>Slide 2</h2>
              <p>Description for Slide 2</p>
            </div>
            <div className={styles.slideImage}>
              <img
                src="src/components/img/pexels-goumbik-574071.jpg"
                alt="Slide 2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <div className={styles.slideText}>
              <h2>Slide 2</h2>
              <p>Description for Slide 2</p>
            </div>
            <div className={styles.slideImage}>
              <img
                src="src/components/img/e0250b18ce0d216b749c4d41021b333b.jpg"
                alt="Slide 2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <div className={styles.slideText}>
              <h2>Slide 2</h2>
              <p>Description for Slide 2</p>
            </div>
            <div className={styles.slideImage}>
              <img
                src="src/components/img/pexels-goumbik-574071.jpg"
                alt="Slide 2"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
