"use client";
import React, { useState } from "react";
import { CustomModal } from "../modal/custom-modal";
import Login from "@/app/( auth)/_login/login";

export const SingInBtn = () => {
  const [toggal, setToggal] = useState(false);
  return (
    <>
      <button
        onClick={() => setToggal(!toggal)}
        className="py-[10px] px-[25px] rounded-[6px] bg-[var(--primary-variant)] flex items-center gap-[8px] font-bold text-[15px] text-[var(--white-1000)]"
      >
        Kirish
      </button>
      <CustomModal open={toggal} onClose={() => setToggal(false)}>
        <Login />
      </CustomModal>
    </>
  );
};
