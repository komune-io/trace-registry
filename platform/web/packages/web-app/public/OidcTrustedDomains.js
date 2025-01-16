// Domains used by OIDC server must be also declared here
const trustedDomains = {
    default: {
        oidcDomains: [
            'http://im-keycloak:8080',
            "https://registry.trace.kosmio.dev",
            "https://auth.connect.kosmio.dev"
            ],
        accessTokenDomains: [
            'http://localhost:8071',
            "https://registry.trace.kosmio.dev",
            "https://auth.connect.kosmio.dev"
            ],
    },
};

trustedDomains.config_multi_tab_login = {
    domains: [
        'http://localhost:5173',
        "https://registry.trace.kosmio.dev",
        "https://auth.connect.kosmio.dev"
        ],
    allowMultiTabLogin: true,
};
