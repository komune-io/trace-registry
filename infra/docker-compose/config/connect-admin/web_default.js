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
    },
    theme: {
      colors: {
        primary: "#492161",
        secondary: "#353945",
        background: "#F6F4F7"
      }
    }
  }
};
