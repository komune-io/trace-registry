import city.smartb.registry.program.cccev.AppAuth
import city.smartb.registry.program.cccev.createAssetPool
import city.smartb.registry.program.cccev.createRandomProject
import city.smartb.registry.program.cccev.initIndicatorsCarbon
import city.smartb.registry.program.cccev.initRequirement
import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
//    Prod
    val urlAuth ="https://auth.connect.smartb.network/realms/sb"
//    val client = System.getenv("PROD_TRACE_CLIENT_ID")!!
//    val secret = System.getenv("PROD_TRACE_CLIENT_SECRET")!!
    val urlVer = "https://trace.smartb.network/ver"
//    val urlCCCEV = "https://trace.smartb.network/cccev"

//    PreProd
//    val urlAuth = "https://auth.connect.smart-b.io/realms/sb-dev"
//    val clientSb = "tr-smart-b-app"
//    val secretSb = "49225b01-2de5-4507-90f2-74e639274646"
//    val urlCCCEV = "https://trace.smart-b.io/cccev"
//    val urlVer = "https://trace.smart-b.io/ver"

//    Local
//    val urlAuth = "https://auth.connect.smart-b.io/realms/sb-dev"
//    val urlCCCEV = "http://localhost:8083"
//    val urlVer = "http://localhost:8070"
//    val clientSb = "sb-plateform-app"
//    val secretSb = "secretsecret"

//    val nameIssuer = "Rockfeller"
//    val clientIssuer = "sb-rockfeller-app"
//    val secretIssuer = "IY4wICIbvqHtVQFuvkrYvhQ4j5sEydwV"

//    val nameIssuer = "Smartb"
//    val clientIssuer = "tr-smart-b-app"
//    val secretIssuer = "49225b01-2de5-4507-90f2-74e639274646"

//    val nameOffseter = "Phease"
//    val clientOffseter = "sb-phease-app"
//    val secretOffseter = "ZcX92th9ca4FYdZ2wwUnnzi8btPCZDZH"

//    val nameOffseter = "CleanChain"
//    val clientOffseter = "sb-cleanchain-app"
//    val secretOffseter = "EH1VG8BjsTe7h0OrPumeDPJUXh9xdA5l"

    val nameIssuer = "Smartb"
    val clientIssuer = "tr-smartb-asset-pool-app"
    val secretIssuer = "40419323-22eb-40a3-9dc6-b7feceeccff0"

    val nameOffseter = "CleanChain"
    val clientOffseter = "tr-cleanchain-asset-app"
    val secretOffseter = "9c26689b-ff78-40e5-acbd-2ab0cbaeb41e"


//    tr-smartb-asset-pool-app
//    40419323-22eb-40a3-9dc6-b7feceeccff0

//    tr-cleanchain-asset-app
//    9c26689b-ff78-40e5-acbd-2ab0cbaeb41e

    val accessTokenIssuer = AppAuth.getActor(urlAuth, nameIssuer, clientIssuer, secretIssuer)
    val accessTokenOffseter = AppAuth.getActor(urlAuth, nameOffseter, clientOffseter, secretOffseter)

//    initRequirement(urlCCCEV)
//    initIndicatorsCarbon(urlCCCEV)
//    createRandomProject(urlVer, accessTokenSb)

    val assetPoolId = createAssetPool(
        urlVer,
        issuer = accessTokenIssuer,
        offsetter = accessTokenOffseter
    )
//    createRandomProject(urlVer, accessTokenSb)
//    createBrazilRockFeller(urlVer, accessTokenSb, accessTokenRockfeller, accessTokenOffseter)
}
