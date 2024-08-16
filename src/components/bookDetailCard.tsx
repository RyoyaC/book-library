import { OwnedBook } from "@/types/bookTypes";
import React from "react";

export default function BookDetailCardComponent(props: OwnedBook) {
  return (
    <div>
      <div className="card card-bordered p-4 bg-white">
        <div className="card-body">
          <div className="flex">
            <div className="w-1/4">
              <figure>
                <img src={props.image} alt="" className="w-full h-auto" />
              </figure>
            </div>
            <div className="w-3/4 pl-4">
              <div className="text-xl font-bold mb-2">{props.title}</div>
              <div className="text-sm text-gray-500 mb-2">
                ISBN: {props.isbn}
              </div>
              <div className="text-sm text-gray-500 mb-2">
                著者: {props.author.join(", ")}
              </div>
              <div className="flex mb-2">
                <div className="w-1/2 text-sm text-gray-500">
                  出版社: {props.publisher}
                </div>
                <div className="w-1/2 text-sm text-gray-500 text-right">
                  出版年月日: {props.publishedAt.toLocaleDateString()}
                </div>
              </div>
              <div className="mt-4 p-4 border rounded">説明: description</div>
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex mb-2">
              <div className="w-1/4 text-sm text-gray-500">Location</div>
              <div className="w-3/4 text-sm text-gray-500 pl-4">
                {props.location.name}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {props.location.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
