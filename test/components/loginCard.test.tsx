import LoginCardComponent from "@/components/loginCard";
import { render, screen } from "@testing-library/react";

describe("正しい情報を表示する", () => {
  it("ユーザー名とパスワードのフォーム、ボタンを表示する", async () => {
    // Arrange

    // Act
    render(<LoginCardComponent />);

    // Assert
    const msgUserName = await screen.findByText("Username");
    expect(msgUserName).toBeInTheDocument();
    const msgPassword = await screen.findByText("Password");
    expect(msgPassword).toBeInTheDocument();

    const loginButton = await screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });
});
