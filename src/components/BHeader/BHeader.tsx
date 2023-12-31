import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { useAuth } from "../../core/contexts/AuthContext";
import { useSidebarDrawer } from "../../core/contexts/SidebarContext";
import { Profile } from "./Profile";
import { Session } from "./Session";

export function BHeader(): JSX.Element {
  const { open, isTablet } = useSidebarDrawer();
  const { user } = useAuth();

  return (
    <Stack
      direction="row"
      component="header"
      mx={[2, 4, 6]}
      px={[4, 6, 8]}
      sx={{
        borderBottom: "1px solid",
        borderColor: "gray.200",
        alignItems: "center",
        height: ["3rem", "4rem", "5rem"],
      }}
    >
      <Session />

      {isTablet && (
        <IconButton
          aria-label="Open navigation"
          onClick={open}
          sx={{
            ml: "-3px",
          }}
        >
          <MenuIcon sx={{ fontSize: "1.6rem" }} />
        </IconButton>
      )}

      <Stack
        direction="row"
        sx={{
          alignItems: "center",
        }}
        ml="auto"
      >
        <Profile user={user} />
      </Stack>
    </Stack>
  );
}
