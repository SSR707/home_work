"use server";

import { input } from "@/components/user-from";
import { revalidateTag } from "next/cache";

export interface IUser {
  _id: string;
  name: string;
  age: number;
  address: string;
  email: string;
}

interface IResponseUser {
  massage: string;
  users: IUser[];
}
interface IResponseUserByID {
  massage: string;
  data: IUser;
}
const url = process.env.BASE_ULR;

export const getUsers = async () => {
  const res = await fetch(`${url}/users`, {
    next: { tags: ["users_list"] },
  });

  if (!res.ok) {
    throw new Error("Eroor Faching");
  }
  const data: IResponseUser = await res.json();
  return data;
};

export const createUser = async (users: input) => {
  const res = await fetch(`${url}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  });
  if (!res.ok) {
    throw new Error("Eroor Faching");
    console.log(res);
  }
  revalidateTag("users_list");
  const data: IResponseUser = await res.json();
  return data;
};

export const deleteUserr = async (id: string | undefined) => {
  const res = await fetch(`${url}/users/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Eroor Faching");
  }
  revalidateTag("users_list");
  const data: IResponseUser = await res.json();
  return data;
};

export const updateUser = async (users: input, id: string | undefined) => {
  const res = await fetch(`${url}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  });
  if (!res.ok) {
    throw new Error("Eroor Faching");
    console.log(res);
  }
  revalidateTag("users_list");
  revalidateTag(`users_list_${id}`);
  const data: IResponseUser = await res.json();
  return data;
};
export const getUsersById = async (id: string | undefined) => {
  const res = await fetch(`${url}/users/${id}`, {
    next: { tags: [`users_list_${id}`] },
  });

  if (!res.ok) {
    throw new Error("Eroor Faching");
  }
  const data: IResponseUserByID = await res.json();
  return data;
};
