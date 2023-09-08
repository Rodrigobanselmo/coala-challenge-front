import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies["nextauth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      if (error?.response && error.response?.status === 401) {
        rejectAuth();
      }

      return Promise.reject(error);
    }
  );

  return api;
}

const rejectAuth = () => {
  if (typeof window !== "undefined") {
    signOut();
  } else {
    return Promise.reject();
  }
};
