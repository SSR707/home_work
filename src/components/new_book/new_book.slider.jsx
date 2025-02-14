import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import NewBookImg1 from "../../assets/new_book_img-1.svg";
import NewBookImg2 from "../../assets/new_book_img-2.svg";
import NewBookImg3 from "../../assets/new_book_img-3.svg";
import NewBookImg4 from "../../assets/new_book_img-4.svg";
import NewBookImg5 from "../../assets/new_book_img-5.svg";
import NewBookIcon from "../../assets/new_book-icon-book.svg";
import NewBookStar from "../../assets/new_book_icon-star.svg";
import NewBookAudio from "../../assets/new_book-icon-audio.svg";

import { NewBookCard } from "./new_book_card";
const new_book = [
  {
    id: 1,
    title: "1984",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: NewBookStar,
    reting: "4.7",
    book_icon: NewBookIcon,
    audio: NewBookAudio,
    imgs: NewBookImg1,
  },
  {
    id: 2,
    title: "Rich dad poor dad",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: NewBookStar,
    reting: "4.7",
    book_icon: NewBookIcon,
    audio: NewBookAudio,
    imgs: NewBookImg2,
  },
  {
    id: 3,
    title: "Код 8",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: NewBookStar,
    reting: "4.7",
    book_icon: NewBookIcon,
    audio: NewBookAudio,
    imgs: NewBookImg3,
  },
  {
    id: 4,
    title: "Даниел КИЗ",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: NewBookStar,
    reting: "4.7",
    book_icon: NewBookIcon,
    audio: NewBookAudio,
    imgs: NewBookImg4,
  },
  {
    id: 5,
    title: "Бепарволикнинг",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: NewBookStar,
    reting: "4.7",
    book_icon: NewBookIcon,
    imgs: NewBookImg5,
    audio: NewBookAudio,
  },
  {
    id: 6,
    title: "1984",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: NewBookStar,
    reting: "4.7",
    book_icon: NewBookIcon,
    audio: NewBookAudio,
    imgs: NewBookImg3,
  },
];

export const NewBookSlider = () => {
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
      {new_book.map((item) => (
        <SwiperSlide key={item.id}>
          <NewBookCard
            title={item.title}
            img={item.imgs}
            description={item.description}
            start={item.star_icon}
            reating={item.reting}
            audio={item.audio}
            bookIcon={item.book_icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
