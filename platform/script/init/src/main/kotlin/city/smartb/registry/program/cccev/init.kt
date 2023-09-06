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
    val urlCCCEV = "https://dev.trace.smart-b.io/cccev"
    val urlVer = "https://dev.trace.smart-b.io/ver"

    val nameOrchestrator = "Smartb"
    val clientOrchestrator = "tr-smartb-ver-app"
    val secretOrchestrator = "4d3b598f-5a25-4b3e-b956-cf80aff8e1b7"
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
