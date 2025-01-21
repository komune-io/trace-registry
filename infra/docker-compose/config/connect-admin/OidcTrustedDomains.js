// Add bellow trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const trustedDomains = {
    default: [
        //the keycloak server
        "${KC_URL_PUBLIC}",
        //the api
        "${IM_URL}",
        "${FS_URL}"
    ],
    config_classic: ["http://localhost:81"],
    config_without_silent_login: ["http://localhost:81"],
    config_without_refresh_token: ["http://localhost:81"],
    config_without_refresh_token_silent_login: ["http://localhost:81"],
};

// Service worker will continue to give access token to the JavaScript client
// Ideal to hide refresh token from client JavaScript, but to retrieve access_token for some
// scenarios which require it. For example, to send it via websocket connection.
trustedDomains.config_show_access_token = { domains: ["http://localhost:81"], showAccessToken: true };

// This example defines domains used by OIDC server separately from domains to which access tokens will be injected.
trustedDomains.config_separate_oidc_access_token_domains = {
    oidcDomains: ["http://localhost:81"],
    accessTokenDomains: ["${KC_URL_PUBLIC}"],
};