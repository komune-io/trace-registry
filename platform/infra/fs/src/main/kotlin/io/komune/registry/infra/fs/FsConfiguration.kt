package io.komune.registry.infra.fs

import io.komune.fs.s2.file.client.FileClient
import io.komune.registry.infra.im.ImProperties
import io.komune.registry.infra.im.asAuthRealmProvider
import org.slf4j.LoggerFactory
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(FsProperties::class)
class FsConfiguration {

    private val logger = LoggerFactory.getLogger(FsConfiguration::class.java)

    @Bean
    fun fsClient(properties: FsProperties, imProperties: ImProperties): FileClient {
        val authProvider = imProperties.asAuthRealmProvider()
        logger.info("Loading FS client url[${properties.url}] clientId[${imProperties.auth.clientId}]")
        return FileClient(properties.url, authProvider = authProvider)
    }

}
