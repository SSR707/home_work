"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const BackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="py-[8px] px-[15px] bg-blue-500 rounded-2xl cursor-pointer text-center text-[#fff] font-bold"
    >
      {"< Back"}
    </button>
  );
};
