import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import infoImg1 from "../assets/info__img-1.svg";
import infoImg2 from "../assets/info__img-2.svg";
import infoImg3 from "../assets/info__img-3.svg";
import infoImg4 from "../assets/info__img-4.svg";
import { InfoCard } from "../components/info/info";
import { Ruknlar } from "../components/ruknlar/ruknlar";
import { NewBook } from "../components/new_book/new_book";
import { AoudioBook } from "../components/audio_book/audio_book";
import { Footer } from "../components/footer/footer";

const data = [
  {
    id: 1,
    title: "Тезкор етказиш",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: infoImg1,
  },
  {
    id: 2,
    title: "Тўлов химояси",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: infoImg2,
  },
  {
    id: 3,
    title: "Юқори сифат",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: infoImg3,
  },
  {
    id: 4,
    title: "Энг сара китоблар",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: infoImg4,
  },
];

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <section className="info">
          <div className="container">
            <div className="info__block">
              <ul className="info__list">
                {data.map((item) => (
                  <li key={item.id} className="info__item">
                    <InfoCard
                      key={item.id}
                      title={item.title}
                      text={item.text}
                      url={item.img}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Ruknlar />
        <NewBook />
        <AoudioBook />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
