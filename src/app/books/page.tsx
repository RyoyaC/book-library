import BookShelfComponent from "@/components/bookShelf";
import React from "react";
import { bookShelf } from "./bookData";

export default function Page() {
  return (
    <div className="flex justify-center py-8">
      <BookShelfComponent bookShelf={bookShelf} />
    </div>
  );
}
