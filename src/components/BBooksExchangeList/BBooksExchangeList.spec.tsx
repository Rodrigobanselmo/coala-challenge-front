import React from "react";
import { render } from "@testing-library/react";
import { BBooksExchangeList } from "./BBooksExchangeList";
import { BBooksExchangeProps } from "./types";
import { IBookExchange } from "@/core/interfaces/IBookExchange";
import { InfiniteData } from "@tanstack/react-query";
import { StatusEnum } from "@/core/enums/status.enum";

const mockBookExchange: IBookExchange = {
  status: StatusEnum.PENDING,
  deletedAt: null,
  id: 1,
  askingBookId: 1,
  interetUserId: "1",
  interestBookId: 1,
  targetUserId: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  interestBook: {
    title: "Interest Book",
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    authors: ["Author 1", "Author 2"],
    thumbnail: "/interest-book.png",
  },
  askingBook: {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Asking Book",
    authors: ["Author A", "Author B"],
    thumbnail: "/asking-book.png",
  },
};

const mockData: InfiniteData<IBookExchange[]> = {
  pageParams: [],
  pages: [[mockBookExchange], [mockBookExchange]],
};

const mockProps: BBooksExchangeProps = {
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
  title: "Book Exchange List",
};

jest.mock("../../core/contexts/AuthContext", () => {
  return {
    useAuth: () => ({
      user: {
        id: "1",
        email: "qwe@qwe.com",
      },
    }),
  };
});

describe("BBooksExchangeList", () => {
  it("matches the snapshot when loading", () => {
    const { container } = render(
      <BBooksExchangeList {...mockProps} isLoading={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with data", () => {
    const { container } = render(<BBooksExchangeList {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with no data", () => {
    const { container } = render(
      <BBooksExchangeList {...mockProps} data={{ pages: [], pageParams: [] }} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with empty book component", () => {
    const { container } = render(
      <BBooksExchangeList
        {...mockProps}
        emptyBookComponent={<div>Custom Empty Component</div>}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
