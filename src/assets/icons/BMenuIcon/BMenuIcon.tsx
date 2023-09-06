import React, { FC } from "react";

import { IIconMuiProps } from "@/core/interfaces/IIconMuiProps";
import MenuIcon from "@mui/icons-material/Menu";

export const BMenuIcon: FC<IIconMuiProps> = ({ ...props }) => {
  return <MenuIcon {...props} />;
};

export default MenuIcon;
