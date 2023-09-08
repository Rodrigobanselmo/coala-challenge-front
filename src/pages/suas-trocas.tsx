import { BBooksExchangeList } from "@/components/BBooksExchangeList";
import { BBooksList } from "@/components/BBooksList";
import { BContainer } from "@/components/BContainer";
import { BEmptyBlock } from "@/components/BEmptyBlock";
import { useAuth } from "@/core/contexts/AuthContext";
import { RoutesEnum } from "@/core/enums/routes.enums";
import { IBook } from "@/core/interfaces/IBook";
import { IBookExchange } from "@/core/interfaces/IBookExchange";
import { getFindBooks } from "@/core/services/api/getFindBooks";
import { getFindBooksExchange } from "@/core/services/api/getFindBooksExchange";
import { getFindUsersBooks } from "@/core/services/api/getFindUsersBooks";
import { getSearchAllBooks } from "@/core/services/api/getSearchAllBooks";
import { useInfiniteQueryBooks } from "@/hooks/useInfiniteQueryBooks";
import { useInfiniteQueryBooksExchanges } from "@/hooks/useInfiniteQueryBooksExchanges";
import { useInfiniteQuerySearchAllBooks } from "@/hooks/useInfiniteQuerySearchAllBooks";
import { useInfiniteQueryUsersBooks } from "@/hooks/useInfiniteQueryUsersBooks";
import { useMutateCreateUserBooks } from "@/hooks/useMutateCreateUserBooks";
import { useSearchValue } from "@/hooks/useSearchValue";
import { Button } from "@mui/material";
import { GetServerSideProps } from "next/types";
import { parseCookies } from "nookies";
import { useEffect } from "react";

interface BooksExchangePageProps {
  exchangeData: IBookExchange[];
}

export const getServerSideProps: GetServerSideProps<
  BooksExchangePageProps
> = async (context) => {
  try {
    const { req, query } = context;
    const { search } = query;

    const cookies = parseCookies({ req });
    const token = cookies["nextauth.token"] || null;
    const headers = { Authorization: `Bearer ${token}` };

    if (token) {
      const exchangeData = await getFindBooksExchange(
        { search: search as string },
        {},
        { headers }
      );

      return {
        props: { exchangeData: exchangeData.data },
      };
    }

    return {
      props: { exchangeData: [] },
    };
  } catch (error) {
    return {
      props: { exchangeData: [] },
    };
  }
};

export default function Home({ exchangeData }: BooksExchangePageProps) {
  const { googleSignIn, user } = useAuth();

  const { debouncedSearchInputValue, searchInputValue, setSearchInputValue } =
    useSearchValue({ field: "search", pathname: RoutesEnum.EXCHANGE_BOOKS });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useInfiniteQueryBooksExchanges(
    { search: debouncedSearchInputValue },
    exchangeData
  );

  const addUserBookMutation = useMutateCreateUserBooks();

  const addUserBook = async (book: IBook) => {
    if (user) {
      await addUserBookMutation.mutateAsync({
        googleId: book.googleId,
        smallThumbnail: book.smallThumbnail,
        title: book.title,
        authors: book.authors,
        categories: book.categories,
        language: book.language,
        thumbnail: book.thumbnail,
      });
    } else {
      googleSignIn();
    }
  };

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  return (
    <BContainer flex={1} width={"100%"}>
      {data && (
        <BBooksExchangeList
          title="Suas Trocas"
          buttonLabel="Adicionar"
          // onClickCardButton={addUserBook}
          data={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isFetching}
          onSearchInputChange={setSearchInputValue}
          searchInputValue={searchInputValue}
          loadMore={false}
          {...(!user && {
            emptyBookComponent: (
              <BEmptyBlock
                text="Você precisa estar logado para adicionar livros na sua biblioteca."
                endComponent={
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => googleSignIn()}
                  >
                    Logar
                  </Button>
                }
              />
            ),
          })}
        />
      )}
    </BContainer>
  );
}
