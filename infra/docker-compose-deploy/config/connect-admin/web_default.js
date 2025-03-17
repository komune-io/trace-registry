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
    applications: [{
      name: "${REGISTRY_APP_NAME}",
      url: "${PUBLIC_URL_REGISTRY}",
      icon: "${PUBLIC_URL_REGISTRY}/favicon.ico",
    }],
    theme: {
      colors: {
        primary: "#${REGISTRY_THEME_COLORS_PRIMARY}",
        secondary: "#${REGISTRY_THEME_COLORS_SECONDARY}",
        background: "#${REGISTRY_THEME_COLORS_BACKGROUND}"
      },
      logo: {
        url: "${PUBLIC_URL_REGISTRY}/${REGISTRY_THEME_LOGO_FILE}",
      }
    }
  }
};
