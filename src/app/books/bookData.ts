import { Book } from "@/types/bookTypes";

export const bookList: Book[] = [
  // Key should be unique
  {
    isbn: "9784798184777",
    title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
    image: "https://www.seshop.com/static/images/product/26334/L.png",
    author: ["米久保 剛"],
    publishedAt: new Date(2024, 7, 22),
  },
  {
    isbn: "9784798184777",
    title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築2",
    image: "https://www.seshop.com/static/images/product/26334/L.png",
    author: ["米久保 剛"],
    publishedAt: new Date(2024, 7, 22),
  },
  {
    isbn: "9784798184777",
    title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築3",
    image: "https://www.seshop.com/static/images/product/26334/L.png",
    author: ["米久保 剛"],
    publishedAt: new Date(2024, 7, 22),
  },
  {
    isbn: "9784798184777",
    title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築3",
    image: "https://www.seshop.com/static/images/product/26334/L.png",
    author: ["米久保 剛"],
    publishedAt: new Date(2024, 7, 22),
  },
  {
    isbn: "9784798184777",
    title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築3",
    image: "https://www.seshop.com/static/images/product/26334/L.png",
    author: ["米久保 剛"],
    publishedAt: new Date(2024, 7, 22),
  },
];

export const bookShelf = [
  {
    bookList: bookList,
    shelfInfo: {
      id: "shelf1",
      name: "棚1",
      location: "右本棚の上",
    },
  },
  {
    bookList: bookList,
    shelfInfo: {
      id: "shelf2",
      name: "棚2",
      location: "右本棚の中",
    },
  },
  {
    bookList: bookList,
    shelfInfo: {
      id: "shelf3",
      name: "棚3",
      location: "右本棚の下",
    },
  },
];

export const bookData = {
  isbn: "9784798184777",
  title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
  image: "https://www.seshop.com/static/images/product/26334/L.png",
  author: ["米久保 剛"],
  publishedAt: new Date(2024, 7, 22),
};
