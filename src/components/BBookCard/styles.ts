import { Box, Button, IconButton, Typography, styled } from "@mui/material";

export const StyledGridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

export const StyledCard = styled(Box)`
  border-radius: 16px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  position: relative;
  min-height: 400px;
  margin: 5px;
  min-width: 200px;
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledTitle = styled("h2")`
  margin: 0;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const StyledAuthors = styled(Typography)`
  margin-top: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledExchangeButton = styled(Button)<{ is_visible: number }>`
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

export const StyledBackgroundImage = styled(Box)`
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.divider};
  border-radius: 16px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

export const StyledInfoContainer = styled(Box)`
  width: 100%;
  padding: 16px;
`;
