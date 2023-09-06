import React from "react";
import { render, screen } from "@testing-library/react";
import BCloseIcon from "./BCloseIcon";

describe("BCloseIcon", () => {
  it("renders without errors", () => {
    render(<BCloseIcon />);
    const icon = screen.getByTestId("CloseOutlinedIcon");

    expect(icon).toBeInTheDocument();
    expect(icon).toMatchSnapshot();
  });

  it("applies custom props", () => {
    render(<BCloseIcon fontSize="large" color="primary" />);

    const icon = screen.getByTestId("CloseOutlinedIcon");
    expect(icon).toMatchSnapshot();
  });
});
