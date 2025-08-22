import React from "react";
import "./Slide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          loop={true}
          pagination={false}
          slidesPerView={slidesToShow}
          slidesPerGroup={arrowsScroll}
          breakpoints={{
            640: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: slidesToShow, slidesPerGroup: arrowsScroll }
          }}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
