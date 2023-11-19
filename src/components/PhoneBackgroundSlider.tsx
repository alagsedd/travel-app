import styles from "../styles/PhoneBackgroundSider.module.css";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import b1 from "../assets/Images/background-1.jpg";
import b2 from "../assets/Images/background-2.jpg";
import b3 from "../assets/Images/background-3.jpg";

const BackgroundSlider = () => {
  const sliders = [b1, b2, b3];

  return (
    <>
      <div className={styles.hereSection}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 4000 }}
        >
          {sliders.map((item, index) => (
            <SwiperSlide>
              <div
                className={styles.sliderBox}
                key={index}
                style={{ backgroundImage: `url(${item})` }}
              >
                <h1 className={styles.headerOne}>Explore the best with us</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BackgroundSlider;
