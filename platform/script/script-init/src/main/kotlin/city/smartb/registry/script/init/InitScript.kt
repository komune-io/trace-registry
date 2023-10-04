package city.smartb.registry.script.init

import city.smartb.registry.s2.project.domain.model.ProjectId
import city.smartb.registry.script.init.actor.Actor
import city.smartb.registry.script.init.actor.ActorAuth
import city.smartb.registry.script.init.actor.ActorBuilder
import city.smartb.registry.script.init.actor.ActorType
import city.smartb.registry.script.init.asset.createAssetPool
import city.smartb.registry.script.init.catalogue.createRandomCatalogue
import city.smartb.registry.script.init.project.addAssetPoolToProject
import city.smartb.registry.script.init.project.createRandomProject

class InitScript(
    private val properties: RegistryScriptInitProperties
) {
    suspend fun run(
        project: Boolean = false,
        asset: Boolean = false,
        cccev: Boolean = false,
        catalogue: Boolean = false
    ) {
        val accessTokenOrchestrator= ActorAuth.getActor(
            properties.auth.url,
            properties.orchestrator.name,
            properties.orchestrator.clientId,
            properties.orchestrator.clientSecret
        )

        if(cccev) {
            properties.cccev?.url?.let { url ->
                initRequirement(url)
                initIndicatorsCarbon(url)
            }
        }

        if(catalogue) {
            properties.registry?.url?.let { url ->
                createRandomCatalogue(url, accessTokenOrchestrator)
            }
        }

        initRegistry(accessTokenOrchestrator, project, asset)
    }

    private suspend fun initRegistry(
        accessTokenOrchestrator: Actor,
        project: Boolean,
        asset: Boolean
    ) {
        properties.registry?.url?.let { url ->
            val actorFactory = ActorBuilder(properties.im.url, properties.auth.url, accessTokenOrchestrator)
            val projectManager = actorFactory.create(ActorType.PROJECT_MANAGER)
            val offseter = actorFactory.create(ActorType.OFFSETTER)
            val issuer = actorFactory.create(ActorType.ISSUER)
            if (project) {
                val projectIds = createRandomProject(
                    url,
                    accessTokenOrchestrator,
                    countRange = 0..properties.nbProject
                )

                projectIds.forEach { projectId ->
                    initAsset(asset, url, accessTokenOrchestrator, projectManager, issuer, offseter, projectId)
                }
            }
        }
    }

    private suspend fun initAsset(
        asset: Boolean,
        url: String,
        accessTokenOrchestrator: Actor,
        projectManager: Actor,
        issuer: Actor,
        offseter: Actor,
        projectId: ProjectId
    ) {
        if (asset) {
            val shouldCreatePool = (0..2).shuffled().first() == 1
            if (shouldCreatePool) {
                val assetPoolId = createAssetPool(
                    url,
                    orchestrator = accessTokenOrchestrator,
                    projectManager = projectManager,
                    issuer = issuer,
                    offsetter = offseter
                )
                addAssetPoolToProject(
                    url,
                    accessTokenOrchestrator,
                    projectId,
                    assetPoolId
                )
            }
        }
    }
}
