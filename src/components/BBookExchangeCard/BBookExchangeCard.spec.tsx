import React from "react";
import { render } from "@testing-library/react";
import { BBookExchangeCard } from "./BBookExchangeCard";
import { IBookExchange } from "@/core/interfaces/IBookExchange";
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

describe("BBookExchangeCard", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <BBookExchangeCard
        bookExchange={mockBookExchange}
        buttonLabel="Test Button"
        onClickButton={async () => {}}
      />
    );

    // Use Jest's snapshot feature to capture the rendered output
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with missing askingBook", () => {
    const { container } = render(
      <BBookExchangeCard
        bookExchange={{ ...mockBookExchange, askingBook: undefined }}
        buttonLabel="Test Button"
        onClickButton={async () => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with missing interestBook", () => {
    const { container } = render(
      <BBookExchangeCard
        bookExchange={{ ...mockBookExchange, interestBook: undefined }}
        buttonLabel="Test Button"
        onClickButton={async () => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
