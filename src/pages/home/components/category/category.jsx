import { CategorySlider } from "./categorySlider";

export const Category = () => {
  return (
    <section className="pt-[40px] ">
      <div className="container">
        <div className="">
          <h2 className=" font-semibold text-[32px] leading-[125%] mb-[32px] text-[#000]">
            Рукнлар
          </h2>
          <CategorySlider />
        </div>
      </div>
    </section>
  );
};
