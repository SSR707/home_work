import { useMutation } from "@tanstack/react-query";
import { UserFormValues } from "../../editUsers";
import { request } from "../../../../config/request";

interface EditUserParams {
  id: string;
  data: UserFormValues;
}
export const useEditUsers = () => {
  return useMutation({
    mutationFn: ({ id, data }: EditUserParams) =>
      request.put(`/users/${id}`, data).then((res) => res.data),
  });
};
