import React, { FC } from "react";

import { Global } from "@emotion/react";

import globalStyles from "../../core/styles/globalStyles";
import { StyledBoxContent, StyledBoxSidebar, StyledGridBox } from "./styles";
import { BSidebar } from "@/components/BSidebar";
import { BHeader } from "@/components/BHeader";

const DefaultLayout: FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <main>
      <Global styles={globalStyles} />
      <StyledGridBox p={2} pl={0}>
        <StyledBoxSidebar>
          <BSidebar />
        </StyledBoxSidebar>
        <StyledBoxContent borderRadius={3}>
          <BHeader />
          {children}
        </StyledBoxContent>
      </StyledGridBox>
    </main>
  );
};

export default DefaultLayout;
