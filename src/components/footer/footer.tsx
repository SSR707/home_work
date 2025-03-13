import React from "react";
import FooterIcon from "../../../public/header_icon.svg";
import GooglePlayIcon from "../../../public/footerGoglePlay_icon.svg";
import AppStoreIcon from "../../../public/footerAppStore.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className=" container ">
        <div className="pt-[25px] pb-[40px] flex justify-between ">
          <div>
            <div>
              <img src={FooterIcon.src} alt="" />
            </div>
            <h3 className="font-medium text-[19px] leading-[150%] text-[#000] mt-[22px]">
              HilalMart © 2021
            </h3>
            <p className="font-normal text-[15px] leading-[150%] text-[#000]">
              Barcha huquqlar kafolatlangan
            </p>
            <div className=" flex gap-[12px] items-center mt-[16px]">
              <img src={GooglePlayIcon.src} alt="" />
              <img src={AppStoreIcon.src} alt="" />
            </div>
          </div>
          <ul>
            <li>
              <h3 className="mb-[16px] font-medium text-[19px] leading-[120%]">
                Foydali havolalar
              </h3>
            </li>
            <li>
              <Link
                className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)] mt-[6px]"
                href={"/"}
              >
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)] mt-[6px]"
                href={"/"}
              >
                Yordam kerakmi?
              </Link>
            </li>
            <li>
              <Link
                className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)]  mt-[6px]"
                href={"/"}
              >
                Foydalanish shartlari
              </Link>
            </li>
            <li>
              <Link
                className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)] mt-[6px]"
                href={"/"}
              >
                Maxfiylik siyosati
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3 className="mb-[16px] font-medium text-[19px] leading-[120%]">
                Biz haqimizda
              </h3>
            </li>
            <li>
              <p className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)]  mt-[6px]">
                Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu,
                Seoul, 03113, Crescent Trade ltd
              </p>
            </li>
            <li>
              <p className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)]  mt-[6px]">
                Korxona nomi: Crescent trade llc
              </p>
            </li>
            <li>
              <p className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)]  mt-[6px]">
                Korxona rahbari: DADAJONOV RAKHIMJON
              </p>
            </li>
            <li>
              <p className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)]  mt-[6px]">
                Registratsiya raqami: 433-62-00377
              </p>
            </li>
            <li>
              <p className=" font-normal text-[14px] leading-[150%] text-[var(--text-title)]  mt-[6px]">
                Telefon raqam:02-3670-6808 1833-2178
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
