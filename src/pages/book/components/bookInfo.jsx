import { useEffect, useState } from "react";
import { book as BookData } from "../../../data/data";
import BookCommentIcon from "../../../assets/book_comment_icon.svg";
import BookStarsIcon from "../../../assets/book_start_reating.svg";
import BookSoldIcon from "../../../assets/book_button_sold.svg";
import { Button } from "../../../components/ui/button";
import BookIcon from "../../../assets/new_book-icon-book.svg";
import BookAudio from "../../../assets/new_book-icon-audio.svg";

export const BookInfo = ({ id }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    const book_data = BookData.find((item) => item.id === +id);
    if (book_data.title) {
      setBook(book_data);
    }
  }, [id]);
  return (
    <div className="flex gap-6 ">
      <div className=" w-[300px] h-[423px] ">
        <img src={book.imgs} alt="" className="w-full h-full object-cover" />
      </div>
      <div className=" w-[75%] pt-[12px]">
        <div className=" flex items-center gap-[96px] overflow-hidden justify-between ">
          <h2 className=" font-bold text-[30px] text-[#11142d] max-w-[398px] overflow-hidden">
            {book?.title}
          </h2>
          <div className=" flex gap-[32px] w-[52%] items-center">
            <div className=" flex gap-[18px]">
              <img src={book?.audio} alt="" />
              <img src={book?.book_icon} alt="" />
            </div>
            <div className="flex gap-[48px] items-center">
              <div className=" flex gap-[22px] items-center">
                <img src={BookStarsIcon} alt="" />
                <p className="font-bold text-2xl text-right">{book?.reting}</p>
              </div>
              <div className=" flex gap-[13px] items-center ">
                <img src={BookCommentIcon} alt="" />
                <p>{book?.comments} Фикрлар</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-normal text-[14px] text-[var(--primary)] mb-[16px]">
            {book.description}
          </h2>
          <p className=" text-normal text-[14px] text-[#11142d] leading-[171%] h-[144px]">
            {" "}
            {book.description_book}
          </p>
          <ul className=" flex gap-[69px] pb-[20px]  border-b-2 border-dashed border-[#aaa]">
            <li>
              <p className="mb-8px font-normal text-[14px] text-[#aaa]">
                Муаллиф
              </p>
              <h3 className=" font-semibold text-[18px] text-[ #11142d]">
                {book.author}
              </h3>
            </li>
            <li>
              <p className="mb-8px font-normal text-[14px] text-[#aaa]">
                Нашриёт
              </p>
              <h3 className=" font-semibold text-[18px] text-[ #11142d]">
                {book.publishing}
              </h3>
            </li>
            <li>
              <p className="mb-8px font-normal text-[14px] text-[#aaa]">Йил</p>
              <h3 className=" font-semibold text-[18px] text-[ #11142d]">
                {book.year?.split(",")[1]}
              </h3>
            </li>
          </ul>
          <div className=" flex gap-[16px] mt-[24px]">
            <Button leftIcon={BookSoldIcon} variant={"book_sold"}>
              Сотиб олиш - {book.price} 000 sum
            </Button>
            <Button leftIcon={BookAudio} variant={"book_audio"}>
              Аудио тинглаш - {(book.price - 10).toFixed(3)} sum
            </Button>
            <Button leftIcon={BookIcon} variant={"book_audio"}>
              Онлайн укиш - {(book.price - 20).toFixed(3)} sum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
