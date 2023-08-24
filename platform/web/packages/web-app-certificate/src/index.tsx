import React from "react";
import {
  AppProvider,
  G2ConfigBuilder
} from "@smartb/g2-providers";
import { ThemeContextProvider } from "@smartb/g2-themes";
import { Typography } from "@mui/material";
import { languages } from "i18n";
import { theme } from "Themes";
import { QueryClient } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { AppRouter } from "App/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 86400000 //stale time set to one day
    }
  }
})

//@ts-ignore
G2ConfigBuilder(window._env_)

//@ts-ignore
const container: HTMLElement = document.getElementById("root")

const root = createRoot(container)

root.render(
  <ThemeContextProvider theme={theme}>
      {/*react strict mode must be here to avoid an infinite loop if placed above KeycloakProvider*/}
      <React.StrictMode>
        <AppProvider
          languages={languages}
          queryClient={queryClient}
          loadingComponent={<Typography>Loading...</Typography>}
        >
          <AppRouter />
        </AppProvider>
      </React.StrictMode>
  </ThemeContextProvider>
);

