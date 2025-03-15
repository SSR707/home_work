"use client";

import { deleteUserr } from "@/service/user-todo";
import React from "react";

export const DaleteUser = ({ id }: { id: string | undefined }) => {
  const deleteUser = () => {
    deleteUserr(id);
  };
  return (
    <button
      onClick={deleteUser}
      className="py-[8px] px-[20px] rounded-[12px] bg-red-500 cursor-pointer"
    >
      Delete
    </button>
  );
};
