import React from "react";
import { render, screen } from "@testing-library/react";
import { BYourBookIcon } from "./BYourBookIcon";

describe("BYourBookIcon", () => {
  it("renders without errors", () => {
    render(<BYourBookIcon />);
    const icon = screen.getByTestId("LocalLibraryIcon");

    expect(icon).toBeInTheDocument();
    expect(icon).toMatchSnapshot();
  });

  it("applies custom props", () => {
    render(<BYourBookIcon fontSize="large" color="primary" />);

    const icon = screen.getByTestId("LocalLibraryIcon");
    expect(icon).toMatchSnapshot();
  });
});
