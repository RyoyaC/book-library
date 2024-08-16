import BookCardComponent from "@/components/bookCard";
import { Book } from "@/types/bookTypes";
import { render, screen } from "@testing-library/react";

describe("正しい情報を表示する", () => {
  it("書籍のタイトルを表示する", async () => {
    // Arrange
    const book: Book = {
      isbn: "9784798184777",
      title: "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
      image: "https://www.seshop.com/static/images/product/26334/L.png",
      author: ["米久保 剛"],
      publisher: "翔泳社",
      publishedAt: new Date(2024, 7, 22),
    };

    // Act
    render(<BookCardComponent {...book} />);

    // Assert
    const message = await screen.findByText(
      "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築"
    );
    expect(message).toBeInTheDocument();
  });
});
