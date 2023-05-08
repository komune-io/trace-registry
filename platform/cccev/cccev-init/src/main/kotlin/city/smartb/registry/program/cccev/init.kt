import city.smartb.registry.program.cccev.createYahuma
import city.smartb.registry.program.cccev.initRequirement
import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
    val urlCCCEV = "http://localhost:8083"
    initRequirement(urlCCCEV)
    val urlVer = "http://localhost:8070"
    createYahuma(urlVer)
}
