import { IconButton, styled } from "@mui/material";

export const StyledBIconButton = styled(IconButton)<{
  bg?: string;
  disabled?: boolean;
}>`
  ${({ bg }) =>
    bg &&
    `
    background-color: ${bg};
    box-shadow: rgb(0 0 0 / 5%) 0px 3px 12px;

    &:hover {
      background-color: ${bg};
      filter: brightness(0.9);
    }

    &:active {
      background-color: ${bg};
    }
  `}

  ${({ disabled }) => disabled && `opacity: 0.4;`}
`;
