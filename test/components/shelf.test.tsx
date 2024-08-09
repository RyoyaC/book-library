import BookCardComponent from "@/components/bookCard";
import ShelfComponent from "@/components/shelf";
import { ShelfBooks } from "@/types/bookTypes";
import { render, screen } from "@testing-library/react";

describe("Shelfコンポーネントのテスト", () => {
  describe("正しい情報を表示する", () => {
    let shelfData: ShelfBooks;
    beforeEach(() => {
      // Arranges
      shelfData = {
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
      };
    });
    it("棚の名前を表示する", async () => {
      // Arrange

      // Act
      render(<ShelfComponent {...shelfData} />);

      // Assert
      const message = await screen.findByText("棚1");
      expect(message).toBeInTheDocument();
    });

    it("棚に含まれる書籍のタイトルをすべて表示する", async () => {
      // Arrange

      // Act
      render(<ShelfComponent {...shelfData} />);

      // Assert
      const message1 = await screen.findByText(
        "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築"
      );
      expect(message1).toBeInTheDocument();

      const message2 = await screen.findByText(
        "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築2"
      );
      expect(message2).toBeInTheDocument();

      const message3 = await screen.findByText(
        "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築3"
      );
      expect(message3).toBeInTheDocument();
    });
  });
});
