import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HeroCard } from "./heroCard";

import { Link } from "react-router-dom";
import { HeroBookCard } from "../../../../data/data";

export const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {HeroBookCard.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/book/${item.id}`}>
              <HeroCard title={item.title} url={item.imgs} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
