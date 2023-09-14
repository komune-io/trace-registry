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
            clientId = "tr-smartb-ver-app",
            clientSecret = "b5007a73-9bc3-453a-89bc-9944b05cee63"
        )
    )
    InitScript(properties).run()
}
