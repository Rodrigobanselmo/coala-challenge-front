import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BBookCard } from "./BBookCard";
import { IBook } from "@/core/interfaces/IBook";

// Mocked book data for testing
const mockBook: IBook = {
  title: "Test Book",
  authors: ["Author 1", "Author 2"],
  thumbnail: "/test-image.png",
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("BBookCard", () => {
  const mockButtonLabel = "Test Button";
  const mockOnClickButton = jest.fn();

  it("matches the snapshot", () => {
    const { container } = render(
      <BBookCard book={mockBook} buttonLabel="Test Button" />
    );

    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with button", () => {
    const { container } = render(
      <BBookCard
        book={mockBook}
        buttonLabel="Test Button"
        onClickButton={async () => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders the book card with provided data", () => {
    render(
      <BBookCard
        book={mockBook}
        buttonLabel={mockButtonLabel}
        onClickButton={mockOnClickButton}
      />
    );

    const titleElement = screen.getByText(mockBook.title);
    const authorsElement = screen.getByText(mockBook.authors?.join(", ") || "");
    const buttonElement = screen.getByText(mockButtonLabel);
    const imageElement = screen.getByAltText(mockBook.title);

    expect(titleElement).toBeInTheDocument();
    expect(authorsElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  it("calls onClickButton when the button is clicked", async () => {
    render(
      <BBookCard
        book={mockBook}
        buttonLabel={mockButtonLabel}
        onClickButton={mockOnClickButton}
      />
    );

    const buttonElement = screen.getByText(mockButtonLabel);

    fireEvent.click(buttonElement);

    expect(mockOnClickButton).toHaveBeenCalledWith(mockBook);

    await waitFor(() => {
      expect(screen.getByText("carregando...")).toBeInTheDocument();
    });
  });

  it("shows the button on mouse hover", () => {
    render(
      <BBookCard
        book={mockBook}
        buttonLabel={mockButtonLabel}
        onClickButton={mockOnClickButton}
      />
    );

    const cardElement = screen.getByTestId("StyledCard");

    fireEvent.mouseEnter(cardElement);

    expect(screen.getByText(mockButtonLabel)).toBeVisible();
  });

  it("hides the button on mouse leave", () => {
    render(<BBookCard book={mockBook} buttonLabel={mockButtonLabel} />);

    const cardElement = screen.getByTestId("StyledCard");

    fireEvent.mouseEnter(cardElement);
    fireEvent.mouseLeave(cardElement);

    expect(screen.queryByText(mockButtonLabel)).not.toBeInTheDocument();
  });
});
