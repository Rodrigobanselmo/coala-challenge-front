import { useAuth } from "../../core/contexts/AuthContext";
import { Button } from "@mui/material";
import { useState } from "react";
import { CardProfile } from "./components/CardProfile";
import {
  StykedCard,
  StyledAuthors,
  StyledBookBox,
  StyledBookInfo,
  StyledImageBox,
  StyledTitle,
} from "./styles";
import { BBookCardProps } from "./types";

export const BBookExchangeCard = ({
  bookExchange,
  buttonLabel,
  onClickButton,
}: BBookCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleClickButton = async () => {
    if (!onClickButton || isLoading) return;
    setIsLoading(true);
    onClickButton(bookExchange).finally(() => setIsLoading(false));
  };

  const interestBook = bookExchange.interestBook;
  const askingBook = bookExchange.askingBook;

  return (
    <StykedCard>
      <StyledBookBox>
        <StyledImageBox
          src={interestBook?.thumbnail || "/images/book-placeholder.png"}
          alt={interestBook?.title || "livro-placeholder"}
          height={100}
          width={66}
        />
        <StyledBookInfo>
          <StyledTitle>{interestBook?.title}</StyledTitle>
          <StyledAuthors>{interestBook?.authors?.join(", ")}</StyledAuthors>
        </StyledBookInfo>
      </StyledBookBox>
      <Button sx={{ height: 50, m: "auto" }}>tocar</Button>
      <StyledBookBox>
        {askingBook?.thumbnail && (
          <StyledImageBox
            src={askingBook?.thumbnail || "/images/book-placeholder.png"}
            alt={askingBook?.title || "livro-placeholder"}
            height={100}
            width={66}
          />
        )}
        <CardProfile user={user} />
        <StyledBookInfo>
          <StyledTitle>{askingBook?.title}</StyledTitle>
          <StyledAuthors>{askingBook?.authors?.join(", ")}</StyledAuthors>
        </StyledBookInfo>
      </StyledBookBox>
    </StykedCard>
  );
};
