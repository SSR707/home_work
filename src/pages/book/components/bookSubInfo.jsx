import { useEffect, useState } from "react";
import { book as BookData } from "../../../data/data";
import { useParams } from "react-router-dom";
export const BookSubInfo = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    const book_data = BookData.find((item) => item.id === +id);
    if (book_data?.title) {
      setBook(book_data);
    }
  }, [id]);
  return (
    <ul className="w-[70%]">
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className="text-start w-[146px] ">Китоб номи</h3>
        <p>{book.title}</p>
      </li>
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className="text-start w-[146px] ">Муаллиф</h3>
        <p>{book.author}</p>
      </li>
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className=" text-start w-[146px]">ISBN</h3>
        <p>{book.ISBN}</p>
      </li>
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className=" text-start w-[146px]">Тил</h3>
        <p>{book.language}</p>
      </li>
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className="text-start w-[146px] ">Сахифалар</h3>
        <p>{book.pages}</p>
      </li>
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className=" text-start w-[146px]">Чоп этилган сана</h3>
        <p>{book.year}</p>
      </li>
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className=" text-start w-[146px]">Нашриёт</h3>
        <p>{book.publishing}</p>
      </li>
      <li className=" flex gap-[143px] items-center pl-[21px] py-[21px] border border-[var(--primary-soft)]">
        <h3 className=" text-start w-[146px]">Рукн</h3>
        <dir className="flex gap-[10px]">
          {book.description?.map((item, index) => (
            <p
              key={index}
              className="py-[6px] px-[8px] bg-[var(--primary-soft)] rounded-[11px] font-semibold text-[15px] leading-[120%] text-[var(--primary)]"
            >
              {item}
            </p>
          ))}
        </dir>
      </li>
    </ul>
  );
};
