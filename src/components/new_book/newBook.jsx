import { NewBookSlider } from "./newBookSlider";

export const NewBook = () => {
  return (
    <section className="pt-[64px]">
      <div className="container">
        <div className="">
          <h2 className=" font-semibold text-[32px] leading-[125%] text-[var(--text)] mb-[32px]">
            Янги қўшилганлар
          </h2>
          <div >
            <NewBookSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
