// Domains used by OIDC server must be also declared here
const trustedDomains = {
    default: {
        oidcDomains: [
            "${KC_URL_PUBLIC}",
        ],
        accessTokenDomains: [
            "${REGISTRY_API_URL}",
            "${KC_URL_PUBLIC}"
        ],
    },
};

trustedDomains.config_multi_tab_login = {
    domains: [
        "${REGISTRY_URL}",
        "${KC_URL_PUBLIC}"
    ],
    allowMultiTabLogin: true,
};