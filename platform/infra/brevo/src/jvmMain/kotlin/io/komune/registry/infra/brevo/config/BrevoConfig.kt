package io.komune.registry.infra.brevo.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@ConfigurationProperties("platform.brevo")
class BrevoConfig {
    lateinit var token: String
    lateinit var from: String
    var contactList: Long = 0
    var sandbox: Boolean = false
    lateinit var debug: BrevoDebugProperties

    @Bean
    fun brevoClient() = BrevoClient(this)
}

data class BrevoDebugProperties(
    val enable: Boolean,
    val email: String
)