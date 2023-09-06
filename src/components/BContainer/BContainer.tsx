import React, { FC, ReactNode } from "react";

import { Box } from "@mui/material";

import { SContainerProps } from "./types";

export const BContainer: FC<{ children: ReactNode } & SContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Box px={[10, 10, 15]} py={[10, 10, 15]} {...props}>
      {children}
    </Box>
  );
};
