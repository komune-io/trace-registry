// Domains used by OIDC server must be also declared here
const trustedDomains = {
    default: {
        oidcDomains: [
            "${PUBLIC_URL_KC}",
        ],
        accessTokenDomains: [
            "${REGISTRY_API_URL}",
            "${PUBLIC_URL_KC}"
        ],
    },
};

trustedDomains.config_multi_tab_login = {
    domains: [
        "${REGISTRY_URL}",
        "${PUBLIC_URL_KC}"
    ],
    allowMultiTabLogin: true,
};