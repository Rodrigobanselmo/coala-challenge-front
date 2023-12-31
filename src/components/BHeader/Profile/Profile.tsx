// import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import Box from "@mui/material/Box";
import Text from "@mui/material/Typography";

import { BAvatar } from "@/components/BAvatar";
import { IProfileProps } from "./types";

export function Profile({ user }: IProfileProps): JSX.Element {
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
      <BAvatar photoUrl={user?.photoUrl} name={name} />
    </Box>
  );
}
