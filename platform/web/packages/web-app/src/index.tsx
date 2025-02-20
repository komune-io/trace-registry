import React from "react";
import {
  AppProvider,
  G2ConfigBuilder,
  KeycloakProvider,
  g2Config,
  ThemeContextProvider,
  AlertHub,
  OidcSecure
} from "@komune-io/g2";
import { languages } from "components";
import { muiTheme, theme } from "Themes";
import { QueryClient } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { AppRouter } from "App/routes";
import { OidcConfiguration } from "@axa-fr/oidc-client";
import "raw-graph/rawGraphTheme.scss"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 86400000, //stale time set to one day
      retry: false,
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
  silent_redirect_uri: window.location.origin + '/authentication/silent-callback',
  scope: 'openid',
  authority: g2Config().keycloak.url + '/realms/' + g2Config().keycloak.realm,
  service_worker_relative_url: '/OidcServiceWorker.js',
  // storage: localStorage,
  // service_worker_only: false,
}


root.render(
  //@ts-ignore
  <ThemeContextProvider customMuiTheme={muiTheme} theme={theme}>
    <React.StrictMode>
      <KeycloakProvider
        configuration={oidcConfiguration}
      >
        <OidcSecure>
        <AlertHub>
          <AppProvider
            languages={languages}
            queryClient={queryClient}
          >
            <AppRouter />
          </AppProvider>
        </AlertHub>
        </OidcSecure>
      </KeycloakProvider>
    </React.StrictMode>
  </ThemeContextProvider>
);

