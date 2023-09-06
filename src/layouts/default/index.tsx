import React, { FC } from "react";

import { Global } from "@emotion/react";

import globalStyles from "../../core/styles/globalStyles";
import { STBoxContent, STBoxSidebar, STGridBox } from "./styles";
import { BSidebar } from "@/components/BSidebar";
import { BHeader } from "@/components/BHeader";

const DefaultLayout: FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <main>
      <Global styles={globalStyles} />
      <STGridBox p={2} pl={0}>
        <STBoxSidebar>
          <BSidebar />
        </STBoxSidebar>
        <STBoxContent borderRadius={3}>
          <BHeader />
          {children}
        </STBoxContent>
      </STGridBox>
    </main>
  );
};

export default DefaultLayout;
