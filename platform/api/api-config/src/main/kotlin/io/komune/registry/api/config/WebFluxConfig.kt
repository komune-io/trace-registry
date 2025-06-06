package io.komune.registry.api.config

import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.http.codec.ServerCodecConfigurer
import org.springframework.http.codec.json.KotlinSerializationJsonDecoder
import org.springframework.http.codec.json.KotlinSerializationJsonEncoder
import org.springframework.web.reactive.config.WebFluxConfigurer

@OptIn(ExperimentalSerializationApi::class)
@Configuration
class WebFluxConfig : WebFluxConfigurer {

    @Bean
    @Primary
    fun jsonConfig(): Json = Json {
        ignoreUnknownKeys = true
        explicitNulls = false
    }

    @Bean
    fun kotlinSerializationJsonDecoder(json: Json): KotlinSerializationJsonDecoder {
        return KotlinSerializationJsonDecoder(json)
    }

    @Bean
    fun kotlinSerializationJsonEncoder(json: Json): KotlinSerializationJsonEncoder {
        return KotlinSerializationJsonEncoder(json)
    }

    override fun configureHttpMessageCodecs(configurer: ServerCodecConfigurer) {
        configurer.customCodecs().register(kotlinSerializationJsonDecoder(jsonConfig()))
        configurer.customCodecs().register(kotlinSerializationJsonEncoder(jsonConfig()))
    }
}
