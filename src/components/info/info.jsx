export const InfoCard = ({ url, title, text }) => {
  return (
    <>
      <div className="info__img">
        <img src={url} alt="logo" />
      </div>
      <div className="info__content">
        <h3 className="info__title">{title}</h3>
        <p className="info__text">{text}</p>
      </div>
    </>
  );
};
