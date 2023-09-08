import React from "react";
import { render } from "@testing-library/react";
import { BBooksList } from "./BBooksList";
import { BBooksListProps } from "./types";
import { InfiniteData } from "@tanstack/react-query";
import { IBook } from "@/core/interfaces/IBook";

// Define mock data and props for testing
const mockData: InfiniteData<IBook[]> = {
  pageParams: [],
  pages: [
    [
      {
        title: "Interest Book",
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        authors: ["Author 1", "Author 2"],
        thumbnail: "/interest-book.png",
      },
      {
        title: "Interest Book4",
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        authors: ["Author 1", "Author 2"],
        thumbnail: "/interest-book.png",
      },
    ],
    [
      {
        title: "Interest Book 2",
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        authors: ["Author 1", "Author 2"],
        thumbnail: "/interest-book.png",
      },
    ],
  ],
};

const mockProps: BBooksListProps = {
  data: mockData,
  fetchNextPage: () => {},
  isFetchingNextPage: false,
  isLoading: false,
  onSearchInputChange: () => {},
  searchInputValue: "",
  buttonLabel: "Test Button",
  onClickCardButton: async () => {},
  loadMore: true,
  placeholder: "pesquisar...",
  emptyBookComponent: null,
  emptyBookLable: "Nenhum livro encontrado",
  title: "Book List",
};

describe("BBooksList", () => {
  it("matches the snapshot when loading", () => {
    const { container } = render(
      <BBooksList {...mockProps} isLoading={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with data", () => {
    const { container } = render(<BBooksList {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with no data", () => {
    const { container } = render(
      <BBooksList {...mockProps} data={{ pages: [], pageParams: [] }} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with empty book component", () => {
    const { container } = render(
      <BBooksList
        {...mockProps}
        emptyBookComponent={<div>Custom Empty Component</div>}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
