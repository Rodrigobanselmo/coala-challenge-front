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

import { BEmptyBlockProps } from "./types";

export const BEmptyBlock: FC<BEmptyBlockProps> = ({ text, endComponent }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 20,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
      {endComponent}
    </Paper>
  );
};
