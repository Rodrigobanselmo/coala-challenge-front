export type IUser = {
  id: string;
  email: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
  deletedAt?: Date | null;
  photoUrl: string | null;
};
