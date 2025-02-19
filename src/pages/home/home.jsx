import { Hero } from "./components/hero/hero";
import infoImg1 from "../../assets/info__img-1.svg";
import infoImg2 from "../../assets/info__img-2.svg";
import infoImg3 from "../../assets/info__img-3.svg";
import infoImg4 from "../../assets/info__img-4.svg";
import { InfoCard } from "./components/info/info";
import { Category } from "./components/category/category";
import { NewBook } from "./components/new_book/newBook";
import { AoudioBook } from "./components/audioBook/audioBook";


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
export const Home  = () => {
     return <>
                <Hero />
        <section className="pt-[56px]">
          <div className="container">
            <div>
              <ul className=" flex ">
                {data.map((item) => (
                  <li
                    key={item.id}
                    className=" flex gap-[20px] py-[26px] pl-[15px] pr-[26px]"
                  >
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
        <Category />
        <NewBook />
        <AoudioBook />
     
     </>
} 