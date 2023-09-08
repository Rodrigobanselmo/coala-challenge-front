import React, { FC } from "react";

import { Global } from "@emotion/react";

import globalStyles from "../../core/styles/globalStyles";
import { StyledBoxContent, StyledBoxSidebar, StyledGridBox } from "./styles";
import { BSidebar } from "@/components/BSidebar";
import { BHeader } from "@/components/BHeader";
import { useSidebarDrawer } from "@/core/contexts/SidebarContext";

const DefaultLayout: FC<React.PropsWithChildren<any>> = ({ children }) => {
  const { isOpen, close, isTablet } = useSidebarDrawer();

  return (
    <main>
      <Global styles={globalStyles} />
      <StyledGridBox p={2} pl={0}>
        <StyledBoxSidebar>
          <BSidebar isOpen={isOpen} close={close} isTablet={isTablet} />
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
