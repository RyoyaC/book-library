import React from "react";

export type BookCardProps = {
  isbn: string;
  title: string;
  image: string;
};

export type Book = {
  isbn: string;
  title: string;
  image: string;
  author: string[];
  publishedAt: Date;
};

const bookData: BookCardProps = {
  isbn: "9784798184777",
  title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
  image: "https://www.seshop.com/static/images/product/26334/L.png",
};

export default function BookCard(props: BookCardProps) {
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