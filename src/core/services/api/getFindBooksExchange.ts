import queryString from "query-string";
import { api } from "../apiClient";
import { IBook } from "@/core/interfaces/IBook";
import { ApiRoutesEnum } from "@/core/enums/api-routes.enums";
import { IPagination } from "@/core/interfaces/IPagination";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";
import { IBookExchange } from "@/core/interfaces/IBookExchange";
import { AxiosRequestConfig } from "axios";

export interface IApiFindExchangeBooks {
  search?: string;
}

export const getFindBooksExchange = async (
  query?: IApiFindExchangeBooks,
  pagination?: IPagination,
  config?: AxiosRequestConfig
) => {
  const queries = queryString.stringify({ ...query, ...pagination });

  const response = await api.get<IPaginationResult<IBookExchange[]>>(
    `${ApiRoutesEnum.BOOK_EXCHANGE}?${queries}`,
    config
  );

  return response.data;
};
