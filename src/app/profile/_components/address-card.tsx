import React from "react";
import OkIcon from "../../../../public/ok_icon.svg";
import EditIcon from "../../../../public/edit_icon.svg";
import CloseIcon from "../../../../public/close_icon.svg";

export const AddressCard = ({
  name,
  description,
  code,
}: {
  name: string;
  description: string;
  code: string;
}) => {
  return (
    <div className="py-[16px] px-[20px] bg-[var(--bg)]  w-[375px] rounded-[8px]">
      <h3 className="font-semibold text-[16px] leading-[129%] text-[ #000]">
        Ismoilbek
      </h3>
      <p className="font-normal text-[14px] leading-[129%] text-[ #000] mt-[8px] max-w-[292px]">
        Seoul-teukbyeolsi, Jongno-gu, Sajik-ro-3-gil 23, 102-dong 304-ho, Hong
        Gildong gwiha
      </p>
      <p className="font-normal text-[14px] leading-[129%] text-[ #000] mt-[8px]">
        01011112222
      </p>
      <div className="mt-[12px] flex justify-between items-center">
        <button className=" flex gap-[6px] font-normal text-[14px] text-center text-[  var(--white-1000)] px-[35px] py-[8px] bg-[var(--primary)] rounded-[6px] text-[var(--white-1000)]">
          <img src={OkIcon.src} alt="" />
          Asosiy manzil
        </button>
        <div className="flex gap-[12px]">
          <button className=" py-[5px] px-[9px] bg-[var(--white-1000)] rounded-[6px]">
            <img src={EditIcon.src} alt="" width={24} height={24} />
          </button>
          <button className="  py-[5px] px-[9px] bg-[var(--red)] rounded-[6px] ">
            <img src={CloseIcon.src} alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
