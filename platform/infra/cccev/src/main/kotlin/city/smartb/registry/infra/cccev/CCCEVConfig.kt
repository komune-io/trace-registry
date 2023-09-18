package city.smartb.registry.infra.cccev

import cccev.dsl.client.CCCEVClient
import io.ktor.client.plugins.HttpTimeout
import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(CCCEVProperties::class)
class CCCEVConfig {

    @Bean
    fun cccevClient(properties: CCCEVProperties): CCCEVClient = runBlocking {
        CCCEVClient.invoke(properties.url) {
            install(HttpTimeout) {
                requestTimeoutMillis = 60000
            }
        }
    }
}
