import heroBtnIcon from "../../../../assets/hero__btn-icon.svg";
import bgImg from "../../../../assets/hero__bg.svg";
import CardBgImg from "../../../../assets/hero__img.svg";
import { HeroSlider } from "./heroSlider";
import "./slider.css";
import { Button } from "../../../../components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-[16px]">
      <div className="container">
        <div className=" flex gap-[24px]">
          <div
            className=" flex bg-[var(--primary-soft)] w-[1005px] rounded-[12px] pt-[32px] pb-[16px]  bg-no-repeat bg-left-bottom"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className=" w-[30%]">
              <h2 className=" font-bold text-[24px] text-[ var(--text)] ml-[32px]">
                Кўп ўқилаётганлар
              </h2>
            </div>
            <div className="w-[70%]">
              <HeroSlider />
            </div>
          </div>
          <div
            className=" bg-[#3f51b5] bg-no-repeat bg-cover w-[261px] rounded-[12px] text-center"
            style={{ backgroundImage: `url(${CardBgImg})` }}
          >
            <h3 className=" font-bold text-[24px] leading-[133%] text-[var(--white)] max-w-[199px] mx-auto mt-[32px] mb-[20px] text-start">
              Китоб ўқишни ёқтирасизми?
            </h3>
            <p className=" font-normal  text-[18px] leading-[133%] mx-auto max-w-[215px] text-start text-[var(--white)]">
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <Button leftIcon={heroBtnIcon} variant={"hero"}>
              Обуна бўлиш
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
