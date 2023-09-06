import React, { FC, ReactNode } from "react";

import { Box, Icon, Typography } from "@mui/material";
import { SPageTitleProps } from "./types";

export const BPageTitle: FC<{ children?: ReactNode } & SPageTitleProps> = ({
  children,
  icon,
  ...props
}) => (
  <Box mb={12} mt={0}>
    <Box display="flex" alignItems="center">
      <Icon
        component={icon}
        sx={{ fontSize: "22px", mr: 4, color: "text.main" }}
      />
      <Typography
        fontSize={["1.3rem", "1.3rem", "1.563rem"]}
        variant={"h1"}
        {...props}
      >
        {children}
      </Typography>
    </Box>
  </Box>
);
