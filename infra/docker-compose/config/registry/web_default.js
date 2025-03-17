window._env_ = {
  platform: {
    url: "${PUBLIC_URL_REGISTRY_API}"
  },
  im: {
    url: "${PUBLIC_URL_IM}",
  },
  admin: {
    url: "${PUBLIC_URL_ADMIN}",
  },
  config: {
    keycloak: {
      realm: "${KC_REALM}",
      clientId: "${KC_WEB_CLIENT_ID}",
      url: "${PUBLIC_URL_KC}"
    }
  },
  theme: {
    colors: {
      primary: "#${REGISTRY_THEME_COLORS_PRIMARY}",
      secondary: "#${REGISTRY_THEME_COLORS_SECONDARY}",
      background: "#${REGISTRY_THEME_COLORS_BACKGROUND}"
    },
    logo: {
      url: "/${REGISTRY_THEME_LOGO_FILE}",
    }
  }
};
