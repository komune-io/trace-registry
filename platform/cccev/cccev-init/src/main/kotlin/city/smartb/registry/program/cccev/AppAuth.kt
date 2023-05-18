package city.smartb.registry.program.cccev

import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
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

object AppAuth {
    suspend fun getTokens(clientId: String, clientSecret: String): AccessToken {
        val url = "https://auth.connect.smart-b.io/realms/sb-dev/protocol/openid-connect/token"
        return HttpClient{
            install(ContentNegotiation) {
                json(Json {
                    ignoreUnknownKeys = true
                })
            }
        }.use { client ->
            client.post(url) {
                contentType(ContentType.Application.FormUrlEncoded)
                setBody("grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}")
            }.body()
        }
    }
}

@SuppressWarnings("ConstructorParameterNaming")
@Serializable
data class AccessToken(
    val access_token: String,
    val expires_in: Int,
    val refresh_expires_in: Int,
    val token_type: String,
    val scope: String
)
