// import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Text from "@mui/material/Typography";

import { IProfileProps } from "./types";
import { useAuth } from "../../../../core/contexts/AuthContext";
import { BAvatar } from "@/components/BAvatar";

export function CardProfile({ user }: IProfileProps): JSX.Element {
  const name = user?.name || "";
  const email = user?.email || "";

  return (
    <Box style={{ alignItems: "center", display: "flex" }}>
      <BAvatar photoUrl={user?.photoUrl} name={name} />
      {name && (
        <Box ml={8} textAlign="left">
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
    </Box>
  );
}
