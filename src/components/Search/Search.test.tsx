import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Search } from "./Search";

describe("Search component", () => {
  test("Renders correctly", () => {
    render(<Search />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Inputs correctly", () => {
    render(<Search />);

    userEvent.type(screen.getByRole("textbox"), "Odesa");

    expect(screen.getByRole("textbox")).toHaveAttribute("value", "Odesa");
  });
});
