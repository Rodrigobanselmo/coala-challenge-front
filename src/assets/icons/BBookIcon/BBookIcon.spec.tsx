import React from "react";
import { render, screen } from "@testing-library/react";
import { BBookIcon } from "./BBookIcon";

describe("BBookIcon", () => {
  it("renders without errors", () => {
    render(<BBookIcon />);
    const icon = screen.getByTestId("AutoStoriesIcon");

    expect(icon).toBeInTheDocument();
    expect(icon).toMatchSnapshot();
  });

  it("applies custom props", () => {
    render(<BBookIcon fontSize="large" color="primary" />);

    const icon = screen.getByTestId("AutoStoriesIcon");
    expect(icon).toMatchSnapshot();
  });
});
