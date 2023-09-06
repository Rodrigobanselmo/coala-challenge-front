import React, { FC } from "react";

import { IIconMuiProps } from "@/core/interfaces/IIconMuiProps";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export const BMenuOpenIcon: FC<IIconMuiProps> = ({ ...props }) => {
  return <MenuOpenIcon {...props} />;
};

export default MenuOpenIcon;
