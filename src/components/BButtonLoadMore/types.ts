import { IBook } from "@/core/interfaces/IBook";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";
import { InfiniteData } from "@tanstack/react-query";
import { ElementType, ReactNode } from "react";

export interface ButtonLoadMoreListProps {
  fetchNextPage: () => void;
  canLoadMore: boolean;
  isFetchingNextPage: boolean;
}
