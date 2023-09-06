import { Box, Stack } from "@mui/material";

import { BoxStyledTitle, TextStyled } from "./styles";
import { INavSectionProps } from "./types";
import { useSidebarDrawer } from "@/core/contexts/SidebarContext";

export function NavSection({
  title,
  children,
  ...rest
}: INavSectionProps): JSX.Element {
  const { isOpen } = useSidebarDrawer();
  return (
    <Box {...rest}>
      <BoxStyledTitle color={isOpen ? "transparent" : "gray.700"} mx={8} px={4}>
        <TextStyled
          align="left"
          color="gray.400"
          fontSize={13}
          sx={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 15 : 2,
          }}
        >
          {title}
        </TextStyled>
      </BoxStyledTitle>
      <Stack spacing={0} mt={8}>
        {children}
      </Stack>
    </Box>
  );
}
