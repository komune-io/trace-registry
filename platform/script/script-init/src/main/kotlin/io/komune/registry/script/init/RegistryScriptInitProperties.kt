package io.komune.registry.script.init

import f2.client.domain.RealmId
import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "registry.script.init")
class RegistryScriptInitProperties(
    val auth: AuthProperties,
    val registry: ServiceProperties?,
    val cccev: ServiceProperties?,
    val im: ServiceProperties,
    val nbProject: Int,
    val orchestrator: ApiKeyProperties
)

class AuthProperties(
    val url: String,
    val realmId: RealmId,
)

class ServiceProperties(
    val url: String
)

class ApiKeyProperties(
    val name: String,
    val clientId: String,
    val clientSecret: String
)
