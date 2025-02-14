export const NewBookCard = ({
  title,
  img,
  description,
  start,
  reating,
  audio,
  bookIcon
}) => {
  return (
    <>
      <div className="new_book_card_img">
        <img src={img} alt="" />
      </div>
      <h3 className="new_book_card_title">{title}</h3>
      <p className="new_book_card_description">{description}</p>
      <div className="new_book_content">
        <div className="new_book_card_stars">
          <img src={start} alt="start" />
          <p className="new_book_card_reating">{reating}</p>
        </div>
        <div className="new_book_card_icon">
          <img src={audio} alt="" />
          <img src={bookIcon} alt="" />
        </div>
      </div>
    </>
  );
};
