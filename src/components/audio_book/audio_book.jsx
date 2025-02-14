import { AudioBookSlider } from "./audio_book_slider";

export const AoudioBook = () => {
  return (
    <section className="audio_book">
      <div className="container">
        <div className="audio_book__block">
          <h2 className="audio_book__title">Аудио китоблар</h2>
          <div className="audio_book__slider">
            <AudioBookSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
