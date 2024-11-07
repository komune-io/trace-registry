package io.komune.registry.infra.im

import f2.client.domain.AuthRealm
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.im.f2.organization.client.OrganizationClient
import io.komune.im.f2.organization.client.organizationClient
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logging
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
