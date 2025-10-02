package io.komune.registry.script.init

import io.komune.registry.script.commons.ApiKeyProperties
import io.komune.registry.script.commons.AuthProperties
import io.komune.registry.script.commons.ModuleFlagProperties
import io.komune.registry.script.commons.RegistryScriptImportProperties
import io.komune.registry.script.commons.RegistryScriptInitProperties
import io.komune.registry.script.commons.RegistryScriptProperties
import io.komune.registry.script.commons.RegistryScriptUpdateProperties
import io.komune.registry.script.commons.ServiceProperties
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val registry = "http://localhost:8070"
    val cccev = "http://localhost:8083"
    val properties = RegistryScriptProperties(
        auth = AuthProperties(
            url = "http://im-keycloak:8080",
            realmId = "registry-local"
        ),
        im = ServiceProperties("http://localhost:8009"),
        cccev = ServiceProperties(cccev),
        registry = ServiceProperties(registry),
        admin = ApiKeyProperties(
            name = "Komune",
            clientId = "tr-registry-script-api",
            clientSecret = "secret"
        ),
        init = RegistryScriptInitProperties(
            enabled = true,
            nbProject = 30,
            flag = ModuleFlagProperties(
                control = true,
                data = true,
                project = true,
                identity = true
            )
        ),
        import = RegistryScriptImportProperties(
            enabled = false,
            source = null,
            sources = null,
            preparse = null
        ),
        update = RegistryScriptUpdateProperties(
            enabled = false,
            sources = emptyList(),
        )
    )
    InitScript(properties).run(
        project = false,
        asset = false,
        cccev = false,
        catalogue = true
    )
}
