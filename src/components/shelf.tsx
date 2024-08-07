import React from "react";
import BookCardComponent from "./bookCard";
import { Book, ShelfBooks } from "@/types/bookTypes";

export default function ShelfComponent(props: ShelfBooks) {
  return (
    <div className="card card-compact card-bordered bg-white">
      {/* Bookのリストで複数の書籍を表示する */}
      <div className="card-body">
        <div className="card-title">{props.shelfInfo.name}</div>
        <div className="shelf-books flex flex-row flex-wrap gap-3">
          {props.bookList.map((book: Book) => (
            // ISBNでは一意にならない可能性があるので、別のキーを検討する
            // 反例：同じ書籍を複数保有する場合
            <React.Fragment key={book.isbn}>
              <BookCardComponent {...book} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
