import React from "react";
import ProductImg from "../../../public/product_img-1.svg";
import KorzinkaIcon from "../../../public/korzinka_icon.svg";
export const ProductCard = ({
  name,
  price,
  newPrice,
  img,
  skidka,
}: {
  name: string;
  price: string;
  newPrice: string;
  img: string;
  skidka: number | undefined;
}) => {
  return (
    <div className=" shadow-md max-w-[264px] max-h-[385px] relative">
      <div>
        <img src={img} alt="" />
      </div>
      {skidka ? (
        <div className=" absolute px-[8px] py-[5px] top-[15px] left-[15px] bg-[#ff7a50] rounded-[6px] shadow-2xs">
          <p className=" font-normal text-[14px] text-[var(--white-1000)]">
            {skidka}%
          </p>
        </div>
      ) : null}
      <div className="px-[21px] pb-[25px]">
        <p className="font-normal text-[14px] leading-[150%] text-[#999] ">
          {name}
        </p>
        <div className="flex items-center gap-[12px] mt-[8px]">
          <p className="font-bold text-[24px] leading-[100%] text-[--text-title]">
            {newPrice} w
          </p>
          <p className="font-normal text-[15px] leading-[100%] text-[#77798c] mt-[8px]   line-through">
            {price} w
          </p>
        </div>
        <button className="flex items-center gap-[10px] mt-[15px] py-[10px] px-[74px] bg-[var(--bg)] rounded-[6px]">
          <img src={KorzinkaIcon.src} alt="" />
          Qo'shish
        </button>
      </div>
    </div>
  );
};
