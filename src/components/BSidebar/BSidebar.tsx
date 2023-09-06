import Drawer from "@mui/material/Drawer";

import { FlexStyle } from "./styles";
import { useSidebarDrawer } from "@/core/contexts/SidebarContext";
import { sectionsDrawer } from "@/constants/drawer.constants";
import { SideBarNav } from "./SideBarNav";

export function BSidebar(): JSX.Element {
  const { isOpen, close, isTablet } = useSidebarDrawer();
  return (
    <>
      {isTablet ? (
        <Drawer
          open={isOpen}
          onClose={close}
          ModalProps={{
            keepMounted: false,
          }}
        >
          <FlexStyle is_close={!isOpen ? 1 : 0} as="aside">
            <SideBarNav sections={sectionsDrawer} />
          </FlexStyle>
        </Drawer>
      ) : (
        <FlexStyle is_close={!isOpen ? 1 : 0} as="aside">
          <SideBarNav sections={sectionsDrawer} />
        </FlexStyle>
      )}
    </>
  );
}