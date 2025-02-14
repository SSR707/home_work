export const HeroCard = ({ title, url }) => {
  return (
    <div className="hero__book_card">
      <img src={url} alt="card-book" />
      <p>{title}</p>
    </div>
  );
};
