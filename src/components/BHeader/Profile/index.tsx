// import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Text from "@mui/material/Typography";

import { IProfileProps } from "./types";
import { useAuth } from "../../../core/contexts/AuthContext";

export function Profile({}: IProfileProps): JSX.Element {
  const { user } = useAuth();

  const name = user?.name || "";
  const email = user?.email || "";

  return (
    <Box style={{ alignItems: "center", display: "flex", cursor: "pointer" }}>
      {name && (
        <Box mr={8} textAlign="right">
          <Text color={"text.main"} sx={{ fontSize: "0.99rem" }}>
            {name}
          </Text>
          <Text
            color={"text.main"}
            mt={-1}
            sx={{ opacity: 0.5, fontSize: "0.81rem" }}
          >
            {email}
          </Text>
        </Box>
      )}
      <Avatar
        src={user?.photoUrl || "/icons/profile.svg"}
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
    </Box>
  );
}
