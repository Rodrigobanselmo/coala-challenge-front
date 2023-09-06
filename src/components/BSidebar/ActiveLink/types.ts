import { ReactElement } from "react";

import { LinkProps } from "next/link";

export interface IActiveLinkProps extends Omit<LinkProps, "href" | "onClick"> {
  children: ReactElement;
  href?: string;
  canOpen?: boolean;
  isOpen?: boolean;
}
