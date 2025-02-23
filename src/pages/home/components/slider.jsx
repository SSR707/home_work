import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { data } from "../../../data/data";
import { RugCard } from "./card";
import "./slider.css";
import { Link } from "react-router-dom";

export const Slider = ({ skidka }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={100}
      loop={true}
      navigation={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper"
      style={{ height: "595px", paddingTop: "10px" }}
    >
      {data
        .filter((item) => (skidka ? item.skidka : item.price !== null))
        .map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
              <RugCard
                title={item.title}
                img={item.imgs}
                size={item.size}
                origin={item.origin}
                otziv={item.otziv}
                price={item.price}
                rs={item.rs}
                old_price={item.old_price}
                new_price={item.new_price}
                skidka={item.skidka}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
