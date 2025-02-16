export const InfoCard = ({ url, title, text }) => {
  return (
    <>
      <div className="w-[50px] h-[50px] flex-shrink-0">
        <img src={url} alt="logo" />
      </div>
      <div className="">
        <h3 className="font-bold text-[17px] leading-[120%] mb-[7px] text-[#11142d]">
          {title}
        </h3>
        <p className="font-normal text-[11px] text-[#aaa]">{text}</p>
      </div>
    </>
  );
};
