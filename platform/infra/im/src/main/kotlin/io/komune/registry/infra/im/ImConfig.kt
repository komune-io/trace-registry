package io.komune.registry.infra.im

import f2.client.domain.AuthRealmClientSecret
import io.komune.im.f2.organization.client.OrganizationClient
import io.komune.im.f2.organization.client.organizationClient
import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(value=[ImProperties::class])
class ImConfig {

    @Bean
    fun organizationClientBean(
        properties: ImProperties
    ): OrganizationClient = runBlocking {
        val auth = AuthRealmClientSecret(
            serverUrl = properties.auth.url,
            realmId = properties.auth.realm,
            redirectUrl = null,
            clientId = properties.auth.clientId,
            clientSecret = properties.auth.clientSecret
        )

        organizationClient(properties.url) { auth }.invoke()
    }
}
