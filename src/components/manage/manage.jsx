export const ManageLi = ({ number, title, text }) => {
  return (
    <li className="manage__item">
      <div className="manage__info">
        <div className="manage__info_number">{number}</div>
        <h3 className="manage__info_title">{title}</h3>
      </div>
      <p className="manage__info_text">{text}</p>
    </li>
  );
};
