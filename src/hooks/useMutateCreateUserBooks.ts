import { QueryEnum } from "@/core/enums/query.enums";
import { IErrorResponse } from "@/core/interfaces/IErrorResponse";
import {
  IApiCreateBooks,
  createUserBook,
} from "@/core/services/api/createUserBook";
import { queryClient } from "@/core/services/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

export function useMutateCreateUserBooks() {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(async (data: IApiCreateBooks) => createUserBook(data), {
    onSuccess: async (resp) => {
      if (resp) queryClient.invalidateQueries([QueryEnum.USERS_BOOKS]);

      enqueueSnackbar("O livro foi adicionado à sua biblioteca com sucesso.", {
        variant: "success",
      });
      return resp;
    },
    onError: (error: IErrorResponse) => {
      if (error.response?.data)
        enqueueSnackbar(error.response.data.message, { variant: "error" });
    },
  });
}
