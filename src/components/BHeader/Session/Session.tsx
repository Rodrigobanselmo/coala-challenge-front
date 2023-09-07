import { Box, Button, Typography, styled } from "@mui/material";

import { useAuth } from "@/core/contexts/AuthContext";
import { ISessionProps } from "./types";

export function Session(props: ISessionProps): JSX.Element {
  const { user, googleSignIn, signOut } = useAuth();

  return (
    <Box display="flex">
      <Button
        variant={user ? "outlined" : "contained"}
        onClick={user ? signOut : googleSignIn}
        sx={{ mr: 10, minWidth: "100px" }}
      >
        {user ? "Sair" : "Entrar"}
      </Button>

      <Typography color="text.main" fontSize={["18px", "20px", "22px"]}>
        {user ? "Fializar Sessão" : "Iniciar Sessão"}
      </Typography>
    </Box>
  );
}
