import heroBtnIcon from "../../assets/hero__btn-icon.svg";
import { HeroSlider } from "../slider/slider";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__block">
          <div className="hero__content">
            <div className="hero__info">
              <h2 className="hero__title">Кўп ўқилаётганлар</h2>
            </div>
            <div className="hero__slaider">
              <HeroSlider/>
            </div>
          </div>
          <div className="hero__card">
            <h3 className="hero__card_title">Китоб ўқишни ёқтирасизми?</h3>
            <p className="hero__text">
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <button className="hero__btn">
              <img src={heroBtnIcon} alt="" />
              Обуна бўлиш
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
