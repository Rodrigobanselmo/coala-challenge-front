import React, { FC } from "react";

import { IIconMuiProps } from "@/core/interfaces/IIconMuiProps";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const BBookIcon: FC<IIconMuiProps> = ({ ...props }) => {
  return <AutoStoriesIcon {...props} />;
};

export default AutoStoriesIcon;
