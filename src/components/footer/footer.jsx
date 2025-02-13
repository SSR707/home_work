import facebookIcon from "../../utils/imgs/footer__facebooke.svg";
import youtuberIcon from "../../utils/imgs/footer__youtube.svg";
import twiterIcon from "../../utils/imgs/footer__twiter.svg";
import picsartIcon from "../../utils/imgs/footer__picsart.svg";
import instagramIcon from "../../utils/imgs/footer__instagram.svg";
import footer__img from "../../utils/imgs/footer__img.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer__desctop">
        <div className="container">
          <div className="footer__desctop">
            <div className="footer__contanct_desctop">
              <div className="footer__img_desctop">
                <img src={footer__img} alt="" />
              </div>
              <div className="footer__icon_desctop">
                <a href="">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="">
                  <img src={youtuberIcon} alt="" />
                </a>
                <a href="">
                  <img src={twiterIcon} alt="" />
                </a>
                <a href="">
                  <img src={picsartIcon} alt="" />
                </a>
                <a href="">
                  <img src={instagramIcon} alt="" />
                </a>
              </div>
            </div>
            <div className="footer__info_desctop">
              <ul className="footer__list_page-desctop">
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Home
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Pricing
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Product
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    About
                  </a>
                </li>
              </ul>
              <ul className="footer__list_contact">
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Community
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__go-desctop">
              <div className="footer__sub_go-desctop"> 
                <input
                  className="footer__input"
                  type="text"
                  placeholder="Updates in your inbox…"
                />
                <button className="footer__btn">Go</button>
              </div>
              <p className="copyright-desctop">
                Copyright 2020. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer__mobile">
        <div className="container">
          <div className="footer__block_mobile">
            <div className="footer__go">
              <input
                className="footer__input"
                type="text"
                placeholder="Updates in your inbox…"
              />
              <button className="footer__btn">Go</button>
            </div>
            <div className="footer__info">
              <ul className="footer__list_page">
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Home
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Pricing
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Product
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    About
                  </a>
                </li>
              </ul>
              <ul className="footer__list_contact">
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Community
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__content">
              <div className="footer__icon">
                <a href="">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="">
                  <img src={youtuberIcon} alt="" />
                </a>
                <a href="">
                  <img src={twiterIcon} alt="" />
                </a>
                <a href="">
                  <img src={picsartIcon} alt="" />
                </a>
                <a href="">
                  <img src={instagramIcon} alt="" />
                </a>
              </div>
              <div className="footer__img">
                <img src={footer__img} alt="" />
              </div>
            </div>
            <p className="copyright">Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};
