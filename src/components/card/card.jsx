import cardImg from "../../utils/imgs/card__img.svg";
export const UserCard = ({ name, text, classItem }) => {
  return (
    <li className={classItem}>
      <div className="card__item_img">
        <img src={cardImg} alt="" />
      </div>
      <h3 className="card__name">{name}</h3>
      <p className="card__text">{text}</p>
    </li>
  );
};
