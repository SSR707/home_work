import heroImg1 from '../../utils/imgs/hero__mobile-img.svg'
import heroImg2 from '../../utils/imgs/hero__desctop-img.svg'
export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__block">
        <div className="hero__img-1">
            <img src={heroImg1} alt="" />
          </div>
          <div className="hero__content">
            <h1 className="hero__title">
              Bring everyone together to build better products.
            </h1>
            <p className="hero__text">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="hero__btn">Get Started</button>
          </div>
          <div className="hero__img-2">
            <img src={heroImg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
