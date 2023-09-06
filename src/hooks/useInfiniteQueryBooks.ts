import { IBook } from "@/core/interfaces/IBook";
import { IPagination } from "@/core/interfaces/IPagination";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";
import { getFindBooks } from "@/core/services/api/getFindBooks";
import { IApiFindBooks } from "@/core/services/api/getFindBooks";
import { IApiSearchBooks } from "@/core/services/api/getSearchAllBooks";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteQueryBooks(
  query: IApiFindBooks,
  initData?: IPaginationResult<IBook>
) {
  const fetchFunction = async ({ pageParam = 1 }) => {
    return getFindBooks(
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
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchFunction,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  // if (data.)

  // const response = {
  //   data: data?.data || ([] as IEmployee[]),
  //   count: data?.count || 0,
  //   exams: data?.exams || [],
  // };

  // return {
  //   ...result,
  //   data: response.data,
  //   count: response.count,
  //   exams: response.exams,
  // };
}
