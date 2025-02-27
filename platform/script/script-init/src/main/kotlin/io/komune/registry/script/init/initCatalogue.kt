package io.komune.registry.script.init

import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
    val registry = "http://localhost:8070"
    val cccev = "http://localhost:8083"
    val properties = RegistryScriptInitProperties(
        auth = AuthProperties(realmId = "registry-local", url ="https://auth.dev.connect.komune.io"),
        im = ServiceProperties("https://dev.connect.komune.io/im"),
        cccev = ServiceProperties(cccev),
        registry = ServiceProperties(registry),
        nbProject = 30,
        admin = ApiKeyProperties(
            name = "Komune",
            clientId = "tr-registry-script-api",
            clientSecret = "secret"
        ),
        source = SourceProperties(
            folder = "./import"
        ),
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
