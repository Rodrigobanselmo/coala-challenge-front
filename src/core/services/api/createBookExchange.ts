import { ApiRoutesEnum } from "@/core/enums/api-routes.enums";
import { IBookExchange } from "@/core/interfaces/IBookExchange";
import { api } from "../apiClient";

export interface IApiCreateInterestUsersBook {
  interetUserId: string;
  interestBookId: number;
}

export const createBookExchange = async (body: IApiCreateInterestUsersBook) => {
  const response = await api.post<IBookExchange>(
    ApiRoutesEnum.BOOK_EXCHANGE_CREATE,
    body
  );

  return response.data;
};
