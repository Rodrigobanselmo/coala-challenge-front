export type IBook = {
  id: number;
  title: string;
  description: string;
  authors?: string[];
  categories?: string[];
  pageCount?: number;
  googleId?: string;
  publishedAt?: Date;
  language?: string;
  smallThumbnail?: string;
  thumbnail?: string;
  updatedAt: Date;
  createdAt: Date;
  deletedAt?: Date;
};
