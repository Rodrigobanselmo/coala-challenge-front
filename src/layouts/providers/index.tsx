import "@fontsource/poppins";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React, { FC } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import theme from "../../configs/theme";
import { AuthProvider } from "../../core/contexts/AuthContext";
import { queryClient } from "../../core/services/queryClient";
import { SidebarDrawerProvider } from "@/core/contexts/SidebarContext";

const QueryClientProviderComponent = QueryClientProvider as any;

const DefaultProviders: FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <EmotionProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          preventDuplicate
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          style={{ maxWidth: "28rem", paddingRight: 40 }}
        >
          <AuthProvider>
            <QueryClientProviderComponent client={queryClient}>
              <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
            </QueryClientProviderComponent>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </EmotionProvider>
  );
};

export default DefaultProviders;
