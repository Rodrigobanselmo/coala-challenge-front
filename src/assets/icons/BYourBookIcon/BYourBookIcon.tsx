import React, { FC } from "react";

import { IIconMuiProps } from "@/core/interfaces/IIconMuiProps";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const BYourBookIcon: FC<IIconMuiProps> = ({ ...props }) => {
  return <LocalLibraryIcon {...props} />;
};

export default LocalLibraryIcon;
