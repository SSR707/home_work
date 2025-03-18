"use client";
import Link from "next/link";
import React from "react";
import Like from "../../../public/headerLike.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const LikeBtnCustom = () => {
  const { like } = useSelector((state: RootState) => state.like);
  return (
    <Link href={"/like"} className="cursor-pointer">
      <img src={Like.src} alt="" width={22} height={22} />
    </Link>
  );
};
