import { BBooksList } from "@/components/BBooksList";
import { BContainer } from "@/components/BContainer";
import { BEmptyBlock } from "@/components/BEmptyBlock";
import { useAuth } from "@/core/contexts/AuthContext";
import { RoutesEnum } from "@/core/enums/routes.enums";
import { IBook } from "@/core/interfaces/IBook";
import { getFindBooks } from "@/core/services/api/getFindBooks";
import { getFindUsersBooks } from "@/core/services/api/getFindUsersBooks";
import { getSearchAllBooks } from "@/core/services/api/getSearchAllBooks";
import { useInfiniteQueryBooks } from "@/hooks/useInfiniteQueryBooks";
import { useInfiniteQuerySearchAllBooks } from "@/hooks/useInfiniteQuerySearchAllBooks";
import { useInfiniteQueryUsersBooks } from "@/hooks/useInfiniteQueryUsersBooks";
import { useMutateCreateUserBooks } from "@/hooks/useMutateCreateUserBooks";
import { useSearchValue } from "@/hooks/useSearchValue";
import { Button } from "@mui/material";
import { GetServerSideProps } from "next/types";
import { parseCookies } from "nookies";
import { useEffect } from "react";

interface YourBooksPageProps {
  books: IBook[];
}

export const getServerSideProps: GetServerSideProps<
  YourBooksPageProps
> = async (context) => {
  let books: IBook[] = [];
  try {
    const { req, query } = context;
    const { search } = query;

    const cookies = parseCookies({ req });
    const token = cookies["nextauth.token"] || null;
    const headers = { Authorization: `Bearer ${token}` };

    if (search) {
      books = await getSearchAllBooks({ search: search as string });
    } else {
      const booksData = await getFindUsersBooks(
        { search: search as string },
        {},
        { headers }
      );
      books = booksData.data;
    }

    return {
      props: { books },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { books },
    };
  }
};

export default function YourBooks({ books }: YourBooksPageProps) {
  const { googleSignIn, user } = useAuth();

  const { debouncedSearchInputValue, searchInputValue, setSearchInputValue } =
    useSearchValue({ field: "search", pathname: RoutesEnum.YOUR_BOOKS });

  const {
    data: dataSearch,
    fetchNextPage: fetchNextPageSearch,
    hasNextPage: hasNextPageSearch,
    isFetchingNextPage: isFetchingNextPageSearch,
    isFetching: isFetchingSearch,
  } = useInfiniteQuerySearchAllBooks(
    { search: debouncedSearchInputValue },
    books
  );

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteQueryUsersBooks({ search: debouncedSearchInputValue }, books);

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
      {data && !debouncedSearchInputValue && (
        <BBooksList
          title="Sua Biblioteca de Livros"
          data={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
          placeholder={"Pesquisar livro que deseja adicionar..."}
          onSearchInputChange={setSearchInputValue}
          searchInputValue={searchInputValue}
          buttonLabel="Remover Livros"
          emptyBookLable="Você ainda não adicionou nenhum livro na sua biblioteca."
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
      {dataSearch && debouncedSearchInputValue && (
        <BBooksList
          title="Sua Biblioteca de Livros"
          buttonLabel="Adicionar"
          onClickCardButton={addUserBook}
          data={dataSearch}
          fetchNextPage={fetchNextPageSearch}
          hasNextPage={hasNextPageSearch}
          isFetchingNextPage={isFetchingNextPageSearch}
          isLoading={isFetchingSearch}
          onSearchInputChange={setSearchInputValue}
          searchInputValue={searchInputValue}
          loadMore={false}
        />
      )}
    </BContainer>
  );
}
