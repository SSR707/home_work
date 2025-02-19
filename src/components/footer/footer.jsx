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
      <nav className="bg-[#eef4ff]">
        <div className="container">
          <div className=" flex gap-[144px] pt-[31px] pb-[61px] ">
            <ul className="">
              <li className="mb-[25px] last:mb-0">
                <h3 className=" font-bold text-[18px] text-[#11142d]">
                  Платформа хақида
                </h3>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className=" font-normal text-[16px] text-[#11142d]" href="">
                  Liber ўзи нима?
                </a>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[16px] text-[#11142d]" href="">
                  Фойдаланиш шартлари
                </a>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[16px] text-[#11142d]" href="">
                  Ёрдам
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="mb-[25px] last:mb-0">
                <h3 className="font-bold text-[18px] text-[#11142d]">
                  Обуна хақида
                </h3>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[16px] text-[#11142d]" href="">
                  Обуна бўлиш
                </a>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[16px] text-[#11142d]" href="">
                  Қандай тўлаш
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="mb-[25px] last:mb-0">
                <h3 className="font-bold text-[18px] text-[#11142d]">
                  Китоблар
                </h3>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[16px] text-[#11142d]" href="">
                  Аудио китоблар
                </a>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[16px] text-[#11142d]" href="">
                  Электрон китоблар
                </a>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[16px] text-[#11142d]" href="">
                  Китоблар
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="mb-[25px] last:mb-0">
                <h3 className="font-bold text-[18px] text-[#11142d]">
                  Мобил илова
                </h3>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[15px] text-[#11142d]" href="">
                  <img src={FooterGoogle} alt="" />
                </a>
              </li>
              <li className="mb-[25px] last:mb-0">
                <a className="font-normal text-[15px] text-[#11142d]" href="">
                  <img src={FooterAppStore} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className=" bg-[#10182c] pt-[12px] pb-[20px] ">
        <div className="container">
          <div className="">
            <ul className=" flex gap-[131px]">
              <li>
                <h3 className=" font-light text-[14px] leading-[114%] text-[white] text-start">
                  Ижтимоий тармоқлар
                </h3>
                <div className="flex items-center gap-[24px] text-start mt-[12px]">
                  <img src={Facebook} alt="" />
                  <img src={Youtube} alt="" />
                  <img src={TikTok} alt="" />
                  <img src={Telegarm} alt="" />
                  <img src={Instagram} alt="" />
                </div>
              </li>
              <li>
                <h3 className="font-light text-[14px] leading-[114%] text-[white] text-start">
                  Боғланиш
                </h3>
                <div className=" flex gap-[23px]" id="contact">
                  <p className=" font-light text-[16px] leading-[100%] text-[white] mt-[11px]">
                    +998 90 253 77 53
                  </p>
                  <p className="font-light text-[16px] leading-[100%] text-[white] mt-[11px]">
                    support@liber.uz
                  </p>
                </div>
              </li>
              <li id="bizhaqimizda">
                <h3 className="font-light text-[14px] leading-[114%] text-[white] text-start">
                  Биз қабул қиламиз
                </h3>
                <div className=" flex items-center justify-start mt-[9px] gap-[8px]">
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
