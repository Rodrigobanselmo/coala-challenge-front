import queryString from "query-string";
import { api } from "../apiClient";
import { IBook } from "@/core/interfaces/IBook";
import { ApiRoutesEnum } from "@/core/enums/api-routes.enums";
import { IPagination } from "@/core/interfaces/IPagination";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";

export interface IApiFindBooks {
  search?: string;
}

export const getFindBooks = async (
  query?: IApiFindBooks,
  pagination?: IPagination
) => {
  const queries = queryString.stringify({ ...query, ...pagination });

  const response = await api.get<IPaginationResult<IBook>>(
    `${ApiRoutesEnum.FIND_BOOKS}?${queries}`
  );

  return response.data;
};
