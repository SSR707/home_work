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

export const useGetUsersById = (id: string) => {
  return useQuery({
    queryKey: ["sub_user", id],
    queryFn: () =>
      request.get<UserType>(`/users/${id}`).then((res) => res.data),
  });
};
