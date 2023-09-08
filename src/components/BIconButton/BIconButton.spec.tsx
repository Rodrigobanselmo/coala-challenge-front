import React from "react";
import { render } from "@testing-library/react";
import { BIconButton } from "./BIconButton";

describe("BIconButton", () => {
  it("matches the snapshot", () => {
    const props = {
      children: "Button Label",
    };

    const { container } = render(<BIconButton {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when loading", () => {
    const props = {
      loading: true,
      children: "Button Label 2",
    };

    const { container } = render(<BIconButton {...props} />);
    expect(container).toMatchSnapshot();
  });
});
