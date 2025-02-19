export const SmillerBooks = ({
  id,
  imgs,
  title,
  description,
  reting,
  star_icon,
  comments,
}) => {
  return (
    <>
      <div className="w-[139px] h-[196px]">
        <img src={imgs} alt="" className="w-full h-full object-cover" />
      </div>
      <div className=" pt-3 flex flex-col gap-[10px]">
        <h2 className="font-bold text-[18px] text-[#11142d]">{title}</h2>
        <p className="font-normal text-[14px] text-[var(--primary)]">
          {Array.isArray(description) ? description?.join(", ") : description}
        </p>
        <div className="flex gap-[13px]   items-center">
          <img src={star_icon} alt="" />
          <p className="font-bold text-[18px] text-[#ff754c]">{reting}</p>
          <p className="font-medium text-[16px] text-[#aaa]">
            {comments} фиклар
          </p>
        </div>
      </div>
    </>
  );
};
