export const HeroCard = ({ title, url }) => {
  return (
    <div>
      <img className=" rounded-[14px]" src={url} alt="card-book" />
      <p className="text-center font-normal text-[20px] leading-[100%]">
        {title}
      </p>
    </div>
  );
};
