"use client";

import React, { useEffect, useState } from "react";
import Unlike from "../../../public/unlike.svg";
import Like from "../../../public/like.svg";
import { useDispatch, useSelector } from "react-redux";
import { addLike, removeLike } from "@/store/slices/like-reducer";
import { RootState } from "@/store/store";

export const LikeBtn = ({ id }: { id: number }) => {
  const { like } = useSelector((state: RootState) => state.like);
  const distpatch = useDispatch();
  const [likeToggal, setLikeToggal] = useState(false);
  const onLike = () => {
    if (!likeToggal) {
      distpatch(addLike({ id }));
    } else {
      distpatch(removeLike(id));
    }
    setLikeToggal(!likeToggal);
  };
  useEffect(() => {
    setLikeToggal(like.some((item) => item.id === id));
  }, [id, like]);

  return (
    <button
      onClick={onLike}
      className=" absolute top-[15px] right-[15px] cursor-pointer"
    >
      <img
        src={likeToggal ? Like.src : Unlike.src}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
};
