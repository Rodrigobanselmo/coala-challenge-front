import { FC, ReactNode } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { StyledBIconButton } from "./styles";
import { SIconButtonProps } from "./types";

export const BIconButton: FC<{ children?: ReactNode } & SIconButtonProps> = ({
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
