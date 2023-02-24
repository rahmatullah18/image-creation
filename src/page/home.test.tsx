import { screen, render } from "@testing-library/react";
import { Home } from "./home";
describe("home", () => {
  test("home component render correctly", () => {
    render(<Home />);
    const headingElement = screen.getByText(
      "Find images based on the words you have in mind."
    );
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });
});
