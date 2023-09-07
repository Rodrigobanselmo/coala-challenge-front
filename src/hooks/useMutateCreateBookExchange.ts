import { QueryEnum } from "@/core/enums/query.enums";
import { IErrorResponse } from "@/core/interfaces/IErrorResponse";
import {
  IApiCreateInterestUsersBook,
  createBookExchange,
} from "@/core/services/api/createBookExchange";
import {
  IApiCreateBooks,
  createUserBook,
} from "@/core/services/api/createUserBook";
import { queryClient } from "@/core/services/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

export function useMutateCreateBookExchange() {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    async (data: IApiCreateInterestUsersBook) => createBookExchange(data),
    {
      onSuccess: async (resp) => {
        if (resp) queryClient.invalidateQueries([QueryEnum.BOOKS_EXCHANGE]);

        enqueueSnackbar(
          "interesse de troca criada com sucesso, aguarde a confirmação do outro usuário.",
          {
            variant: "success",
          }
        );
        return resp;
      },
      onError: (error: IErrorResponse) => {
        if (error.response?.data)
          enqueueSnackbar(error.response.data.message, { variant: "error" });
      },
    }
  );
}
