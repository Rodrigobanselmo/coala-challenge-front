import { Box, Icon, Typography, styled } from "@mui/material";

import { useSidebarDrawer } from "@/core/contexts/SidebarContext";
import { ActiveLink } from "../ActiveLink";
import { LinkStyle } from "./styles";
import { INavLinkProps } from "./types";

const BText = styled(Typography)``;

export function NavLink({
  href,
  icon,
  text,
  onClick,
  children,
  ...rest
}: INavLinkProps): JSX.Element {
  const { isOpen } = useSidebarDrawer();
  return (
    <>
      <Box maxWidth={"100%"}>
        <ActiveLink href={href} passHref>
          <LinkStyle py="0.75rem" px={8} {...rest}>
            <Icon
              component={icon}
              sx={{
                fontSize: 24,
                alignSelf: "center",
                ml: isOpen ? 0 : 2,
              }}
            />
            <Box>
              <BText
                ml={8}
                fontSize={"1rem"}
                fontWeight="medium"
                align="left"
                sx={{
                  width: "17.8rem",
                  height: isOpen ? "fit-content" : 22,
                  opacity: isOpen ? "1" : "0",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                {text}
              </BText>
            </Box>
          </LinkStyle>
        </ActiveLink>
      </Box>
    </>
  );
}
