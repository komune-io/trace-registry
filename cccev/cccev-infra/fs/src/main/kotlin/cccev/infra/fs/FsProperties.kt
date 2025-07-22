package cccev.infra.fs

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "fs")
data class FsProperties (
    val url: String,
    val auth: AuthProperties?
)

data class AuthProperties (
    val url: String,
    val realm: String,
    val clientId: String,
    val clientSecret: String
)
