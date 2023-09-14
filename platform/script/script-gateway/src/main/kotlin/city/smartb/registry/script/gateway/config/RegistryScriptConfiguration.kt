package city.smartb.registry.script.gateway.config

import city.smartb.registry.script.init.RegistryScriptInitProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(value = [RetryProperties::class, RegistryScriptInitProperties::class])
class RegistryScriptConfiguration
