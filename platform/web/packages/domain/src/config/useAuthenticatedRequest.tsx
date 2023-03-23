import { useExtendedAuth } from "components";
import { RequestProps } from "@smartb/g2-utils";
import { useMemo } from "react";
import { config } from "./index";

export const useNoAuthenticatedRequest = (): RequestProps => {
  return useMemo(() => ({
    url: config().platform.url
  }), [])
}

export const useAuthenticatedRequest = (): RequestProps => {
  const auth = useExtendedAuth()
  return useMemo(() => ({
    url: config().platform.url,
    jwt: auth.keycloak.token
  }), [auth.keycloak.token])
}
