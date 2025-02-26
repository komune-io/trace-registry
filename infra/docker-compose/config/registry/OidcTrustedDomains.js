// Domains used by OIDC server must be also declared here
const trustedDomains = {
    default: {
        oidcDomains: ["${PUBLIC_URL_KC}"],
        accessTokenDomains: [
            "${PUBLIC_URL_REGISTRY_API}",
            "${PUBLIC_URL_KC}"
        ],
    },
};

trustedDomains.config_multi_tab_login = {
    domains: ["${PUBLIC_URL_REGISTRY}", "${PUBLIC_URL_KC}"],
    allowMultiTabLogin: true,
};
