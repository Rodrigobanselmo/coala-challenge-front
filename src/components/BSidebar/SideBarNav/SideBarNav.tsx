import { Stack } from "@mui/material";
import { useRouter } from "next/router";

import { LogoNavbar } from "../Logo";
import { StyledBoxContainer, StyledBoxSection } from "./styles";
import { useSidebarDrawer } from "@/core/contexts/SidebarContext";
import { IDrawerSection } from "@/constants/drawer.constants";
import { NavSection } from "../NavSection";
import { NavLink } from "../NavLink";

export function SideBarNav({
  sections,
}: {
  sections: IDrawerSection[];
}): JSX.Element {
  const { isTablet, open, close } = useSidebarDrawer();

  return (
    <StyledBoxContainer
      onMouseEnter={isTablet ? () => {} : open}
      onMouseLeave={isTablet ? () => {} : close}
      py={12}
    >
      <Stack mb={0} px={8} spacing={4}>
        <LogoNavbar />
      </Stack>
      <StyledBoxSection pt={10}>
        <Stack px={0} spacing={8}>
          {sections.map((category) => {
            if (category.items.length === 0) return null;
            return (
              <NavSection key={category.data.text} title={category.data.text}>
                {category.items.map((item) => {
                  return (
                    <NavLink
                      key={item.text}
                      href={item.href}
                      icon={item.Icon}
                      text={item.text}
                    />
                  );
                })}
              </NavSection>
            );
          })}
        </Stack>
      </StyledBoxSection>
    </StyledBoxContainer>
  );
}
