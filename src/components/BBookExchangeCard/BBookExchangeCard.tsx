import { IBook } from "@/core/interfaces/IBook";
import {
  StyledAuthors,
  StyledExchangeButton,
  StykedCard,
  StyledBookInfo,
  StyledTitle,
  StyledBookBox,
  StyledImageBox,
} from "./styles";
import Image from "next/image";
import { useState } from "react";
import { BBookCardProps } from "./types";
import { useAuth } from "@/core/contexts/AuthContext";
import { Profile } from "../BHeader/Profile";
import { Box, Button } from "@mui/material";
import { CardProfile } from "./components/CardProfile";

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

  return (
    <StykedCard>
      {interestBook && (
        <StyledBookBox>
          <StyledImageBox
            src={interestBook.thumbnail || "/images/book-placeholder.png"}
            alt={interestBook.title}
            height={100}
            width={66}
          />
          <StyledBookInfo>
            <StyledTitle>{interestBook.title}</StyledTitle>
            <StyledAuthors>{interestBook.authors?.join(", ")}</StyledAuthors>
          </StyledBookInfo>
        </StyledBookBox>
      )}
      <Button>tocar</Button>
      {interestBook && (
        <StyledBookBox>
          <StyledImageBox
            src={interestBook.thumbnail || "/images/book-placeholder.png"}
            alt={interestBook.title}
            height={100}
            width={66}
          />
          {/* <CardProfile user={bookExchange.interetUser} /> */}
          <StyledBookInfo>
            <StyledTitle>{interestBook.title}</StyledTitle>
            <StyledAuthors>{interestBook.authors?.join(", ")}</StyledAuthors>
          </StyledBookInfo>
        </StyledBookBox>
      )}
    </StykedCard>
  );
};
