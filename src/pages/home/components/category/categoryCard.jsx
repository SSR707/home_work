export const CategoryCard = ({ title, img }) => {
  return (
    <div
      className=" rounded-[14px] w-[200px] h-[150px] flex justify-start text-[18px] text-[#fff] items-end pb-[5px] pl-[16px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h2 className="">{title}</h2>
    </div>
  );
};
