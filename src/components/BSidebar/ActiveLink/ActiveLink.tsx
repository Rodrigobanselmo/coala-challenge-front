import { cloneElement } from "react";

import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

import { IActiveLinkProps } from "./types";

export function ActiveLink({
  children,
  ...rest
}: IActiveLinkProps): JSX.Element {
  const { asPath } = useRouter();

  const isBasePath = asPath == "/";

  const getIsActive = () => {
    if (isBasePath) {
      if (rest.href == "/") return true;
    } else {
      if (rest.href == "/") return false;

      return (
        asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.href))
      );
    }
  };

  return (
    <Link href={rest.href || ""} {...rest}>
      {cloneElement<any>(children, {
        is_active: getIsActive() ? 1 : 0,
      })}
    </Link>
  );
}
