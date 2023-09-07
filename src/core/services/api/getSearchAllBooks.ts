import queryString from "query-string";
import { api } from "../apiClient";
import { IBook } from "@/core/interfaces/IBook";
import { ApiRoutesEnum } from "@/core/enums/api-routes.enums";
import { IPagination } from "@/core/interfaces/IPagination";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";

export interface IApiSearchBooks {
  search?: string;
}

export const getSearchAllBooks = async (
  query?: IApiSearchBooks,
  pagination?: IPagination
) => {
  const queries = queryString.stringify({ ...query, ...pagination });

  const response = await api.get<IBook[]>(
    `${ApiRoutesEnum.SEARCH_ALL_BOOKS}?${queries}`
  );

  return response.data;
};
