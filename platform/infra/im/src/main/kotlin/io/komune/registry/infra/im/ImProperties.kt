package io.komune.registry.infra.im

import f2.client.domain.AuthRealmClientSecret
import f2.client.domain.AuthRealmProvider
import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "im")
data class ImProperties(
    val url: String,
    val auth: ImAuthProperties
)

data class ImAuthProperties (
    val url: String,
    val realm: String,
    val clientId: String,
    val clientSecret: String
)

fun ImProperties.asAuthRealmProvider() : AuthRealmProvider = {
    AuthRealmClientSecret(
        serverUrl = auth.url,
        realmId = auth.realm,
        redirectUrl = null,
        clientId = auth.clientId,
        clientSecret = auth.clientSecret
    )
}
