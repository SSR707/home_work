"use client";
import React, { useEffect, useState } from "react";
import { CustomModal } from "../modal/custom-modal";
import { signIn, useSession } from "next-auth/react";
import Login from "@/app/( auth)/_login/login";
import Register from "@/app/( auth)/_register/register";
import GoogleIcon from "../../../public/googleIcon.svg";

export const SingInBtn = () => {
  const { data: session, status } = useSession();

  const [toggal, setToggal] = useState(false);
  const [toggalBtn, setToggalBtn] = useState(false);
  useEffect(() => {
    if (toggal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggal]);
  return (
    <>
      <button
        onClick={() => setToggal(!toggal)}
        className="py-[10px] px-[25px] rounded-[6px] bg-[var(--primary-variant)] flex items-center gap-[8px] font-bold text-[15px] text-[var(--white-1000)]"
      >
        Kirish
      </button>
      <CustomModal
        open={toggal}
        titleText={toggalBtn ? "Royhatdan otish" : "Kirish"}
        onClose={() => {
          setToggal(false), setToggalBtn(false);
        }}
      >
        {toggalBtn ? (
          <Register onRegisterSuccess={() => setToggalBtn(false)} />
        ) : (
          <Login onLoginSuccess={() => setToggal(false)} />
        )}
        <div className="mt-[15px] flex flex-col items-center">
          {" "}
          <button
            onClick={() => setToggalBtn(!toggalBtn)}
            className=" text-[18px] font-bold text-[var(--primary)] cursor-pointer"
          >
            {toggalBtn ? "Kirish" : "Royhatdan otish"}
          </button>
          <button
            className=" text-[18px] font-bold text-[var(--primary)] border-1 py-[5px] px-[10px] rounded-2xl cursor-pointer flex items-center mt-[15px] gap-[8px]"
            onClick={() => signIn("google")}
          >
            <img src={GoogleIcon.src} alt="" width={37} height={37} />
            Google
          </button>
        </div>
      </CustomModal>
    </>
  );
};
