import React from "react";
import headerIcon from "../../../public/header_icon.svg";
import CallIcon from "../../../public/call_icon.svg";
import CardSvg from "../../../public/card_icon.svg";
import UzbFlag from "../../../public/uz-flag.svg";
import DownIcon from "../../../public/down_icon.svg";
import ProfileIcon from "../../../public/profile_icon.svg";
import SearchIcon from "../../../public/search_icon.svg";
import Link from "next/link";
import { LikeBtnCustom } from "../like_btn/like-btn";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[var(--white-1000)]">
      <div className=" container">
        <div className="pt-[23px] pb-[20px] flex  items-center gap-[50px]  ">
          <div>
            <img src={headerIcon.src} alt="" />
          </div>
          <div className="flex  w-full items-center gap-[42px] relative">
            <input
              type="text"
              className="grow py-[12px] pl-[45px] pr-[20px] rounded-[6px] bg-[var(--bg)] border-1  border-[var(--primary-variant)] outline-none"
              placeholder="Qidirish"
            />
            <button className=" absolute left-[12px]">
              <img src={SearchIcon.src} alt="" />
            </button>
            <div className=" flex items-center gap-[31px]">
              <div className="flex gap-[35px]  items-center">
                <div className="flex gap-[7px]">
                  <img src={CallIcon.src} alt="" width={14} height={14} />
                  <Link
                    href={"/"}
                    className=" font-semibold text-[14px]  text-[var(--text-title)] underline-text  leading-[129%]"
                  >
                    Bog’lanish
                  </Link>
                </div>
                <button className="py-[10px] px-[13px] rounded-[6px] border-1 border-[var(--primary-variant)] flex items-center gap-[8px] font-bold text-[13px] text-[var(--primary-variant)]">
                  <img src={CardSvg.src} alt="" />
                  Payme
                </button>
              </div>
              <div className="flex items-center gap-[22px]">
                <button className=" flex items-center border-1 border-[var(--inputbg)] py-[9px] pr-[12px] pl-[16px]  rounded-[6px] gap-[8px]  font-normal text-[15px] text-[var(--primary-variant)]">
                  <img src={UzbFlag.src} alt="" />
                  Uz / UZS
                  <img src={DownIcon.src} alt="" width={24} height={24} />
                </button>
                <Link href={"/profile/account"} className="cursor-pointer">
                  <img src={ProfileIcon.src} alt="" width={24} height={24} />
                </Link>
                <LikeBtnCustom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
