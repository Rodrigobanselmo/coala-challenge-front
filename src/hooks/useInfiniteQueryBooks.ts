import { QueryEnum } from "@/core/enums/query.enums";
import { IBook } from "@/core/interfaces/IBook";
import { IApiFindBooks, getFindBooks } from "@/core/services/api/getFindBooks";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteQueryBooks(
  query: IApiFindBooks,
  initialData?: IBook[]
) {
  const fetchFunction = async ({ pageParam = 1 }) => {
    const result = await getFindBooks(
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
    refetch,
    isLoading,
  } = useInfiniteQuery([QueryEnum.BOOKS, query], {
    queryFn: fetchFunction,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
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
    refetch,
  };
}
