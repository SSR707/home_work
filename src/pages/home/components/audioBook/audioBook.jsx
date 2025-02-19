import { AudioBookSlider } from "./audioBookSlider";

export const AoudioBook = () => {
  return (
    <section className="pt-[64px]">
      <div className="container" id="electron_kotib">
        <div className="">
          <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--text)] mb-[32px]">
            Аудио китоблар
          </h2>
          <div className="">
            <AudioBookSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
