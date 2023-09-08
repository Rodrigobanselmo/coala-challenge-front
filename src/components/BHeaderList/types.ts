import { IBook } from "@/core/interfaces/IBook";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";
import { InfiniteData } from "@tanstack/react-query";
import { ElementType, ReactNode } from "react";

export interface HeaderListProps {
  searchInputValue: string;
  onSearchInputChange: (value: string) => void;
  placeholder?: string;
  title: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}
