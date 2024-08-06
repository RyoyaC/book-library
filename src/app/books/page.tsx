import BookShelfComponent from "@/components/bookShelf";
import Shelf, { bookList } from "@/components/shelf";
import React from "react";

export const shelfBooks = {
  bookList: bookList,
  shelfInfo: {
    id: "shelf1",
    name: "棚1",
    location: "右本棚の上",
  },
};
export default function BookShelf() {
  return (
    <div className="flex place-content-center py-8">
      <BookShelfComponent />
    </div>
  );
}
