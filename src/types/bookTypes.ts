export type Book = {
  isbn: string;
  title: string;
  image: string;
  author: string[];
  publisher: string;
  publishedAt: Date;
};

export type OwnedBook = {
  isbn: string;
  title: string;
  image: string;
  author: string[];
  publisher: string;
  publishedAt: Date;
  location: {
    shelfId: string;
    name: string;
    description: string;
  };
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
