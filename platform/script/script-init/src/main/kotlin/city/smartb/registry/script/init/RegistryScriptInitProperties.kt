package city.smartb.registry.script.init

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "registry.script.init")
class RegistryScriptInitProperties(
    val auth: ServiceProperties,
    val registry: ServiceProperties?,
    val cccev: ServiceProperties?,
    val im: ServiceProperties,
    val nbProject: Int,
    val orchestrator: ApiKeyProperties
)

class ServiceProperties(
    val url: String
)

class ApiKeyProperties(
    val name: String,
    val clientId: String,
    val clientSecret: String
)
