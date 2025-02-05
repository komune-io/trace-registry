window._env_ = {
  config: {
    im: {
      url: "${PUBLIC_URL_IM}",
    },
    fs: {
      url: "${PUBLIC_URL_FS}",
    },
    keycloak: {
      realm: "${KC_REALM}",
      clientId: "${KC_CONNECT_ADMIN_WEB_CLIENT_ID}",
      url: "${PUBLIC_URL_KC}"
    }
  }
};
