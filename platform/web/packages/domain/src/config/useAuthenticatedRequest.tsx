import { useExtendedAuth } from "components";
import { RequestProps } from "utils";
import { useMemo } from "react";
import { config } from "./index";

export const useNoAuthenticatedRequest = (path: string): RequestProps => {
  return useMemo(() => ({
    path: path,
    url: config().platform.url
  }), [path])
}

export const useAuthenticatedRequest = (path: string): RequestProps => {
  const auth = useExtendedAuth()
  return useMemo(() => ({
    path: path,
    url: config().platform.url,
    jwt: auth.keycloak.token
  }), [path, auth.keycloak.token])
}
