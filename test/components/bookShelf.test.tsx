import BookShelfComponent from "@/components/bookShelf";
import { BookShelf } from "@/types/bookTypes";
import { render, screen } from "@testing-library/react";

describe("正しい情報を表示する", () => {
  let bookShelfData: BookShelf;
  beforeEach(() => {
    bookShelfData = [
      {
        bookList: [
          {
            isbn: "9784798184777",
            title:
              "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
            image: "https://www.seshop.com/static/images/product/26334/L.png",
            author: ["米久保 剛"],
            publishedAt: new Date(2024, 7, 22),
          },
          {
            isbn: "9784798184778",
            title:
              "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築2",
            image: "https://www.seshop.com/static/images/product/26334/L.png",
            author: ["米久保 剛"],
            publishedAt: new Date(2024, 7, 22),
          },
          {
            isbn: "9784798184779",
            title:
              "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築3",
            image: "https://www.seshop.com/static/images/product/26334/L.png",
            author: ["米久保 剛"],
            publishedAt: new Date(2024, 7, 22),
          },
        ],
        shelfInfo: {
          id: "shelf1",
          name: "棚1",
          location: "右本棚の上",
        },
      },
      {
        bookList: [
          {
            isbn: "9784798184777",
            title:
              "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
            image: "https://www.seshop.com/static/images/product/26334/L.png",
            author: ["米久保 剛"],
            publishedAt: new Date(2024, 7, 22),
          },
          {
            isbn: "9784798184778",
            title:
              "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築2",
            image: "https://www.seshop.com/static/images/product/26334/L.png",
            author: ["米久保 剛"],
            publishedAt: new Date(2024, 7, 22),
          },
        ],
        shelfInfo: {
          id: "shelf2",
          name: "棚2",
          location: "右本棚の中",
        },
      },
      {
        bookList: [
          {
            isbn: "9784798184777",
            title:
              "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
            image: "https://www.seshop.com/static/images/product/26334/L.png",
            author: ["米久保 剛"],
            publishedAt: new Date(2024, 7, 22),
          },
        ],
        shelfInfo: {
          id: "shelf3",
          name: "棚3",
          location: "右本棚の下",
        },
      },
    ];
  });
  it("登録された棚の名前を表示する", async () => {
    // Act
    render(<BookShelfComponent bookShelf={bookShelfData} />);

    // Assert
    const message1 = await screen.findByText("棚1");
    expect(message1).toBeInTheDocument();

    const message2 = await screen.findByText("棚2");
    expect(message2).toBeInTheDocument();

    const message3 = await screen.findByText("棚3");
    expect(message3).toBeInTheDocument();
  });
});
