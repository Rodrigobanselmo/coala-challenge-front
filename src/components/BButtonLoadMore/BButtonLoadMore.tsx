import { FC } from "react";

import { Button } from "@mui/material";

import { ButtonLoadMoreListProps } from "./types";

export const BButtonLoadMore: FC<ButtonLoadMoreListProps> = ({
  canLoadMore,
  fetchNextPage,
  isFetchingNextPage,
}) => {
  return (
    <Button
      onClick={() => fetchNextPage()}
      variant="outlined"
      sx={{ width: 200 }}
    >
      {isFetchingNextPage
        ? "carregando..."
        : !canLoadMore
        ? "Mostrar mais"
        : "Não há mais livros"}
    </Button>
  );
};
