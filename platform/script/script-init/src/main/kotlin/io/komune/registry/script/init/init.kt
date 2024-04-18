package io.komune.registry.script.init

import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
    val registry = "http://localhost:8070"
    val cccev = "http://localhost:8083"
//    val cccev = "https://dev.trace.komune.io/cccev"
//    val registry = "https://dev.trace.komune.io/ver"
    val properties = RegistryScriptInitProperties(
        auth = ServiceProperties("https://auth.dev.connect.komune.io/realms/sb-dev"),
        im = ServiceProperties("https://dev.connect.komune.io/im"),
        cccev = ServiceProperties(cccev),
        registry = ServiceProperties(registry),
        nbProject = 30,
        orchestrator = ApiKeyProperties(
            name = "Smartb",
            clientId = "tr-komune-registry-script-api-key",
            clientSecret = "703ece3d-82bc-4747-8840-96c1c3431079"
        )
    )
    io.komune.registry.script.init.InitScript(properties).run(
        project = false,
        asset = false,
        cccev = false,
        catalogue = true
    )
}
