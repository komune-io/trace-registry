window._env_ = {
  config: {
    platform: {
      url: "${PUBLIC_URL_REGISTRY_API}"
    },
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
