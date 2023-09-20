package city.smartb.registry.infra.im

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

@SuppressWarnings("ConstructorParameterNaming")
@Serializable
data class AccessToken(
    val access_token: String,
    val refresh_token: String? = null,
    val expires_in: Int,
    val refresh_expires_in: Int,
    val token_type: String,
    val scope: String
)

fun ImProperties.generateTokenFunction(): suspend () -> AccessToken = {
    val url = "${auth.url}/realms/${auth.realm}/protocol/openid-connect/token"
    val result: AccessToken = HttpClient {
        install(ContentNegotiation) {
            json(Json {
                ignoreUnknownKeys = true
            })
        }
    }.use { client ->
        client.post(url) {
            contentType(ContentType.Application.FormUrlEncoded)
            setBody(
                "grant_type=client_credentials&client_id=${auth.clientId}&client_secret=${auth.clientSecret}"
            )
        }.body()
    }
    result
}
