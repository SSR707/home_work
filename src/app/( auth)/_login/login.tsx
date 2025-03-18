"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  return (
    <div className="mt-[30px] ">
      <form>
        <input
          type="text"
          name="email"
          id="email_input"
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%]"
          placeholder="Email kiriting ..."
        />

        <input
          type="text"
          name="email"
          id="email_input"
          className="bg-[var(--bg)] border-1 border-[var(--greyinactive)] rounded-[4px] py-[10px] px-[10px] outline-none w-[100%] mt-[25px]"
          placeholder="Parol kiriting ..."
        />

        <button className="bg-[var(--primary)] w-[100%] mt-[25px] rounded-[4px]  py-[10px] px-[10px] text-[20px] text-[var(--white-1000)] font-semibold cursor-pointer">
          Kirish
        </button>
      </form>
      <div className="mt-[15px]">
        {" "}
        <button className=" text-[18px] font-bold text-[var(--primary)] cursor-pointer">
          Royhatdan otish
        </button>
      </div>
    </div>
  );
};

export default Login;
