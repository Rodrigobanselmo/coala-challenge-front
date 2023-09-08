import { BBooksList } from "@/components/BBooksList";
import { BContainer } from "@/components/BContainer";
import { useAuth } from "@/core/contexts/AuthContext";
import { RoutesEnum } from "@/core/enums/routes.enums";
import { IBook } from "@/core/interfaces/IBook";
import { getFindBooks } from "@/core/services/api/getFindBooks";
import { useInfiniteQueryBooks } from "@/hooks/useInfiniteQueryBooks";
import { useMutateCreateBookExchange } from "@/hooks/useMutateCreateBookExchange";
import { useSearchValue } from "@/hooks/useSearchValue";
import { GetServerSideProps } from "next/types";
import { parseCookies } from "nookies";
import { useEffect } from "react";

interface HomePageProps {
  books: IBook[];
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  try {
    const { req, query } = context;
    const { search } = query;

    const cookies = parseCookies({ req });
    const token = cookies["nextauth.token"] || null;
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
    console.log("fetch home");
    const books = await getFindBooks({ search: search as string }, undefined, {
      headers,
    });

    return {
      props: {
        books: books.data,
      },
    };
  } catch (error) {
    return {
      props: { books: [] },
    };
  }
};

export default function WelcomePage({ books }: HomePageProps) {
  const { googleSignIn, user } = useAuth();

  const { debouncedSearchInputValue, searchInputValue, setSearchInputValue } =
    useSearchValue({ field: "search", pathname: RoutesEnum.WELCOME_PAGE });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteQueryBooks({ search: debouncedSearchInputValue }, books);

  const addUserBookMutation = useMutateCreateBookExchange();

  const addBookExchange = async (book: IBook) => {
    if (user) {
      await addUserBookMutation.mutateAsync({
        interestBookId: book.id,
        interetUserId: user.id,
      });
    } else {
      await googleSignIn();
    }
  };

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  return (
    <BContainer flex={1} width={"100%"}>
      {data && (
        <BBooksList
          title="Livros para troca"
          data={data}
          fetchNextPage={fetchNextPage}
          onClickCardButton={addBookExchange}
          buttonLabel="Mostrar Interesse"
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
          onSearchInputChange={setSearchInputValue}
          searchInputValue={searchInputValue}
          loadMore
        />
      )}
    </BContainer>
  );
}
