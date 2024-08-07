export type Book = {
  isbn: string;
  title: string;
  image: string;
  author: string[];
  publishedAt: Date;
};

export type Shelf = {
  id: string;
  name: string;
  location: string;
};

export type ShelfBooks = {
  bookList: Book[];
  shelfInfo: Shelf;
};

export type BookShelf = ShelfBooks[];
