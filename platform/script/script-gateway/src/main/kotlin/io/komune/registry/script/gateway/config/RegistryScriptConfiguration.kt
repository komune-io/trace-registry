package io.komune.registry.script.gateway.config

import cccev.dsl.client.DataClient
import io.komune.registry.script.commons.RegistryScriptProperties
import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(value = [RetryProperties::class, RegistryScriptProperties::class])
class RegistryScriptConfiguration {

    @Bean
    fun dataClient(properties: RegistryScriptProperties): DataClient = runBlocking {
        val authRealm = properties.authRealm()
        DataClient(properties.registry.url, authRealm)
    }
}
