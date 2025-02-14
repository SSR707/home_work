export const HeroCard = ({ title, img }) => {
  return (
    <div className="ruknlar__card" style={{ backgroundImage: `url(${img})`}}>
      <h2 className="ruknlar__sub_title">{title}</h2>
    </div>
  );
};
