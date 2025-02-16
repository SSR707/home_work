import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import AudioBookImg1 from "../../assets/audio_book_img-1.svg";
import AudioBookImg2 from "../../assets/audio_book_img-2.svg";
import AudioBookImg3 from "../../assets/audio_book_img-3.svg";
import AudioBookImg4 from "../../assets/audio_book_img-4.svg";
import AudioBookImg5 from "../../assets/audio_book_img-5.svg";
import AudioBookIcon from "../../assets/new_book-icon-book.svg";
import AudioBookStar from "../../assets/new_book_icon-star.svg";
import { NewBookCard } from "../new_book/newBookCard";
const new_book = [
  {
    id: 1,
    title: "1984",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: AudioBookStar,
    reting: "4.7",
    book_icon: AudioBookIcon,
    imgs: AudioBookImg1,
  },
  {
    id: 2,
    title: "Rich dad poor dad",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: AudioBookStar,
    reting: "4.7",
    book_icon: AudioBookIcon,
    imgs: AudioBookImg2,
  },
  {
    id: 3,
    title: "Код 8",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: AudioBookStar,
    reting: "4.7",
    book_icon: AudioBookIcon,
    imgs: AudioBookImg3,
  },
  {
    id: 4,
    title: "Даниел КИЗ",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: AudioBookStar,
    reting: "4.7",
    book_icon: AudioBookIcon,
    imgs: AudioBookImg4,
  },
  {
    id: 5,
    title: "Бепарволикнинг",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: AudioBookStar,
    reting: "4.7",
    book_icon: AudioBookIcon,
    imgs: AudioBookImg5,
  },
  {
    id: 6,
    title: "1984",
    description: "SIYOSAT, FANTASTIKA",
    star_icon: AudioBookStar,
    reting: "4.7",
    book_icon: AudioBookIcon,
    imgs: AudioBookImg3,
  },
];

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
      {new_book.map((item) => (
        <SwiperSlide key={item.id}>
          <NewBookCard
            title={item.title}
            img={item.imgs}
            description={item.description}
            start={item.star_icon}
            audio={item.audio}
            reating={item.reting}
            bookIcon={item.book_icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
