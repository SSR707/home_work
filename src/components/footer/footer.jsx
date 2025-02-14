import FooterGoogle from "../../assets/footer__google-icon.svg";
import FooterAppStore from "../../assets/footer__appstore-icon.svg";
import Telegarm from "../../assets/telegram.svg";
import TikTok from "../../assets/tiktok.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import Humo from "../../assets/humo.svg";
import Uzcard from "../../assets/uzcard.svg";
import Payme from "../../assets/payme.svg";

export const Footer = () => {
  return (
    <>
      <nav className="nav_block-1">
        <div className="container">
          <div className="footer__block-1">
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">Платформа хақида</h3>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Liber ўзи нима?
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Фойдаланиш шартлари
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Ёрдам
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">Обуна хақида</h3>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Обуна бўлиш
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Қандай тўлаш
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">Китоблар</h3>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Аудио китоблар
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Электрон китоблар
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Китоблар
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">Мобил илова</h3>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  <img src={FooterGoogle} alt="" />
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  <img src={FooterAppStore} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="nav_block-2">
        <div className="container">
          <div className="footer__block-2">
            <ul className="footer__list-2">
              <li>
                <h3 className="footer_sub_title">Ижтимоий тармоқлар</h3>
                <div className="footer__img">
                  <img src={Facebook} alt="" />
                  <img src={Youtube} alt="" />
                  <img src={TikTok} alt="" />
                  <img src={Telegarm} alt="" />
                  <img src={Instagram} alt="" />
                </div>
              </li>
              <li>
                <h3 className="footer_sub_title">Боғланиш</h3>
                <div className="footer__contact">
                  <p className="footer__sub_contact">+998 90 253 77 53</p>
                  <p className="footer__sub_contact">support@liber.uz</p>
                </div>
              </li>
              <li>
                <h3 className="footer_sub_title">Биз қабул қиламиз</h3>
                <div className="footer__card_img">
                  <img src={Uzcard} alt="" />
                  <img src={Humo} alt="" />
                  <img src={Payme} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
