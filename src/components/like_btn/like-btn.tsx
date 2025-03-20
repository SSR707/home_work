"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Like from "../../../public/headerLike.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const LikeBtnCustom = () => {
  const { like } = useSelector((state: RootState) => state.like);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    setLikeCount(like.length);
  }, [like]);
  return (
    <div className=" relative">
      {like.length ? (
        <div className="px-[6px] rounded-[100%] bg-red-500 text-white absolute text-[12px] top-[-10px] right-[-10px]">
          {likeCount}
        </div>
      ) : null}
      <Link href={"/like"} className="cursor-pointer">
        <img src={Like.src} alt="" width={22} height={22} />
      </Link>
    </div>
  );
};
