import { Icon, Typography } from "@mui/material";

import { STStack, STTypography, STLogoSimple } from "./styles";
import { useSidebarDrawer } from "@/core/contexts/SidebarContext";
import { BIconButton } from "@/components/BIconButton";
import { BMenuIcon } from "@/assets/icons/BMenuIcon";
import { BMenuOpenIcon } from "@/assets/icons/BMenuOpenIcon";

export function LogoNavbar(): JSX.Element {
  const { isOpen, open, close, setAlwaysOpen, alwaysOpen, isTablet } =
    useSidebarDrawer();

  return (
    <STStack direction="row">
      <STLogoSimple onClick={isOpen ? close : open} />
      <STTypography onClick={isOpen ? close : open} ml={2} align="left" noWrap>
        Book
        <Typography
          color={"primary.main"}
          fontSize={24}
          fontWeight="bold"
          ml={1}
          component="span"
        >
          Swap
        </Typography>
      </STTypography>
      <BIconButton
        color="info"
        onClick={() => (isTablet ? close() : setAlwaysOpen(!alwaysOpen))}
      >
        <Icon
          component={alwaysOpen ? BMenuOpenIcon : BMenuIcon}
          sx={{
            opacity: isOpen ? "1" : "0",
            transition: "opacity 0.5s ease",
            transitionDelay: isOpen ? "0.5s" : "0",
            alignSelf: "center",
            fontSize: "20",
            color: "grey.400",
          }}
        />
      </BIconButton>
    </STStack>
  );
}
