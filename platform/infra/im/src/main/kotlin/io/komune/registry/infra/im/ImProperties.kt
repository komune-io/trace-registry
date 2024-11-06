package io.komune.registry.infra.im

import f2.client.domain.AuthRealmClientSecret
import f2.client.domain.AuthRealmProvider
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.slf4j.LoggerFactory
import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "im")
data class ImProperties (
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
