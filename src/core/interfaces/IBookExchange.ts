import { StatusEnum } from "../enums/status.enum";
import { IBook } from "./IBook";
import { IUser } from "./IUser";

export type IBookExchange = {
  id: number;
  interestBookId: number;
  targetUserId: string;
  askingBookId: number;
  interetUserId: string;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
  interestBook?: IBook;
  targetUser?: IUser;
  askingBook?: IBook;
  interetUser?: IUser;
  status: StatusEnum;
};
