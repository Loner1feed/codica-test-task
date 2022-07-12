import { render, screen } from "@testing-library/react";
import { WeatherIcon } from "./WeatherIcon";

describe("WeatherIcon component", () => {
  test("renders correctly", () => {
    render(<WeatherIcon icon="10n" size="small" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
