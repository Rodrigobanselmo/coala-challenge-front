import { IBook } from "@/core/interfaces/IBook";
import { IBookExchange } from "@/core/interfaces/IBookExchange";

export type BBookCardProps = {
  bookExchange: IBookExchange;
  buttonLabel?: string;
  onClickButton?: (book: IBookExchange) => Promise<void>;
};
