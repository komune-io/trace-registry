package io.komune.registry.infra.fs

import io.komune.fs.s2.file.client.FileClient
import io.komune.registry.infra.im.ImProperties
import io.komune.registry.infra.im.asAuthRealmProvider
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(FsProperties::class)
class FsConfiguration {

    @Bean
    fun fsClient(properties: FsProperties, imProperties: ImProperties): FileClient {
        val authProvider = imProperties.asAuthRealmProvider()
        return FileClient(properties.url, authProvider = authProvider)
    }

}
