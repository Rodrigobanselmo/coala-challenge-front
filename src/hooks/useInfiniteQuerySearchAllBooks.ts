import { QueryEnum } from "@/core/enums/query.enums";
import { IBook } from "@/core/interfaces/IBook";
import { IApiFindBooks } from "@/core/services/api/getFindBooks";
import { getSearchAllBooks } from "@/core/services/api/getSearchAllBooks";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteQuerySearchAllBooks(
  query: IApiFindBooks,
  initialData?: IBook[]
) {
  const fetchFunction = async ({ pageParam = 1 }) => {
    return getSearchAllBooks(
      { search: query.search },
      { page: pageParam, limit: 20 }
    );
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery([QueryEnum.SEARCH_ALL_BOOKS, query], {
    queryFn: fetchFunction,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    refetchOnWindowFocus: false,
    enabled: !!query.search,
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
  };
}
