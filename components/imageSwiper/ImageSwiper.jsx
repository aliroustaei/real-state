import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Lazy, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//Styles
import styles from "./imageSwiper.module.css";

const ImageSwiper = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Lazy]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={styles.swiper}
      lazy={true}
    >
      {data.slice(0, 4).map((photo) => (
        <SwiperSlide key={photo.id} className={styles.swiperSlide}>
          <Image
            src={photo.url}
            alt=""
            width={800}
            height={500}
            blurDataURL={photo.url}
            placeholder="blur"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
