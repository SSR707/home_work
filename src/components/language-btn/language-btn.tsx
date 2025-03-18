import React, { useState } from "react";
import UzbFlag from "../../../public/uz-flag.svg";
import DownIcon from "../../../public/down_icon.svg";
import { CustomModal } from "../modal/custom-modal";
import Link from "next/link";

export const LanguageBtn = () => {
  return (
    <>
      <button
        className=" flex items-center border-1 border-[var(--inputbg)] py-[9px] pr-[12px] pl-[16px]  rounded-[6px] gap-[8px]  font-normal text-[15px] text-[var(--primary-variant)]"
      >
        <img src={UzbFlag.src} alt="" />
        Uz / UZS
        <img src={DownIcon.src} alt="" width={24} height={24} />
      </button>
    </>
  );
};
