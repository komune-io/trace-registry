// Domains used by OIDC server must be also declared here
const trustedDomains = {
    default: {
        oidcDomains: ['https://auth.connect.kosmio.dev','http://im-keycloak:8080'],
        accessTokenDomains: ['http://localhost:8071'],
    },
};

trustedDomains.config_multi_tab_login = {
    domains: ['http://localhost:5173'],
    allowMultiTabLogin: true,
};
