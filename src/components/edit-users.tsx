"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const EditUsers = ({ id }: { id: string | undefined }) => {
  const router = useRouter();
  const editUsers = () => {
    router.push(`/edit/${id}`);
  };
  return (
    <button
      onClick={editUsers}
      className="py-[8px] px-[25px] rounded-[12px] bg-blue-500 cursor-pointer"
    >
      Edit
    </button>
  );
};
