import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

interface UserType {
  message: "Success";
  users: {
    _id: string;
    name: string;
    age: number;
    address: string;
    email: string;
    password: string;
  }[];
}

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => request.get<UserType>("/users").then((res) => res.data),
  });
};
