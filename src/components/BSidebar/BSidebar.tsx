import Drawer from "@mui/material/Drawer";

import { sectionsDrawer } from "@/constants/drawer.constants";
import { SideBarNav } from "./SideBarNav";
import { StyledFlex } from "./styles";

export function BSidebar({
  isOpen,
  close,
  isTablet,
}: {
  isOpen: boolean;
  isTablet: boolean;
  close: () => void;
}): JSX.Element {
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
          <StyledFlex is_close={!isOpen ? 1 : 0} as="aside">
            <SideBarNav sections={sectionsDrawer} />
          </StyledFlex>
        </Drawer>
      ) : (
        <StyledFlex is_close={!isOpen ? 1 : 0} as="aside">
          <SideBarNav sections={sectionsDrawer} />
        </StyledFlex>
      )}
    </>
  );
}
