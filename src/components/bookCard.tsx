import { Book } from "@/types/bookTypes";
import React from "react";

export default function BookCardComponent(props: Book) {
  return (
    <div className="card card-compact bg-base-100 w-48 shadow-wl card-bordered">
      <figure>
        <img src={props.image} className="book-image" />
      </figure>

      <div className="card-body">
        <div className="card-title book-title text-xs">{props.title}</div>
      </div>
    </div>
  );
}
