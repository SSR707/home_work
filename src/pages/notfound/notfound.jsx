import booNotFound from "../../assets/not-found-book.svg";

export const NotFound = () => {
  return (
    <div className=" flex flex-col items-center py-[100px]">
      <img src={booNotFound} alt="" />
      <h1 className="text-4xl text-bleck-500 mt-[25px] font-normal text-[16px] leading-[143%] text-center max-w-[240px]">
        Сизнинг сўровингиз бўйича хечнарса топилмади!
      </h1>
    </div>
  );
};
