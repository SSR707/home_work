"use server";
import { cookies } from "next/headers";

import { IInputLogin } from "../_login/login";
export interface IInput {
    name: string;
    email: string;
    password: string;
  }

const url = "  http://localhost:3000";
interface resLogin {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}
export const registerUser = async (data: IInput) => {
  const res = await fetch(`${url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const resData = await res.json();

  return resData;
};

export const loginUser = async (data: IInputLogin) => {
  const loginCookie = cookies();
  const res = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const resData: resLogin = await res.json();
  (await loginCookie).set("token", resData.accessToken);
  (await loginCookie).set("user", JSON.stringify(resData.user));
  return resData;
};
