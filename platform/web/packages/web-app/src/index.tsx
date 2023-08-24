import React from "react";
import {
  AppProvider,
  G2ConfigBuilder,
  KeycloakProvider,
  g2Config,
  ThemeContextProvider
} from "@smartb/g2";
import { languages } from "i18n";
import { theme } from "Themes";
import { QueryClient } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { AppRouter } from "App/routes";
import { OidcConfiguration } from "@axa-fr/oidc-client";

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

const oidcConfiguration: OidcConfiguration = {
  client_id: g2Config().keycloak.clientId,
  redirect_uri: window.location.origin + '/authentication/callback',
  silent_redirect_uri:
    window.location.origin + '/authentication/silent-callback',
  scope: 'openid',
  authority: g2Config().keycloak.url + '/realms/' + g2Config().keycloak.realm,
  service_worker_relative_url: '/OidcServiceWorker.js',
  storage: localStorage,
  service_worker_only: false,
}


root.render(
  //@ts-ignore
  <ThemeContextProvider theme={theme}>
    <React.StrictMode>
      <KeycloakProvider
        configuration={oidcConfiguration}
      >
        <AppProvider
          languages={languages}
          queryClient={queryClient}
        >
          <AppRouter />
        </AppProvider>
      </KeycloakProvider>
    </React.StrictMode>
  </ThemeContextProvider>
);

