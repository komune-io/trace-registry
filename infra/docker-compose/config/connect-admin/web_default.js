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
        primary: "#492161",
        secondary: "#353945",
        background: "#F6F4F7"
      },
      logo: {
        url: "${PUBLIC_URL_REGISTRY}/logo.svg",
      }
    }
  }
};
