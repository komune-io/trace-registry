package city.smartb.registry.program.cccev

import city.smartb.registry.program.cccev.actor.ActorAuth
import city.smartb.registry.program.cccev.actor.ActorBuilder
import city.smartb.registry.program.cccev.actor.ActorType
import city.smartb.registry.program.cccev.asset.createAssetPool
import city.smartb.registry.program.cccev.project.addAssetPoolToProject
import city.smartb.registry.program.cccev.project.createRandomProject
import kotlinx.coroutines.runBlocking

fun main() = runBlocking {
    val urlAuth = "https://auth.dev.connect.smart-b.io/realms/sb-dev"
    val imUrl = "https://dev.connect.smart-b.io/im"
    val urlCCCEV = "http://localhost:8083"
    val urlVer = "http://localhost:8070"

    val nameOrchestrator = "Smartb"
    val clientOrchestrator = "tr-smartb-ver-app"
    val secretOrchestrator = "8d637328-3e2f-476c-9737-29bd2889df83"
    val accessTokenOrchestrator= ActorAuth.getActor(urlAuth, nameOrchestrator, clientOrchestrator, secretOrchestrator)
    val actorFactory = ActorBuilder(imUrl, urlAuth, accessTokenOrchestrator)

    val projectManager = actorFactory.create(ActorType.PROJECT_MANAGER)
    val offseter = actorFactory.create(ActorType.OFFSETTER)
    val issuer = actorFactory.create(ActorType.ISSUER)


    initRequirement(urlCCCEV)
    initIndicatorsCarbon(urlCCCEV)

    val assetPoolId = createAssetPool(
        urlVer,
        issuer = issuer,
        offsetter = offseter
    )
    val projectId = createRandomProject(urlVer, accessTokenOrchestrator, assetPoolId).first()
    addAssetPoolToProject(urlVer, accessTokenOrchestrator, projectId, assetPoolId)
}
