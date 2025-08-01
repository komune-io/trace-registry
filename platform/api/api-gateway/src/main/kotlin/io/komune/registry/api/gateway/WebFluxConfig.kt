package io.komune.registry.api.gateway

import io.komune.registry.control.f2.protocol.api.config.ProtocolDTOSerializer
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
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
        serializersModule = SerializersModule {
            polymorphic(ProtocolDTO::class) {
                defaultDeserializer { ProtocolDTOSerializer }
            }
        }
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
