import city.smartb.registry.program.cccev.AppAuth
import city.smartb.registry.program.cccev.createRandomProject
import city.smartb.registry.program.cccev.initRequirement
import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
//    val urlVer = "https://api.registry.smartb.network/ver"
//    val urlCCCEV = "https://api.registry.smartb.network/cccev"

//    val urlCCCEV = "https://trace.smart-b.io/cccev"
//    val urlVer = "https://trace.smart-b.io/ver"

    val urlCCCEV = "http://localhost:8083"
    val urlVer = "http://localhost:8070"

    val accessToken = AppAuth.getTokens("sb-plateform-app", "secretsecret").access_token
    initRequirement(urlCCCEV)
    createRandomProject(urlVer, accessToken)
//    createYahuma(urlVer)
}
