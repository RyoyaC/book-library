import BookDetailCardComponent from "@/components/bookDetailCard";
import { OwnedBook } from "@/types/bookTypes";
import { render, screen } from "@testing-library/react";

describe("正しい情報を表示する", () => {
  it("書籍のタイトルを表示する", async () => {
    // Arrange
    const book: OwnedBook = {
      isbn: "9784798184777",
      title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
      image: "https://www.seshop.com/static/images/product/26334/L.png",
      author: ["米久保 剛"],
      publisher: "翔泳社",
      publishedAt: new Date(2024, 7, 22),
      location: {
        shelfId: "shelf1",
        name: "棚1",
        description: "右本棚の上",
      },
    };

    // Act
    render(<BookDetailCardComponent {...book} />);

    // Assert
    const message = await screen.findByText(
      "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築"
    );
    expect(message).toBeInTheDocument();
  });

  it("書籍のタイトルを表示する", async () => {
    // Arrange
    const book: OwnedBook = {
      isbn: "9784798184777",
      title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
      image: "https://www.seshop.com/static/images/product/26334/L.png",
      author: ["米久保 剛"],
      publisher: "翔泳社",
      publishedAt: new Date(2024, 7, 22),
      location: {
        shelfId: "shelf1",
        name: "棚1",
        description: "右本棚の上",
      },
    };

    // Act
    render(<BookDetailCardComponent {...book} />);

    // Assert
    const message = await screen.findByText("棚1");
    expect(message).toBeInTheDocument();
  });
});
