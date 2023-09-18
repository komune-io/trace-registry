package city.smartb.registry.program.infra.fs

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.registry.program.infra.im.ImProperties
import city.smartb.registry.program.infra.im.generateTokenFunction
import io.ktor.client.plugins.auth.Auth
import io.ktor.client.plugins.auth.providers.BearerTokens
import io.ktor.client.plugins.auth.providers.bearer
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(FsProperties::class)
class FsConfig {

    @Bean
    fun fsClient(properties: FsProperties, imProperties: ImProperties): FileClient {
        val tokenFunction = imProperties.generateTokenFunction()
        return FileClient(properties.url) {
            Auth {
                bearer {
                    this.loadTokens {
                        val token = tokenFunction()
                        BearerTokens(token.access_token, token.refresh_token ?: "")
                    }
                }
            }
        }
    }

}
