import queryString from "query-string";
import { api } from "../apiClient";
import { IBook } from "@/core/interfaces/IBook";
import { ApiRoutesEnum } from "@/core/enums/api-routes.enums";
import { IPagination } from "@/core/interfaces/IPagination";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";
import { AxiosRequestConfig } from "axios";

export interface IApiFindUsersBooks {
  search?: string;
}

export const getFindUsersBooks = async (
  query?: IApiFindUsersBooks,
  pagination?: IPagination,
  config?: AxiosRequestConfig
) => {
  const queries = queryString.stringify({ ...query, ...pagination });

  const response = await api.get<IPaginationResult<IBook[]>>(
    `${ApiRoutesEnum.USERS_BOOKS}?${queries}`,
    config
  );

  return response.data;
};
