package city.smartb.registry.program.infra.im

import city.smartb.im.organization.client.OrganizationClient
import city.smartb.im.organization.domain.model.Organization
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
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(value=[ImProperties::class])
class ImConfig {

    @Bean
    fun organizationClient(
        properties: ImProperties
    ) = OrganizationClient<Organization>(properties.url, generateToken(properties))

    fun generateToken(properties: ImProperties): suspend () -> String? = {
        val url = "${properties.auth.url}/realms/${properties.auth.realm}/protocol/openid-connect/token"
        val result: AccessToken = HttpClient{
            install(ContentNegotiation) {
                json(Json {
                    ignoreUnknownKeys = true
                })
            }
        }.use { client ->
            client.post(url) {
                contentType(ContentType.Application.FormUrlEncoded)
                setBody(
                    "grant_type=client_credentials&client_id=${properties.auth.clientId}&client_secret=${properties.auth.clientSecret}"
                )
            }.body()
        }
        result.access_token
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

