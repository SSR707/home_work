"use client";
import { ProductCard } from "@/components/productCard/product Card";
import React, { useEffect, useState } from "react";
import { Product } from "../_data/data";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
interface IProduct {
  id: number;
  title: string;
  price: string;
  new_price: string;
  img: string;
  skidka?: number | undefined;
}

const LikePage = () => {
  const [data, setData] = useState<IProduct[] | null>(null);
  const { like } = useSelector((state: RootState) => state.like);
  useEffect(() => {
    const likeData = Product.filter((item1) =>
      like.some((item2) => item1.id === item2.id)
    );

    setData(likeData);
  }, [like]);
  return (
    <section className=" pb-[40px]">
      <div className="container">
        <div className="pt-[20px] grid grid-cols-5 gap-x-3 gap-y-4 mt-[36px]">
          {data?.map((item) => (
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
    </section>
  );
};

export default LikePage;
