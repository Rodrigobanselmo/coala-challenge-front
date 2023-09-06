export type IUser = {
  id: number;
  email: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
  deletedAt?: Date | null;
  photoUrl: string | null;
  googleExternalId: string | null;
};
