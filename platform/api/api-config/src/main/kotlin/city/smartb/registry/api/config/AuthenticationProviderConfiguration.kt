package city.smartb.registry.api.config

import city.smartb.im.organization.client.OrganizationClient
import city.smartb.im.organization.domain.model.Organization
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class ImConfig {

    @Value("im.url")
    lateinit var imUrl: String

    @Bean
    fun organizationClient() = OrganizationClient<Organization>(imUrl)
}
