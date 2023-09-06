import React from "react";
import { render, screen } from "@testing-library/react";
import BArrowNextIcon from "./BArrowNextIcon";

describe("BArrowNextIcon", () => {
  it("renders without errors", () => {
    render(<BArrowNextIcon />);
    const icon = screen.getByTestId("ArrowForwardIosIcon");

    expect(icon).toBeInTheDocument();
    expect(icon).toMatchSnapshot();
  });

  it("applies custom props", () => {
    render(<BArrowNextIcon fontSize="large" color="primary" />);

    const icon = screen.getByTestId("ArrowForwardIosIcon");
    expect(icon).toMatchSnapshot();
  });
});
