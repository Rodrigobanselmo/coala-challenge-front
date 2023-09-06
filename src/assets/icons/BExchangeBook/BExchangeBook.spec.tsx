import React from "react";
import { render, screen } from "@testing-library/react";
import { BExchangeBook } from "./BExchangeBook";

describe("BExchangeBook", () => {
  it("renders without errors", () => {
    render(<BExchangeBook />);
    const icon = screen.getByTestId("PublishedWithChangesIcon");

    expect(icon).toBeInTheDocument();
    expect(icon).toMatchSnapshot();
  });

  it("applies custom props", () => {
    render(<BExchangeBook fontSize="large" color="primary" />);

    const icon = screen.getByTestId("PublishedWithChangesIcon");
    expect(icon).toMatchSnapshot();
  });
});
