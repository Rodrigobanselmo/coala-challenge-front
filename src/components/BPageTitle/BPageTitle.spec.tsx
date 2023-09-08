import React from "react";
import { render } from "@testing-library/react";
import { BPageTitle } from "./BPageTitle";
import { BBookIcon } from "@/assets/icons/BBookIcon";

describe("BPageTitle", () => {
  it("matches the snapshot", () => {
    const props = {
      children: "Page Title",
      icon: BBookIcon,
    };

    const { container } = render(<BPageTitle {...props} />);
    expect(container).toMatchSnapshot();
  });
});
