package city.smartb.registry.program.infra.im

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json
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
