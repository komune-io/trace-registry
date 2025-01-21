window._env_ = {
  config: {
    im: {
      url: "http://localhost:8009",
    },
    fs: {
      url: "http://localhost:8090"
    },
    keycloak: {
      realm: "${KC_REALM}",
      clientId: "${KC_CONNECT_ADMIN_WEB_CLIENT_ID}",
      url: "${KC_URL_PUBLIC}"
    }
  }
};
