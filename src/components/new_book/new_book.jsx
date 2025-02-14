import { NewBookSlider } from "./new_book.slider";

export const NewBook = () => {
  return (
    <section className="new_book">
      <div className="container">
        <div className="new_book__block">
          <h2 className="new__book__title">Янги қўшилганлар</h2>
          <div className="new__book__slider">
            <NewBookSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
