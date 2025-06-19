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
    lateinit var template: BrevoTemplateProperties
    var supportEmail: String? = null

    @Bean
    fun brevoClient() = BrevoClient(this)
}

data class BrevoDebugProperties(
    val enable: Boolean,
    val email: String
)

data class BrevoTemplateProperties(
    val emailVerified: Long?,
    val catalogueClaimOwnership: Long?,
)
