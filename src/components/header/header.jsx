import headerImg from "../../utils/imgs/header__img.svg";
import headerIcon from "../../utils/imgs/header__icon.svg";

export const Header = () => {
  return (
    <header className="main__header">
      <div className="container">
        <div className="main_header__block">
          <div className="main_header_img">
            <img src={headerImg} alt="" />
          </div>
          <ul className="main_header__list">
            <li className="main_header__item">
              <a className="main_header__link" href="#">
                Pricing
              </a>
            </li>
            <li className="main_header__item">
              <a className="main_header__link" href="#">
                Product
              </a>
            </li>
            <li className="main_header__item">
              <a className="main_header__link" href="#">
                About Us
              </a>
            </li>
            <li className="main_header__item">
              <a className="main_header__link" href="#">
                Careers
              </a>
            </li>
            <li className="main_header__item">
              <a className="main_header__link" href="#">
                Community
              </a>
            </li>
          </ul>
          <button className="main_header__menu">
            <img src={headerIcon} alt="" />
          </button>
          <button className="main_header__btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};
