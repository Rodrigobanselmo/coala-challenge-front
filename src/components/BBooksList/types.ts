import { IBook } from "@/core/interfaces/IBook";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";
import { InfiniteData } from "@tanstack/react-query";
import { ElementType, ReactNode } from "react";

export interface BBooksListProps {
  data: InfiniteData<IBook[]>;
  searchInputValue: string;
  onSearchInputChange: (value: string) => void;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  loadMore?: boolean;
  buttonLabel?: string;
  onClickCardButton?: (book: IBook) => Promise<void>;
  placeholder?: string;
  emptyBookComponent?: ReactNode;
  emptyBookLable?: string;
  title: string;
}
