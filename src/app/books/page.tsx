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
    <div className="flex justify-center my-8">
      <Shelf {...shelfBooks} />
    </div>
  );
}
