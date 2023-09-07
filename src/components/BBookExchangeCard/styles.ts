import { Box, Button, IconButton, Typography, styled } from "@mui/material";
import Image from "next/image";

export const StykedCard = styled(Box)`
  display: flex;
  align-items: stretch;
  padding: 20px;
  overflow-x: hidden;
`;

export const StyledBookBox = styled(Box)`
  display: flex;
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 8px;
`;

export const StyledBookInfo = styled(Box)`
  flex: 1;
  padding: 0 10px;
  white-space: pre-wrap;
`;

export const StyledImageBox = styled(Image)`
  border-radius: 8px;
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.divider};
  max-width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledTitle = styled("h2")`
  font-size: 1rem;
`;

export const StyledAuthors = styled(Typography)``;

export const StyledExchangeButton = styled(Button)<{ is_visible?: boolean }>`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;
  margin-top: 16px;
  opacity: ${(props) => (props.is_visible ? "1" : "0")};
  position: absolute;
  bottom: 16px;
  left: 50%;
  width: 80%;
  transform: translateX(-50%);
  font-size: 0.8rem;
`;

export const StyledButton = styled(Button)``;
