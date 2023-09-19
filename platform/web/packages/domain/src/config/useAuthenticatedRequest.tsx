import { useExtendedAuth } from "components";
import { useMemo } from "react";
import { config } from "./index";
import {RequestProps} from "@smartb/g2";

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
