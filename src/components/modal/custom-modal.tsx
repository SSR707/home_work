import React from "react";
import Close from "../../../public/close.svg";

export const CustomModal = ({
  children,
  open,
  onClose,
  titleText,
}: {
  titleText: string;
  children?: any;
  open?: boolean;
  onClose?: () => void;
}) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-[500px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" text-end">
          <button className=" text-xl cursor-pointer" onClick={onClose}>
            <img src={Close.src} alt="" width={20} height={20} />
          </button>
        </div>
        <div className="text-center px-[30px]">
          <h2 className="text-[#000] text-4xl font-bold">{titleText}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};
