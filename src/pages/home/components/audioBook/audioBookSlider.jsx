import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { book } from "../../../../data/data";
import { NewBookCard } from "../new_book/newBookCard";
import { Link } from "react-router-dom";

export const AudioBookSlider = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={15}
      navigation={{
        clickable: true,
      }}
      loop={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {book
        .filter((item) => item.category === "audio")
        .map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/book/${item.id}`}>
              <NewBookCard
                title={item.title}
                img={item.imgs}
                description={item.description}
                start={item.star_icon}
                audio={item.audio}
                reating={item.reting}
                bookIcon={item.book_icon}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
