import React from "react";
import { render } from "@testing-library/react";
import { HeaderList } from ".";
import { HeaderListProps } from "./types";

describe("HeaderList", () => {
  it("matches the snapshot", () => {
    const props: HeaderListProps = {
      searchInputValue: "Search Value",
      onSearchInputChange: () => {},
      placeholder: "Search Placeholder",
      title: "Header Title",
    };

    const { container } = render(<HeaderList {...props} />);
    expect(container).toMatchSnapshot();
  });
});
