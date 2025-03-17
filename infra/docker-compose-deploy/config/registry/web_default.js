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
      primary: "#492161",
      secondary: "#353945",
      background: "#F6F4F7"
    },
    logo: {
      url: "${PUBLIC_URL_REGISTRY}/logo.svg",
    }
  }
};
