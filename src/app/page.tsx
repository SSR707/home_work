import { CategoryButton } from "@/components/_category/category";
import { CategoryData, Product1, Product2 } from "./_data/data";
import TelefonIcon from "../../public/phone_icon.svg";
import NewIcon from "../../public/new_icon .svg";
import DefaultIcon from "../../public/dafault_icon.svg";
import { ProductCard } from "@/components/productCard/product Card";

export default function Home() {
  return (
    <div className="pb-[30px]">
      <div className="container">
        <div className="flex ">
          <ul className=" pr-[20px] shadow-[4px_0_4px_-2px_rgba(0,0,0,0.1)] h-full sticky top-[80px] z-40 bg-[var(--white-1000)] ">
            {CategoryData.map((item, index) => (
              <li key={index} className="mt-[17px]">
                <CategoryButton text={item} />
              </li>
            ))}
          </ul>
          <div className=" w-full  pt-[38px] pl-[24px] ">
            <div className=" bg-[#c4ead2] rounded-[6px] py-[46px] px-[107px]">
              <h2 className="font-bold text-[30px] text-[#071612] max-w-[572px]">
                Yangi ro’yxatdan o’tgan mijozlarga ilk buyurtma bepul yetkazib
                beriladi!
              </h2>
              <div className="flex items-center gap-[12px] mt-[28px]">
                <img src={TelefonIcon.src} alt="" width={24} height={24} />
                <p className=" font-bold text-[16px] text-[#071612] ">
                  1833-2178
                </p>
              </div>
            </div>
            <div className="pt-[28px]">
              <h3 className="font-bold text-[30px] leading-[75%] text-[ var(--text-title)] flex items-center gap-[17px]">
                <img src={NewIcon.src} alt="" />
                Yangi
              </h3>
              <div className="pt-[20px] grid grid-cols-4 gap-x-2 gap-y-3 mt-[36px]">
                {Product1.map((item) => (
                  <ProductCard
                    id={item.id}
                    key={item.id}
                    name={item.title}
                    price={item.price}
                    newPrice={item.new_price}
                    img={item.img}
                    skidka={item.skidka}
                  />
                ))}
              </div>
            </div>
            <div className="pt-[40px]">
              <h3 className="font-bold text-[30px] leading-[75%] text-[ var(--text-title)] flex items-center gap-[17px]">
                <img src={DefaultIcon.src} alt="" />
                Ommabop mahsulotlar
              </h3>
              <div className="pt-[20px] grid grid-cols-4 gap-x-2 gap-y-3 mt-[36px]">
                {Product2.map((item) => (
                  <ProductCard
                    id={item.id}
                    key={item.id}
                    name={item.title}
                    price={item.price}
                    newPrice={item.new_price}
                    img={item.img}
                    skidka={item.skidka}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
