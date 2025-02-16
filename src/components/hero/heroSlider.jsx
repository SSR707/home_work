import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HeroCard } from "./heroCard";
import cardBook1 from "../../assets/hero__card_book-1.svg";
import cardBook2 from "../../assets/hero__card_book-2.svg";
import cardBook3 from "../../assets/hero__card_book-3.svg";

const card = [
  {
    id: 1,
    title: "1986",
    imgs: cardBook1,
  },
  {
    id: 2,
    title: "code 8",
    imgs: cardBook2,
  },
  {
    id: 3,
    title: "Rich dad poor dad",
    imgs: cardBook3,
  },
  {
    id: 4,
    title: "1986",
    imgs: cardBook1,
  },
  {
    id: 5,
    title: "code 8",
    imgs: cardBook2,
  },
  {
    id: 6,
    title: "Rich dad poor dad",
    imgs: cardBook3,
  },
];

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
        {card.map((itme) => (
          <SwiperSlide key={itme.id}>
            <HeroCard title={itme.title} url={itme.imgs} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
