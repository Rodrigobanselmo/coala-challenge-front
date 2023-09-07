import { QueryEnum } from "@/core/enums/query.enums";
import { IBook } from "@/core/interfaces/IBook";
import { IErrorResponse } from "@/core/interfaces/IErrorResponse";
import { IApiFindBooks } from "@/core/services/api/getFindBooks";
import { getFindUsersBooks } from "@/core/services/api/getFindUsersBooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

export function useInfiniteQueryUsersBooks(
  query: IApiFindBooks,
  initialData?: IBook[]
) {
  const { enqueueSnackbar } = useSnackbar();
  const fetchFunction = async ({ pageParam = 1 }) => {
    const result = await getFindUsersBooks(
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
  } = useInfiniteQuery([QueryEnum.USERS_BOOKS, query], {
    queryFn: fetchFunction,
    retry: (_, error: IErrorResponse) => {
      if (error.response.status === 401) {
        enqueueSnackbar("Você precisa estar logado para ver seus livros", {
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
