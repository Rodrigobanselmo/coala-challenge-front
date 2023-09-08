// import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import Avatar from "@mui/material/Avatar";

import { IAvatarProps } from "./types";

export function BAvatar({ name, photoUrl }: IAvatarProps): JSX.Element {
  return (
    <Avatar
      data-testid="BAvatar"
      src={photoUrl || "/icons/profile.svg"}
      alt={name}
      sx={{
        backgroundColor: "gray.700",
        width: ["32px", "48px"],
        height: ["32px", "48px"],
        "& .MuiAvatar-img": {
          backgroundColor: "background.default",
          objectFit: "cover",
        },
      }}
    />
  );
}
