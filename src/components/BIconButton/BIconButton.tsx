import React, { FC } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { SIconButtonProps } from "./types";
import { StyledBIconButton } from "./styles";

export const BIconButton: FC<{ children?: any } & SIconButtonProps> = ({
  circularProps,
  loading,
  children,
  disabled,
  size,
  bg,
  ...props
}) => (
  <StyledBIconButton
    bg={bg}
    disabled={loading || disabled}
    size={size}
    {...props}
  >
    {loading ? (
      <CircularProgress size={size === "small" ? 20 : 22} {...circularProps} />
    ) : (
      children
    )}
  </StyledBIconButton>
);
