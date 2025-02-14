import headerImg from "../../assets/header__img.svg";
import headerLen1 from "../../assets/header__lenguge-1.svg";
import headerBtnIcon from "../../assets/header__icon_btn.svg";
import headerSearchIcon from "../../assets/header__search-icon.svg";
import { useRef } from "react";

export const Header = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <div className="container">
        <div className="main_header__block-1">
          <div className="main_header__img">
            <img src={headerImg} alt="" />
          </div>
          <div className="main_header__search">
            <select className="main_header__select" name="rukunlar">
              <option value="apple">Рукнлар</option>
              <option value="banana">Banana</option>
            </select>
            <input
              ref={inputRef}
              className="main_header__search_input"
              type="text"
              placeholder="Qidirish"
            />
            <button
              onClick={handleButtonClick}
              className="main_header__search_btn"
            >
              <img src={headerSearchIcon} alt="" />
            </button>
          </div>
          <div className="main_header_btns">
            <select className="main_header__language" name="til">
              <option value="uzbek">
                Ўз
                <img src={headerLen1} alt="" />
              </option>
              <option value="russian">
                Ru
                <img src={headerLen1} alt="" />
              </option>
            </select>
            <button className="main_header__btn">
              <img src={headerBtnIcon} alt="" />
              Кириш
            </button>
          </div>
        </div>
          <nav className="main_header__block-2">
            <ul className="main_header__list">
              <li>
                <a className="main_header__link" href="">Аудиокитоб</a>
              </li>
              <li>
                <a className="main_header__link" href="">Электрон китоблар</a>
              </li>
              <li>
                <a className="main_header__link" href="">Босма китоблар</a>
              </li>
              <li>
                <a className="main_header__link" href="">Контакт</a>
              </li>
              <li>
                <a className="main_header__link" href="">Биз хақимизда</a>
              </li>
            </ul>
          </nav>
      </div>
    </>
  );
};
