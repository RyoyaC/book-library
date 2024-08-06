import React from "react";
import BookCard, { Book, BookCardProps } from "./bookCard";
import BookShelf from "../app/books/page";

export const bookList: Book[] = [
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
export type Shelf = {
  id: string;
  name: string;
  location: string;
};
export type ShelfBooks = {
  bookList: Book[];
  shelfInfo: Shelf;
};

export default function Shelf(props: ShelfBooks) {
  return (
    <div className="card card-compact card-bordered w-5/6 bg-white">
      {/* Bookのリストで複数の書籍を表示する */}
      <div className="card-body">
        <div className="card-title">{props.shelfInfo.name}</div>
        <div className="shelf-books flex flex-row flex-wrap gap-3">
          {props.bookList.map((book: Book) => (
            // ISBNでは一意にならない可能性があるので、別のキーを検討する
            // 反例：同じ書籍を複数保有する場合
            <React.Fragment key={book.isbn}>
              <BookCard {...book} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
