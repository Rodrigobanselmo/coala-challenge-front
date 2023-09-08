import React from "react";
import { render } from "@testing-library/react";
import { BButtonLoadMore } from "./BButtonLoadMore";

const mockProps = {
  canLoadMore: true,
  fetchNextPage: () => {},
  isFetchingNextPage: false,
};

describe("BButtonLoadMore", () => {
  it("matches the snapshot when can load more", () => {
    const { container } = render(<BButtonLoadMore {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when fetching next page", () => {
    const { container } = render(
      <BButtonLoadMore {...mockProps} isFetchingNextPage={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when cannot load more", () => {
    const { container } = render(
      <BButtonLoadMore {...mockProps} canLoadMore={false} />
    );
    expect(container).toMatchSnapshot();
  });
});
