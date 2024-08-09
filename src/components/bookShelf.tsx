import React from "react";
import ShelfComponent from "./shelf";
import { ShelfBooks, ShelfInfo } from "@/types/bookTypes";
import AddButtonComponent from "./addButton";

export type BookShelfProps = {
  bookShelf: ShelfBooks[];
};

export default function BookShelfComponent(props: BookShelfProps) {
  return (
    <div className="flex">
      <div className="flex flex-col gap-y-3">
        {props.bookShelf.map((shelfBooks: ShelfBooks) => (
          <React.Fragment key={shelfBooks.shelfInfo.id}>
            <ShelfComponent {...shelfBooks} />
          </React.Fragment>
        ))}
      </div>
      <AddButtonComponent />
    </div>
  );
}
