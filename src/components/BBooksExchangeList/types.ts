import { IBookExchange } from "@/core/interfaces/IBookExchange";
import { InfiniteData } from "@tanstack/react-query";
import { ReactNode } from "react";

export interface BBooksExchangeProps {
  data: InfiniteData<IBookExchange[]>;
  searchInputValue: string;
  onSearchInputChange: (value: string) => void;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  loadMore?: boolean;
  buttonLabel?: string;
  onClickCardButton?: (book: IBookExchange) => Promise<void>;
  placeholder?: string;
  title: string;
  emptyBookComponent?: ReactNode;
  emptyBookLable?: string;
}
