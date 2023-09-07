import React, { FC, Fragment } from "react";

import { BBookIcon } from "@/assets/icons/BBookIcon";
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { HeaderListProps } from "./types";
import { BPageTitle } from "@/components/BPageTitle";

export const HeaderList: FC<HeaderListProps> = ({
  searchInputValue,
  onSearchInputChange,
  placeholder,
  inputRef,
  title,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchInputChange(event.target.value);
  };

  return (
    <Box mb={20}>
      <BPageTitle icon={BBookIcon}>{title}</BPageTitle>
      <TextField
        inputRef={inputRef}
        variant="outlined"
        type="text"
        value={searchInputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        sx={{ width: 500, backgroundColor: "white", borderRadius: 1 }}
      />
    </Box>
  );
};
