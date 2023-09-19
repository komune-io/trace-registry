package city.smartb.registry.script.init

import city.smartb.registry.script.init.actor.ActorAuth
import city.smartb.registry.script.init.actor.ActorBuilder
import city.smartb.registry.script.init.actor.ActorType
import city.smartb.registry.script.init.asset.createAssetPool
import city.smartb.registry.script.init.project.addAssetPoolToProject
import city.smartb.registry.script.init.project.createRandomProject

class InitScript(
    private val properties: RegistryScriptInitProperties
) {
    suspend fun run() {
        val accessTokenOrchestrator= ActorAuth.getActor(
            properties.auth.url,
            properties.orchestrator.name,
            properties.orchestrator.clientId,
            properties.orchestrator.clientSecret
        )

        properties.cccev?.url?.let { url ->
            initRequirement(url)
            initIndicatorsCarbon(url)
        }

        properties.registry?.url?.let { url ->
            val actorFactory = ActorBuilder(properties.im.url,  properties.auth.url, accessTokenOrchestrator)
            val projectManager = actorFactory.create(ActorType.PROJECT_MANAGER)
            val offseter = actorFactory.create(ActorType.OFFSETTER)
            val issuer = actorFactory.create(ActorType.ISSUER)

            val projectIds = createRandomProject(properties.registry.url, accessTokenOrchestrator, countRange = 0..properties.nbProject)

            projectIds.forEach { projectId ->
                val shouldCreatePool = (0..2).shuffled().first() == 1
                if(shouldCreatePool) {
                    val assetPoolId = createAssetPool(
                        properties.registry.url,
                        orchestrator = accessTokenOrchestrator,
                        projectManager = projectManager,
                        issuer = issuer,
                        offsetter = offseter
                    )
                    addAssetPoolToProject(properties.registry.url, accessTokenOrchestrator, projectId, assetPoolId)
                }
            }

        }
    }
}
