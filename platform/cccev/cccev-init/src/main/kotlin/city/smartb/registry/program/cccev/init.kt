import city.smartb.registry.program.cccev.AppAuth
import city.smartb.registry.program.cccev.createBrazilRockFeller
import city.smartb.registry.program.cccev.createRandomProject
import city.smartb.registry.program.cccev.initIndicatorsCarbon
import city.smartb.registry.program.cccev.initRequirement
import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
//    Prod
//    val urlAuth ="https://auth.connect.smartb.network/realms/sb"
//    val client = System.getenv("PROD_TRACE_CLIENT_ID")!!
//    val secret = System.getenv("PROD_TRACE_CLIENT_SECRET")!!
//    val urlVer = "https://trace.smartb.network/ver"
//    val urlCCCEV = "https://trace.smartb.network/cccev"

//    PreProd
//    val urlAuth = "https://auth.connect.smart-b.io/realms/sb-dev"
//    val clientSb = "sb-plateform-app"
//    val secretSb = "secretsecret"
//    val urlCCCEV = "https://trace.smart-b.io/cccev"
//    val urlVer = "https://trace.smart-b.io/ver"

//    Local
    val urlAuth = "https://auth.connect.smart-b.io/realms/sb-dev"
    val urlCCCEV = "http://localhost:8083"
    val urlVer = "http://localhost:8070"
    val clientSb = "sb-plateform-app"
    val secretSb = "secretsecret"

    val clientRockfeller = "sb-rockfeller-app"
    val secretRockfeller = "IY4wICIbvqHtVQFuvkrYvhQ4j5sEydwV"

    val clientOffseter = "sb-phease-app"
    val secretOffseter = "ZcX92th9ca4FYdZ2wwUnnzi8btPCZDZH"

    val accessTokenSb = AppAuth.getTokens(urlAuth, clientSb, secretSb).access_token
    val accessTokenRockfeller = AppAuth.getTokens(urlAuth, clientRockfeller, secretRockfeller).access_token
    val accessTokenOffseter = AppAuth.getTokens(urlAuth, clientOffseter, secretOffseter).access_token

//    initRequirement(urlCCCEV)
//    initIndicatorsCarbon(urlCCCEV)
    createRandomProject(urlVer, accessTokenSb)

//    createBrazilRockFeller(urlVer, accessTokenSb, accessTokenRockfeller, accessTokenOffseter)
}
