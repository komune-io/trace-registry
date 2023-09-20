package city.smartb.registry.infra.im

import city.smartb.im.commons.http.HttpClientBuilderJvm
import city.smartb.im.f2.organization.client.OrganizationClient
import kotlinx.serialization.Serializable
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(value=[ImProperties::class])
class ImConfig {

    @Bean
    fun organizationClient(
        properties: ImProperties
    ) = OrganizationClient(properties.url, HttpClientBuilderJvm) { properties.generateTokenFunction()().access_token }

}
