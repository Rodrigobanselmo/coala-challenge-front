import { ElementType } from "react";

import { LinkProps } from "@mui/material";

export interface INavLinkProps extends LinkProps {
  icon: ElementType;
  text: string;
  href?: string;
}
