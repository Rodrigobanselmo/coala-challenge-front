import { IBook } from "@/core/interfaces/IBook";
import {
  StyledAuthors,
  StyledBackgroundImage,
  StyledExchangeButton,
  StyledCard,
  StyledInfoContainer,
  StyledTitle,
} from "./styles";
import Image from "next/image";
import { useState } from "react";
import { BBookCardProps } from "./types";

export const BBookCard = ({
  book,
  buttonLabel,
  onClickButton,
}: BBookCardProps) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickButton = async () => {
    if (!onClickButton || isLoading) return;
    setIsLoading(true);
    onClickButton(book).finally(() => setIsLoading(false));
  };

  return (
    <StyledCard
      onMouseEnter={() => setIsButtonVisible(true)}
      onMouseLeave={() => setIsButtonVisible(false)}
    >
      <StyledBackgroundImage>
        <Image
          src={book.thumbnail || "/images/book-placeholder.png"}
          alt={book.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </StyledBackgroundImage>
      <StyledInfoContainer>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledAuthors>{book.authors?.join(", ")}</StyledAuthors>
        {onClickButton && (
          <StyledExchangeButton
            onClick={handleClickButton}
            is_visible={isButtonVisible}
            variant="contained"
            color="secondary"
            disabled={isLoading}
          >
            {isLoading ? "carregando..." : buttonLabel}
          </StyledExchangeButton>
        )}
      </StyledInfoContainer>
    </StyledCard>
  );
};
