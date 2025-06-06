package io.komune.registry.script.init

import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val registry = "http://localhost:8070"
    val cccev = "http://localhost:8083"
    val properties = RegistryScriptInitProperties(
        auth = AuthProperties(
            url = "http://im-keycloak:8080",
            realmId = "registry-local"
        ),
        im = ServiceProperties("http://localhost:8009"),
        cccev = ServiceProperties(cccev),
        registry = ServiceProperties(registry),
        nbProject = 30,
        admin = ApiKeyProperties(
            name = "Komune",
            clientId = "tr-registry-script-api",
            clientSecret = "secret"
        ),
        source = "./import",
        preparse = null,
        flag = ModuleFlagProperties(
            control = true,
            data = true,
            project = true,
            identity = true
        )
    )
    InitScript(properties).run(
        project = false,
        asset = false,
        cccev = false,
        catalogue = true
    )
}
