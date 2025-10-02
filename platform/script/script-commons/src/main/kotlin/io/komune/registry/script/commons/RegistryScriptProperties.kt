package io.komune.registry.script.commons

import f2.client.domain.AuthRealmClientSecret
import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "registry.script")
data class RegistryScriptProperties(
    val auth: AuthProperties,
    val registry: ServiceProperties,
    val cccev: ServiceProperties?,
    val im: ServiceProperties,
    val admin: ApiKeyProperties,
    val init: RegistryScriptInitProperties,
    val import: RegistryScriptImportProperties,
    val update: RegistryScriptUpdateProperties
) {
    fun authRealm(): AuthRealmClientSecret = AuthRealmClientSecret(
        clientId = admin.clientId,
        clientSecret = admin.clientSecret,
        serverUrl = auth.url,
        realmId = auth.realmId
    )
}

data class AuthProperties(
    val url: String,
    val realmId: String,
)

data class ServiceProperties(
    val url: String,
    val path: String? = null
)

data class ApiKeyProperties(
    val name: String,
    val clientId: String,
    val clientSecret: String
)
