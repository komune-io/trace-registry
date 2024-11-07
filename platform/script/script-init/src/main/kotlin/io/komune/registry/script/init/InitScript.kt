package io.komune.registry.script.init

import f2.client.domain.AuthRealmClientSecret
import io.komune.registry.s2.project.domain.model.ProjectId
import io.komune.registry.script.init.actor.Actor
import io.komune.registry.script.init.actor.ActorAuth
import io.komune.registry.script.init.actor.ActorBuilder
import io.komune.registry.script.init.actor.ActorType
import io.komune.registry.script.init.asset.createAssetPool
import io.komune.registry.script.init.catalogue.createRandomCatalogue
import io.komune.registry.script.init.project.addAssetPoolToProject
import io.komune.registry.script.init.project.createRandomProject

class InitScript(
    private val properties: RegistryScriptInitProperties
) {
    suspend fun run(
        project: Boolean = true,
        asset: Boolean = true,
        cccev: Boolean = false,
        catalogue: Boolean = false
    ) {
        val authRealm = AuthRealmClientSecret(
            clientId = properties.admin.clientId,
            clientSecret = properties.admin.clientSecret,
            serverUrl = properties.auth.url,
            realmId = properties.auth.realmId
        )
        val accessTokenAdmin= ActorAuth.getActor(
            properties.admin.name,
            authRealm
        )

        if(cccev) {
            properties.cccev?.url?.let { url ->
                initRequirement(url)
                initIndicatorsCarbon(url)
            }
        }

        if(catalogue) {
            properties.registry?.url?.let { url ->
                createRandomCatalogue(url, accessTokenAdmin)
            }
        }

        initRegistry(accessTokenAdmin, project, asset)
    }

    private suspend fun initRegistry(
        accessTokenAdmin: Actor,
        project: Boolean,
        asset: Boolean
    ) {
        properties.registry?.url?.let { url ->
            val actorFactory = ActorBuilder(properties.im.url, properties.auth.url, accessTokenAdmin)
            val orchestrator = actorFactory.create(ActorType.ORCHESTRATOR)
            val projectManager = actorFactory.create(ActorType.PROJECT_MANAGER)
            val offseter = actorFactory.create(ActorType.OFFSETTER)
            val issuer = actorFactory.create(ActorType.ISSUER)
            if (project) {
                val projectIds = createRandomProject(
                    url,
                    accessTokenAdmin,
                    countRange = 0..properties.nbProject
                )

                projectIds.forEach { projectId ->
                    initAsset(asset, url, orchestrator, projectManager, issuer, offseter, projectId)
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
