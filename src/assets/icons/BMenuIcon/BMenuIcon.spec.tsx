import React from "react";
import { render, screen } from "@testing-library/react";
import { BMenuIcon } from "./BMenuIcon";

describe("BMenuIcon", () => {
  it("renders without errors", () => {
    render(<BMenuIcon />);
    const icon = screen.getByTestId("MenuIcon");

    expect(icon).toBeInTheDocument();
    expect(icon).toMatchSnapshot();
  });

  it("applies custom props", () => {
    render(<BMenuIcon fontSize="large" color="primary" />);

    const icon = screen.getByTestId("MenuIcon");
    expect(icon).toMatchSnapshot();
  });
});
