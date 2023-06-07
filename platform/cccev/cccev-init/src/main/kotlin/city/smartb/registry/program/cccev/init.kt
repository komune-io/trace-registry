import city.smartb.registry.program.cccev.AppAuth
import city.smartb.registry.program.cccev.createBrazilRockFeller
import city.smartb.registry.program.cccev.createRandomProject
import city.smartb.registry.program.cccev.initIndicatorsCarbon
import city.smartb.registry.program.cccev.initRequirement
import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
//     axess
//     val urlVer = "https://api.registry.smartb.network/ver"
//     val urlCCCEV = "https://api.registry.smartb.network/cccev"

//    Prod
//    val urlAuth ="https://auth.connect.smartb.network/realms/sb"
//    val client = System.getenv("PROD_TRACE_CLIENT_ID")!!
//    val secret = System.getenv("PROD_TRACE_CLIENT_SECRET")!!
//    val urlVer = "https://trace.smartb.network/ver"
//    val urlCCCEV = "https://trace.smartb.network/cccev"

//    PreProd
//    val urlAuth = "https://auth.connect.smart-b.io/realms/sb-dev"
//    val client = "sb-plateform-app"
//    val secret = "secretsecret"
//    val urlCCCEV = "https://trace.smart-b.io/cccev"
//    val urlVer = "https://trace.smart-b.io/ver"

//    Local
    val urlAuth = "https://auth.connect.smart-b.io/realms/sb-dev"
    val client = "sb-plateform-app"
    val secret = "secretsecret"
    val urlCCCEV = "http://localhost:8083"
    val urlVer = "http://localhost:8070"

    val accessToken = AppAuth.getTokens(urlAuth, client, secret).access_token

    initRequirement(urlCCCEV)
    initIndicatorsCarbon(urlCCCEV)
    createRandomProject(urlVer, accessToken)
//    createYahuma(urlVer, accessToken)
//    createBrazilRockFeller(urlVer, accessToken)
}


