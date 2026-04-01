import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { sliderData } from "../data/sliderData";

const Slider = (props) => {
  return (
    <section id="sliderType">
      <h2 className="blind">{props.title}</h2>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="dessert_hero"
      >
        {sliderData.map((menu) => (
          <SwiperSlide key={menu.id}>
            <div className={`slider_img ${menu.className}`}>
              <div className="desc container">
                <span>{menu.subtitle}</span>
                <h3>{menu.title}</h3>
                <p>{menu.desc}</p>
                <div className="btn">
                  <a href="/">자세히 보기</a>
                  <a href="/" className="brown">
                    사이트 보기
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
