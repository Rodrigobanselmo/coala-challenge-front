import React, { FC } from "react";

import { IIconMuiProps } from "@/core/interfaces/IIconMuiProps";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

export const BExchangeBook: FC<IIconMuiProps> = ({ ...props }) => {
  return <PublishedWithChangesIcon {...props} />;
};

export default PublishedWithChangesIcon;
