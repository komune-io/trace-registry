import city.smartb.registry.program.cccev.actor.ActorType
import city.smartb.registry.program.cccev.actor.ActorAuth
import city.smartb.registry.program.cccev.actor.ActorBuilder
import city.smartb.registry.program.cccev.asset.createAssetPool
import city.smartb.registry.program.cccev.project.createRandomProject
import city.smartb.registry.program.cccev.initIndicatorsCarbon
import city.smartb.registry.program.cccev.initRequirement
import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
    val urlAuth = "https://auth.dev.connect.smart-b.io/realms/sb-dev"
    val imUrl = "https://dev.connect.smart-b.io/im"
    val urlCCCEV = "http://localhost:8083"
    val urlVer = "http://localhost:8070"

    val nameOrchestrator = "Smartb"
    val clientOrchestrator = "tr-smartb-ver2-app"
    val secretOrchestrator = "30ef2c5b-acee-460b-9f38-2ecd9855792d"
    val accessTokenOrchestrator= ActorAuth.getActor(urlAuth, nameOrchestrator, clientOrchestrator, secretOrchestrator)
    val actorFactory = ActorBuilder(imUrl, urlAuth, accessTokenOrchestrator)

    val projectManager = actorFactory.create(ActorType.PROJECT_MANAGER)
    val offseter = actorFactory.create(ActorType.OFFSETTER)
    val issuer = actorFactory.create(ActorType.ISSUER)


    initRequirement(urlCCCEV)
    initIndicatorsCarbon(urlCCCEV)

    val assetPoolId = null
//    val assetPoolId = createAssetPool(
//        urlVer,
//        issuer = issuer,
//        offsetter = offseter
//    )
    createRandomProject(urlVer, accessTokenOrchestrator, assetPoolId)
}

