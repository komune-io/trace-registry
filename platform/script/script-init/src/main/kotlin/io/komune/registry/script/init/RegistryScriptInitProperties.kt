package io.komune.registry.script.init

import f2.client.domain.AuthRealmClientSecret
import f2.client.domain.RealmId
import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "registry.script.init")
class RegistryScriptInitProperties(
    val auth: AuthProperties,
    val registry: ServiceProperties?,
    val cccev: ServiceProperties?,
    val im: ServiceProperties,
    val nbProject: Int,
    val admin: ApiKeyProperties,
    val flag: ModuleFlagProperties
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

class ModuleFlagProperties(
    val control: Boolean = false,
    val data: Boolean = false,
    val project: Boolean = false,
    val identity: Boolean = false
)

fun RegistryScriptInitProperties.asAuthRealm(): AuthRealmClientSecret {
    return AuthRealmClientSecret(
        clientId = admin.clientId,
        clientSecret = admin.clientSecret,
        serverUrl = auth.url,
        realmId = auth.realmId
    )
}
