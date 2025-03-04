import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { UserFormValues } from "../../addUsers";

export const useCreateUsers = () => {
  return useMutation({
    mutationFn: (data: UserFormValues) =>
      request.post("users", data).then((res) => res.data),
  });
};
