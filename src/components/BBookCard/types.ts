import { IBook } from "@/core/interfaces/IBook";
import { CircularProgressProps } from "@mui/material/CircularProgress";
import { IconButtonProps } from "@mui/material/IconButton";

export type BBookCardProps = {
  book: IBook;
  buttonLabel?: string;
  onClickButton?: (book: IBook) => Promise<void>;
};
