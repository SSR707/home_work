import React from "react";
import { AddressCard } from "../_components/address-card";
import { User } from "../data/data";
import AddIcon from "../../../../public/addIcon.svg";

const Account = () => {
  return (
    <div className=" pt-[20px]">
      <h3 className="font-bold text-[32px] mb-[50px] ">Sizning profilingiz</h3>
      <form className="flex gap-[10px] items-end">
        <div className="flex flex-col gap-[10px] ">
          <label
            htmlFor="name"
            className="font-bold text-[14px] leading-[129%] text-[ var(--text-title)]"
          >
            Ism
          </label>
          <input
            type="text"
            id="name"
            className="bg-[var(--inputbg)] rounded-[5px] py-[10px] w-[256px] outline-none px-[10px]"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="name"
            className="font-bold text-[14px] leading-[129%] text-[var(--text-title)]"
          >
            Familya
          </label>
          <input
            type="text"
            id="name"
            className="bg-[var(--inputbg)] rounded-[5px] py-[10px] w-[256px] outline-none px-[10px]"
          />
        </div>
        <div className="ml-1.5">
          {" "}
          <button className="px-[41px] py-[11px] bg-[var(--primary-variant)] rounded-[5px] font-bold text-[15px] leading-[150%] text-[var(--white-1000)]">
            Saqlash
          </button>
        </div>
      </form>
      <div className="mt-[32px] ">
        <h3 className="font-bold text-[14px] leading-[129%] text-[ var(--text-title)]">
          Yetkazib berish manzili
        </h3>
        <div className="mt-[24px] grid grid-cols-2 gap-x-[16px] gap-y-[24px] ">
          {User.map((item) => (
            <AddressCard
              name={item.name}
              description={item.description}
              code={item.code}
              key={item.id}
            />
          ))}
          <button className="flex w-[375px] justify-center gap-[8px]  border-2 border-dashed border-[var(--primary)] py-[30px] rounded-[6px] cursor-pointer">
            <img src={AddIcon.src} alt="" />
            Manzil qo’shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
