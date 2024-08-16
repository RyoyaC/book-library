import BookDetailCardComponent from "@/components/bookDetailCard";
import React from "react";
import { bookData } from "../bookData";

export default function Page() {
  return (
    <div className="py-10">
      <BookDetailCardComponent {...bookData} />
    </div>
  );
}
