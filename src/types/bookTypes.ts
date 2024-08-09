export type Book = {
  isbn: string;
  title: string;
  image: string;
  author: string[];
  publishedAt: Date;
};

export type ShelfInfo = {
  id: string;
  name: string;
  location: string;
};

export type ShelfBooks = {
  bookList: Book[];
  shelfInfo: ShelfInfo;
};

export type BookShelf = ShelfBooks[];
