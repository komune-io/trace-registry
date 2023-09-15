package city.smartb.registry.script.init

import kotlinx.coroutines.runBlocking

fun main() = runBlocking {

    val properties = RegistryScriptInitProperties(
        auth = ServiceProperties("https://auth.dev.connect.smart-b.io/realms/sb-dev"),
        im = ServiceProperties("https://dev.connect.smart-b.io/im"),
        cccev = ServiceProperties("https://dev.trace.smart-b.io/cccev"),
        registry = ServiceProperties("https://dev.trace.smart-b.io/ver"),
        nbProject = 1,
        orchestrator = ApiKeyProperties(
            name = "Smartb",
            clientId = "tr-registry-script-api",
            clientSecret = "703ece3d-82bc-4747-8840-96c1c3431079"
        )
    )
    InitScript(properties).run()
}
