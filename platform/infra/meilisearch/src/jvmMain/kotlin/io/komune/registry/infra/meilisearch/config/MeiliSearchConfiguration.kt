package io.komune.registry.infra.meilisearch.config

import com.fasterxml.jackson.databind.ObjectMapper
import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Config
import com.meilisearch.sdk.json.JacksonJsonHandler
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@ConfigurationProperties("platform.meilisearch")
data class MeiliSearchProperties(
    val url: String,
    val secret: String
)

@Configuration
@EnableConfigurationProperties(MeiliSearchProperties::class)
class MeiliSearchConfiguration{

    @Bean
    fun meiliClient(objectMapper: ObjectMapper, props: MeiliSearchProperties): Client {
        val host = props.url
        val masterKey = props.secret
        val jsonHandler = JacksonJsonHandler(objectMapper)
        val config = Config(
            host, masterKey, jsonHandler
        )
        return Client(config)
    }
}
