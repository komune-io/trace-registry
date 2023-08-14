package city.smartb.registry.program.cccev.actor

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.Logging
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

object ActorAuth {
    suspend fun getActor(authUrl: String, name: String, clientId: String, clientSecret: String): Actor {
        val token = getTokens(authUrl, clientId, clientSecret)
        return Actor(name, token)
    }
    suspend fun getTokens(authUrl: String, clientId: String, clientSecret: String): AccessToken {
        val url = "${authUrl}/protocol/openid-connect/token"
        return HttpClient {
            install(Logging) {
                logger = Logger.DEFAULT
                level = LogLevel.ALL
            }
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
    val scope: String,
)

open class Actor(
    val name: String,
    val accessToken: AccessToken
)
enum class ActorType(roles: List<String>) {
    OFFSETTER(listOf(
        "tr_stakeholder_admin"
    )),
    ORCHESTRATOR(listOf(
        "tr_orchestrator_admin"
    )),
    ISSUER(listOf(
        "tr_stakeholder_admin"
    )),
    PROJECT_MANAGER(listOf(
        "tr_project_manager_admin"
    ))
}

