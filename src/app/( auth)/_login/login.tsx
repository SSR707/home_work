"use client";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../service/auth-service";
export interface IInputLogin {
  email: string;
  password: string;
}

const Login = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IInputLogin>();
  const [transition, setTransition] = useTransition();

  const submit = (data: IInputLogin) => {
    setTransition(async () => {
      try {
        const result = await loginUser(data);
        reset();
        onLoginSuccess();
      } catch (error) {
        const err = error as Error;
        console.log(err)
        if (err.name === "email") {
          setError("email", {
            message: "email xato",
          });
        } else if (err.name === "password") {
          setError("password", {
            message: " password xato",
          });
        } else {
          setError("email", {
            message: "email xato",
          });
        }
      }
    });
  };
  return (
    <div className="mt-[30px] ">
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          {...register("email", {
            required: "Email majburiy",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Email noto‘g‘ri",
            },
          })}
          id="email_input"
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%]"
          placeholder="Email kiriting ..."
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
        <input
          type="password"
          {...register("password", { required: "parolni kiriting" })}
          id="email_input"
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%] mt-[25px]"
          placeholder="Parol kiriting ..."
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
        <button className="bg-[var(--primary)] w-[100%] mt-[25px] rounded-[4px]  py-[10px] px-[10px] text-[20px] text-[var(--white-1000)] font-semibold cursor-pointer">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
