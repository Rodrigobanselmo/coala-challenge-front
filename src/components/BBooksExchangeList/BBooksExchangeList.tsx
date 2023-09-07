import React, { FC, Fragment } from "react";

import { Box, Button, LinearProgress } from "@mui/material";
import { BBookCard } from "../BBookCard";
import { StyledGridContainer } from "../BBookCard/styles";
import { BEmptyBlock } from "../BEmptyBlock";
import { BButtonLoadMore } from "../BButtonLoadMore";
import { HeaderList } from "../BHeaderList";
import { StyledBoxContainerList } from "./styles";
import { BBooksExchangeProps } from "./types";
import { BBookExchangeCard } from "../BBookExchangeCard";

export const BBooksExchangeList: FC<BBooksExchangeProps> = ({
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
}: BBooksExchangeProps) => {
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
            <Box
              display="flex"
              flexDirection="column"
              gap={10}
              width="100%"
              position="relative"
            >
              {data.pages.map((booksExchanges, i) => (
                <Fragment key={i}>
                  {booksExchanges.map((bookExchange) => (
                    <Fragment key={bookExchange.id}>
                      <BBookExchangeCard
                        // onClickButton={onClickCardButton}
                        bookExchange={bookExchange}
                        buttonLabel={buttonLabel}
                      />
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </Box>

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
