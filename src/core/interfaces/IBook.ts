export type IBook = {
  id: number;
  title: string;
  thumbnail?: string;
  description: string;
  authors?: string[];
  categories?: string[];
  pageCount?: number;
  googleId?: string;
  publishedAt?: Date;
  language?: string;
  smallThumbnail?: string;
  updatedAt: Date;
  createdAt: Date;
  deletedAt?: Date;
};
