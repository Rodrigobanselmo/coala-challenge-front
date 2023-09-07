import { ApiRoutesEnum } from "@/core/enums/api-routes.enums";
import { IBook } from "@/core/interfaces/IBook";
import { api } from "../apiClient";

export interface IApiCreateBooks {
  title: string;
  thumbnail?: string;
  authors?: string[];
  language?: string;
  smallThumbnail?: string;
  categories?: string[];
  googleId?: string;
}

export const createUserBook = async (body?: IApiCreateBooks) => {
  const response = await api.post<IBook>(ApiRoutesEnum.USERS_BOOKS, body);

  return response.data;
};
