"use client";
import { createUser, updateUser } from "@/service/user-todo";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";

export interface input {
  name: string;
  age: number;
  address: string;
  email: string;
}

export const UserFrom = ({
  id,
  text,
  name = "",
  age = 0,
  email = "",
  address = "",
}: {
  id?: string | undefined;
  text?: string | undefined;
  name?: string;
  age?: number;
  email?: string;
  address?: string;
}) => {
  const { reset, register, handleSubmit, setError } = useForm<input>({
    defaultValues: {
      name,
      age,
      email,
      address,
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useTransition();
  const onSubmit = (data: input) => {
    setLoading(async () => {
      try {
        if (id) {
          await updateUser({ ...data, age: +data.age }, id);
          router.push("/");
        } else {
          createUser({ ...data, age: +data.age });
          reset();
        }
      } catch (error) {
        setError("email", {
          type: "manual",
          message: "Email formati noto‘g‘ri!",
        });
      }
    });
  };
  return (
    <div className="w-[450px] text-center mt-[20px]">
      <h2 className="text-[32px] text-[#263a5b] font-bold mb-[30px]">
        {text ?? " User Todo"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between ">
          <input
            type="text"
            {...register("name", {
              required: "Ism kiritish majburiy!",
              minLength: {
                value: 3,
                message: "Ism kamida 3 ta harf bo‘lishi kerak!",
              },
            })}
            placeholder="Ismingizni kiriting... "
            className=" py-[8px] px-[15px] bg-[#f8f8f8] rounded-[12px]"
          />
          <input
            type="number"
            {...register("age", {
              required: "Yosh kiritish majburiy!",
              min: {
                value: 1,
                message: "Yosh 1 dan katta bo‘lishi kerak!",
              },
            })}
            placeholder="yoshingizni kiriting... "
            className=" py-[8px] px-[15px] bg-[#f8f8f8] rounded-[12px]"
          />
        </div>
        <div className="flex justify-between mt-[20px] ">
          <input
            type="text"
            {...register("address", {
              required: "Manzil kiritish majburiy!",
              minLength: {
                value: 5,
                message: "Manzil kamida 5 ta belgi bo‘lishi kerak!",
              },
            })}
            placeholder="addresingizni kiriting... "
            className=" py-[8px] px-[15px] bg-[#f8f8f8] rounded-[12px]"
          />
          <input
            type="text"
            {...register("email", {
              required: "Email kiritish majburiy!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email formati noto‘g‘ri!",
              },
            })}
            placeholder="email kiriting... "
            className=" py-[8px] px-[15px] bg-[#f8f8f8] rounded-[12px]"
          />
        </div>
        <button className="w-[100%] bg-blue-500 rounded-[13px] py-[8px] mt-[25px] text-[18px] text-[#fff] font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};
