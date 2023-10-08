package city.smartb.registry.script.init

import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
//    val registry = "http://localhost:8070"
    val cccev = "http://localhost:8083"
//    val cccev = "https://dev.trace.smart-b.io/cccev"
    val registry = "https://dev.trace.smart-b.io/ver"
    val properties = RegistryScriptInitProperties(
        auth = ServiceProperties("https://auth.dev.connect.smart-b.io/realms/sb-dev"),
        im = ServiceProperties("https://dev.connect.smart-b.io/im"),
        cccev = ServiceProperties(cccev),
        registry = ServiceProperties(registry),
        nbProject = 30,
        orchestrator = ApiKeyProperties(
            name = "Smartb",
            clientId = "tr-smartb-registry-script-api-key",
            clientSecret = "703ece3d-82bc-4747-8840-96c1c3431079"
        )
    )
    InitScript(properties).run(
        project = false,
        asset = false,
        cccev = false,
        catalogue = true
    )
}
