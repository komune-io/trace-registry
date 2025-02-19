// Domains used by OIDC server must be also declared here
const trustedDomains = {
    default: {
        oidcDomains: [
            'http://im-keycloak:8080',
            
            "https://auth.connect.kosmio.dev",

            "https://auth.connect.100m.kosmio.dev"
            ],
        accessTokenDomains: [
            'http://localhost:8070',
            
            "https://registry.trace.kosmio.dev",
            "https://auth.connect.kosmio.dev",

            "https://100m.kosmio.dev/api",
            "https://auth.connect.100m.kosmio.dev"
            ],
    },
};

trustedDomains.config_multi_tab_login = {
    domains: [
        'http://localhost:5173',
        
        "https://registry.trace.kosmio.dev",
        "https://auth.connect.kosmio.dev",

        "https://100m.kosmio.dev",
        "https://auth.connect.100m.kosmio.dev"
        ],
    allowMultiTabLogin: true,
};
