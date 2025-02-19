import { useEffect, useState } from "react";
import { book as BookData } from "../../../data/data";
import { useParams } from "react-router-dom";
import bookStatistika from "../../../assets/book__stastik.svg";
import BookStarsIcon from "../../../assets/book_start_reating.svg";
import { Button } from "../../../components/ui/button";
export const BookComment = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [input, setInput] = useState("");
  useEffect(() => {
    const book_data = BookData.find((item) => item.id === +id);
    if (book_data?.title) {
      setBook(book_data);
    }
  }, [id]);
  const submit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  return (
    <div className=" w-[70%]">
      <div className=" flex py-[28px] px-[24px] gap-[52px] items-center border rounded-[11px] border-[#aaa] ">
        <div className=" w-[300px] items-center ">
          <h3 className="font-bold text-[23px] leading-[87%] text-[#11142d] mb-[14px]">
            Рейтинг
          </h3>
          <p className="font-normal text-[13px] text-[#11142d] leading-[186%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
        </div>
        <div className=" flex gap-[80px] items-center">
          <div>
            <img src={bookStatistika} alt="" />
          </div>
          <div>
            <p className="font-blod text-[34px] text-[#11142d]">
              <b>{book.reting}</b>
            </p>
            <img src={BookStarsIcon} alt="" />
          </div>
        </div>
      </div>
      <div className=" border rounded-[11px] border-[#aaa] mt-[17px] py-[24px] px-[24px] items-start">
        <h3 className="mb-[32px] font-bold text-[23px] leading-[87%] text-[#11142d]">
          Фикрингиз
        </h3>
        <div className="items-start">
          <img src={BookStarsIcon} alt="" />
        </div>
        <form className="flex flex-col  items-start">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className=" border border-[ var(--stroke)] rounded-[11px] bg-[var(--gray)] mb-[24px] mt-[32px] w-full  px-[17px] py-[20px] h-[50px] focus:outline-none "
            placeholder="Изох"
          />
          <Button onClick={submit} variant={"comment_btn"}>
            Юбориш
          </Button>
        </form>
      </div>
    </div>
  );
};
