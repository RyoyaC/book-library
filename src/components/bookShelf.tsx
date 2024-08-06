import React from "react";
import ShelfComponent, { bookList, Shelf } from "./shelf";
import { ShelfBooks } from "./shelf";

export type BookShelf = Shelf[];
const bookShelf = [
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
export default function BookShelfComponent() {
  return (
    <div className="flex flex-col gap-y-3">
      {bookShelf.map((shelfBooks: ShelfBooks) => (
        <React.Fragment key={shelfBooks.shelfInfo.id}>
          <ShelfComponent {...shelfBooks} />
        </React.Fragment>
      ))}
    </div>
  );
}
