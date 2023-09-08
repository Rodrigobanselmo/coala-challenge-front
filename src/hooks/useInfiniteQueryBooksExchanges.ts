import { QueryEnum } from "@/core/enums/query.enums";
import { IBook } from "@/core/interfaces/IBook";
import { IBookExchange } from "@/core/interfaces/IBookExchange";
import { IErrorResponse } from "@/core/interfaces/IErrorResponse";
import {
  IApiFindExchangeBooks,
  getFindBooksExchange,
} from "@/core/services/api/getFindBooksExchange";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

export function useInfiniteQueryBooksExchanges(
  query: IApiFindExchangeBooks,
  initialData?: IBookExchange[]
) {
  const { enqueueSnackbar } = useSnackbar();
  const fetchFunction = async ({ pageParam = 1 }) => {
    const result = await getFindBooksExchange(
      { search: query.search },
      { page: pageParam, limit: 20 }
    );

    return result.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    failureReason,
    isLoading,
    refetch,
  } = useInfiniteQuery([QueryEnum.BOOKS_EXCHANGE, query], {
    queryFn: fetchFunction,
    retry: (_, error: IErrorResponse) => {
      if (error?.response?.status === 401 || error.response.status === 403) {
        enqueueSnackbar("Você precisa estar logado para ver suas trocas", {
          variant: "error",
        });
        return false;
      }
      return true;
    },
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    refetchOnWindowFocus: false,
    initialData: initialData
      ? { pageParams: [1], pages: [initialData] }
      : undefined,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
    isNeedingAuth: failureReason?.response?.status === 401,
    refetch,
  };
}
