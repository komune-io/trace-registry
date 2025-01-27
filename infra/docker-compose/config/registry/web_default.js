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
      clientId: "${KC_WEB_CLIENT_ID}",
      url: "${KC_URL_PUBLIC}"
    }
  }
};
