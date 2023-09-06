import { IUser } from "./IUser";

export type ISession = {
  token: string;
  user: IUser;
};
