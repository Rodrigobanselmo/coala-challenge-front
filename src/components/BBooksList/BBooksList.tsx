import React, { FC, Fragment } from "react";

import { Button, LinearProgress } from "@mui/material";
import { BBookCard } from "../BBookCard";
import { StyledGridContainer } from "../BBookCard/styles";
import { BEmptyBlock } from "../BEmptyBlock";
import { BButtonLoadMore } from "../BButtonLoadMore";
import { StyledBoxContainerList } from "./styles";
import { BBooksListProps } from "./types";
import { HeaderList } from "../BHeaderList";

export const BBooksList: FC<BBooksListProps> = ({
  data,
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
  onSearchInputChange,
  searchInputValue,
  buttonLabel,
  onClickCardButton,
  loadMore = true,
  placeholder = "pesquisar...",
  emptyBookComponent,
  emptyBookLable = "Nenhum livro encontrado",
  title,
}: BBooksListProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const noMoreBooks = !!data?.pages?.[data?.pages?.length - 1]?.length;
  const emptyBooks = !data?.pages?.[0]?.length;

  const onFocuInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <HeaderList
        title={title}
        onSearchInputChange={onSearchInputChange}
        searchInputValue={searchInputValue}
        placeholder={placeholder}
        inputRef={inputRef}
      />
      {(isLoading || isFetchingNextPage) && <LinearProgress />}
      <StyledBoxContainerList>
        {!isLoading && (
          <>
            <StyledGridContainer>
              {data.pages.map((books, i) => (
                <Fragment key={i}>
                  {books.map((book) => (
                    <BBookCard
                      onClickButton={onClickCardButton}
                      book={book}
                      key={book.id || book.googleId}
                      buttonLabel={buttonLabel}
                    />
                  ))}
                </Fragment>
              ))}
            </StyledGridContainer>

            {loadMore && !emptyBooks && (
              <BButtonLoadMore
                canLoadMore={!noMoreBooks}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
              />
            )}

            {emptyBooks && (
              <>
                {emptyBookComponent ? (
                  emptyBookComponent
                ) : (
                  <BEmptyBlock
                    text={emptyBookLable}
                    endComponent={
                      <Button variant="outlined" onClick={() => onFocuInput()}>
                        Adicionar livro
                      </Button>
                    }
                  />
                )}
              </>
            )}
          </>
        )}
      </StyledBoxContainerList>
    </>
  );
};
