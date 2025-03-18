import React from "react";
import RighIcon from "../../../public/right_icon.svg";
export const CategoryButton = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center pt-[15px] pb-[17px] w-[220px]">
      <p className=" font-normal text-[14px] leading-[161%] text-[var(--text-title)] ">
        {text }
      </p>{" "}
      <img src={RighIcon.src} alt="" />
    </div>
  );
};
