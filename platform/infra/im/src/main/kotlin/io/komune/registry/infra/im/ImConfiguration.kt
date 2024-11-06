package io.komune.registry.infra.im

import io.komune.im.f2.organization.client.OrganizationClient
import io.komune.im.f2.organization.client.organizationClient
import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(value=[ImProperties::class])
class ImConfiguration {

    @Bean
    fun organizationClientBean(
        properties: ImProperties
    ): OrganizationClient = runBlocking {
        val authProvider = properties.asAuthRealmProvider()
        organizationClient(properties.url, authProvider).invoke()
    }
}
