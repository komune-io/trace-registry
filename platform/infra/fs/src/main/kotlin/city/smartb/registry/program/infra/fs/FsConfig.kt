package city.smartb.registry.program.infra.fs

import city.smartb.fs.s2.file.client.FileClient
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(FsProperties::class)
class FsConfig {

    @Bean
    fun fsClient(properties: FsProperties) = FileClient(properties.url)

}
