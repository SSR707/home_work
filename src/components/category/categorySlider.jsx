import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { CategoryCard } from "./categoryCard";

import rukunlarBg1 from "../../assets/rukunlar__bg-1.svg";
import rukunlarBg2 from "../../assets/rukunlar__bg-2.svg";
import rukunlarBg3 from "../../assets/rukunlar__bg-3.svg";
import rukunlarBg4 from "../../assets/rukunlar__bg-4.svg";
import rukunlarBg5 from "../../assets/rukunlar__bg-5.svg";
import rukunlarBg6 from "../../assets/rukunlar__bg-6.svg";

const card = [
  {
    id: 1,
    title: "Жахон адабиёти",
    imgs: rukunlarBg1,
  },
  {
    id: 2,
    title: "Узбек адабиёти",
    imgs: rukunlarBg2,
  },
  {
    id: 3,
    title: "Бизнес ва психология",
    imgs: rukunlarBg3,
  },
  {
    id: 4,
    title: "Болалар адабиёти ",
    imgs: rukunlarBg4,
  },
  {
    id: 5,
    title: "Детективлар",
    imgs: rukunlarBg5,
  },
  {
    id: 6,
    title: "Фантастика",
    imgs: rukunlarBg6,
  },
  {
    id: 7,
    title: "Жахон адабиёти",
    imgs: rukunlarBg5,
  },
];

export const CategorySlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        centeredSlides={true}
        navigation={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {card.map((item) => (
          <SwiperSlide key={item.id}>
            <CategoryCard title={item.title} img={item.imgs} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
