"use client";

import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../service/auth-service";

export interface IInput {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}
const Register = ({ onRegisterSuccess }: { onRegisterSuccess: () => void }) => {
  const {
    handleSubmit,
    register,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm<IInput>();
  const [transition, setTransition] = useTransition();
  const submit = (data: IInput) => {
    setTransition(async () => {
      try {
        const value = {
          name: data.name,
          email: data.email,
          password: data.password,
        };
        const result = await registerUser(value);
        if (result) {
          reset();
          onRegisterSuccess();
        }
      } catch (error) {
        const err = error as Error;
        if (err.name === "email") {
          setError("email", {
            message: "bu email oldin ham royhatdan otqazilgan ",
          });
        } else if (err.name === "password") {
          setError("email", {
            message: " password xato",
          });
        } else {
          setError("name", { message: "Xatolik Yuz berdi " });
        }
      }
    });
  };
  return (
    <div className="mt-[30px] ">
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          {...register("name", { required: "Ism majburiy" })}
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%]"
          placeholder="Ismingizni kiriting..."
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 text-start">
            {errors.name.message}
          </p>
        )}
        <input
          type="text"
          {...register("email", {
            required: "Email majburiy",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Email noto‘g‘ri",
            },
          })}
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%] mt-[25px]"
          placeholder="Email kiriting..."
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 text-start">
            {errors.email.message}
          </p>
        )}
        <input
          type="password"
          {...register("password", {
            required: "Parol majburiy",
            minLength: {
              value: 6,
              message: "Parol kamida 6 ta belgidan iborat bo‘lishi kerak",
            },
          })}
          id="email_input"
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%] mt-[25px]"
          placeholder="Parol kiriting..."
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 text-start">
            {errors.password.message}
          </p>
        )}
        <input
          type="password"
          {...register("confirm_password", {
            required: "Parolni tasdiqlash majburiy",
            validate: (value) =>
              value === watch("password") || "Parollar mos kelmadi",
          })}
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%] mt-[25px]"
          placeholder="Parol tastiqlan kiriting..."
        />
        {errors.confirm_password && (
          <p className="text-red-500 text-sm mt-1 text-start">
            {errors.confirm_password.message}
          </p>
        )}
        <button
          disabled={transition}
          type="submit"
          className="bg-[var(--primary)] w-[100%] mt-[25px] rounded-[4px]  py-[10px] px-[10px] text-[20px] text-[var(--white-1000)] font-semibold cursor-pointer"
        >
          Royhatdan Otish
        </button>
      </form>
    </div>
  );
};

export default Register;
