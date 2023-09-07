import LogoSimpleIcon from "@/assets/brand/logo-simple";
import { Stack, styled, Typography } from "@mui/material";

export const StyledStack = styled(Stack)`
  width: 100%;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledLogoSimple = styled(LogoSimpleIcon)`
  min-width: 2rem;
  min-height: 2rem;
  margin-top: -4px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
  width: 100%;
  color: ${({ theme }) => theme.palette.grey[100]};
`;
