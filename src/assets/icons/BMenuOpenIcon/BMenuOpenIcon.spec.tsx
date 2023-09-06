import React from "react";
import { render, screen } from "@testing-library/react";
import { BMenuOpenIcon } from "./BMenuOpenIcon";

describe("BMenuOpenIcon", () => {
  it("renders without errors", () => {
    render(<BMenuOpenIcon />);
    const icon = screen.getByTestId("MenuOpenIcon");

    expect(icon).toBeInTheDocument();
    expect(icon).toMatchSnapshot();
  });

  it("applies custom props", () => {
    render(<BMenuOpenIcon fontSize="large" color="primary" />);

    const icon = screen.getByTestId("MenuOpenIcon");
    expect(icon).toMatchSnapshot();
  });
});
