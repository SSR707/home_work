import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDeleteUsers = () => {
  return useMutation({
    mutationFn: (id: string) =>
      request.delete(`/users/${id}`).then((res) => res.data),
  });
};
