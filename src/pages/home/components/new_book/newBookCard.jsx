export const NewBookCard = ({
  title,
  img,
  description,
  start,
  reating,
  audio,
  bookIcon,
}) => {
  return (
    <>
      <div className="">
        <img src={img} alt="" />
      </div>
      <h3 className=" font-bold text-[20px] text-[#11142d] mt-[18px]">
        {title}
      </h3>
      <p className="font-normal text-[14px] text-[#3f51b5] mt-[5px]">
        {description}
      </p>
      <div className=" flex  justify-between mt-[16px]">
        <div className=" flex items-center gap-[12px]">
          <img src={start} alt="start" />
          <p className=" flex font-bold text-[18px] text-[#ff7f4d] pt-[2px]">
            {reating}
          </p>
        </div>
        <div className=" flex gap-[18px] mr-3">
          <img src={audio} alt="" />
          <img src={bookIcon} alt="" />
        </div>
      </div>
    </>
  );
};
