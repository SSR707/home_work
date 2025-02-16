import headerImg from "../../assets/header__img.svg";
import headerLen1 from "../../assets/header__lenguge-1.svg";
import headerBtnIcon from "../../assets/header__icon_btn.svg";
import headerSearchIcon from "../../assets/header__search-icon.svg";
import headerSelectIcon2 from "../../assets/header_select_icon.svg";
import headerSelectIcon1 from "../../assets/header__select-icon.svg";
import headerSelectIconUz from "../../assets/header__lenguge-1.svg";
import { Button } from "../ui/button";
export const Header = () => {
  return (
    <div className="container">
      <div className=" flex items-center gap-[64px] pb-[21px] ">
        <div className=" flex gap-[46px]">
          <div className="">
            <img src={headerImg} alt="" />
          </div>

          <div className=" flex items-center gap-[4px]">
            <div className="relative">
              <span className=" absolute left-6 top-1/2 transform -translate-y-1/2">
                <img src={headerSelectIcon1} alt="" />
              </span>
              <select
                className="py-[10px] pl-[60px] pr-[50px] border-2 border-[#e1e1e1] rounded-l-[14px] text-[17px] font-semibold text-[var(--primary)] appearance-none focus:outline-none"
                name="rukunlar"
              >
                <option value="apple">Рукнлар</option>
                <option value="uzbek">Uzbekistan</option>
              </select>
              <span className=" absolute right-3.5 top-1/2 transform -translate-y-1/2 ">
                <img src={headerSelectIcon2} alt="" />
              </span>
            </div>

            <div className=" flex relative">
              <input
                className=" py-[10px] pl-[29px] pr-[100px] w-[555px] border-2 border-[#e1e1e1] rounded-r-[14px] text-[17px] focus:outline-none "
                type="text"
                placeholder="Qidirish"
              />
              <button className=" absolute right-0 top-1/2 transform -translate-y-1/2 pl-[19px] pr-[27px] py-[10px] border-l-2 border-[#e1e1e1] ">
                <img src={headerSearchIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-[20px]">
          <div className=" flex relative ">
            <span className=" absolute left-3 top-1/2 transform -translate-y-1/2">
              <img src={headerSelectIconUz} alt="" />
            </span>
            <select
              className="py-[10px] pl-[45px] pr-[40px] text-[20px] font-semibold text-[var(--primary)] bg-[var(--primary-soft)] rounded-[14px] appearance-none focus:outline-none"
              name="til"
            >
              <option value="uzbek">
                Ўз
                <img src={headerLen1} alt="" />
              </option>
              <option value="russian">
                Ru
                <img src={headerLen1} alt="" />
              </option>
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
              <img src={headerSelectIcon2} alt="" />
            </span>
          </div>
          <Button leftIcon={headerBtnIcon} variant={"header"}>
            Кириш
          </Button>
        </div>
      </div>
      <nav className="py-[9px] border-t-2 border-[#f0f0f0]">
        <ul className=" flex gap-[20px]">
          <li>
            <a
              className="font-semibold text-[16px] text-[var(--primary)]"
              href=""
            >
              Аудиокитоб
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-[16px] text-[var(--primary)]"
              href=""
            >
              Электрон китоблар
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-[16px] text-[var(--primary)]"
              href=""
            >
              Босма китоблар
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-[16px] text-[var(--primary)]"
              href=""
            >
              Контакт
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-[16px] text-[var(--primary)]"
              href=""
            >
              Биз хақимизда
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
