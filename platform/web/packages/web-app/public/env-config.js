window._env_ = {
  platform: {
    url: "http://localhost:8070"
  },
  config: {
    im: {
      url: "http://localhost:8009",
    },
    keycloak: {
      realm: "registry-local",
      clientId: "registry-platform-web",
      url: "http://im-keycloak:8080"
    },
  }
};