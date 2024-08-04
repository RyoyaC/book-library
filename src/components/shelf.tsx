import React from "react";
import BookCard, { Book, BookCardProps } from "./bookCard";

const bookList: Book[] = [
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

export default function Shelf() {
  return (
    <div className="card card-compact card-bordered w-5/6 bg-white">
      {/* Bookのリストで複数の書籍を表示する */}
      <div className="card-body">
        <div className="card-title">棚A</div>
        <div className="shelf-books flex flex-row flex-wrap gap-3">
          {bookList.map((book) => (
            // ISBNでは一意にならない可能性があるので、別のキーを検討する
            // 反例：同じ書籍を複数保有する場合
            <React.Fragment key={book.isbn}>
              <BookCard book={book} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
