window._env_ = {
  platform: {
    url: "${REGISTRY_API_URL_PUBLIC}"
  },
  im: {
    url: "${IM_URL_PUBLIC}",
  },
  admin: {
    url: "${ADMIN_URL_PUBLIC}",
  },
  config: {
    keycloak: {
      realm: "${KC_REALM}",
      clientId: "${KC_CONNECT_ADMIN_WEB_CLIENT_ID}",
      url: "${KC_URL}"
    }
  }
};
