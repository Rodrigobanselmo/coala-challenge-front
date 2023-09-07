// import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Text from "@mui/material/Typography";

import { IAvatarProps } from "./types";
import { useAuth } from "../../core/contexts/AuthContext";

export function BAvatar({ name, photoUrl }: IAvatarProps): JSX.Element {
  return (
    <Avatar
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
    >
      {name.split(" ")[0][0]}
      {name.split(" ")[1]?.[0] || ""}
    </Avatar>
  );
}
