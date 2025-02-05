package io.komune.registry.script.init

import f2.client.domain.AuthRealmClientSecret
import io.komune.registry.s2.project.domain.model.ProjectId
import io.komune.registry.script.init.actor.Actor
import io.komune.registry.script.init.actor.ActorAuth
import io.komune.registry.script.init.actor.ActorBuilder
import io.komune.registry.script.init.actor.ActorType
import io.komune.registry.script.init.asset.createAssetPool
import io.komune.registry.script.init.catalogue.create100MCatalogue
import io.komune.registry.script.init.catalogue.create100MThemes
import io.komune.registry.script.init.catalogue.createMenuCatalogue
import io.komune.registry.script.init.project.addAssetPoolToProject
import io.komune.registry.script.init.project.createRandomProject

class InitScript(
    private val properties: RegistryScriptInitProperties
) {
    suspend fun run(
        project: Boolean = properties.flag.project,
        asset: Boolean = properties.flag.project,
        cccev: Boolean = properties.flag.control,
        catalogue: Boolean = properties.flag.data
    ) {
        val authRealm = AuthRealmClientSecret(
            clientId = properties.admin.clientId,
            clientSecret = properties.admin.clientSecret,
            serverUrl = properties.auth.url,
            realmId = properties.auth.realmId
        )
        val accessTokenAdmin = ActorAuth.getActor(
            properties.admin.name,
            authRealm
        )
        if(cccev) {
            properties.cccev?.url?.let { url ->
                initRequirement(url)
            }
        }

        if(catalogue) {
            properties.registry?.url?.let { url ->
//                createStandardsCatalogue(url, accessTokenAdmin)
                create100MThemes(url, accessTokenAdmin)
                createMenuCatalogue(url, accessTokenAdmin, "")
                create100MCatalogue(url, accessTokenAdmin, "")
            }
        }

        val projectIds: List<ProjectId>? = if (project) {
            properties.registry?.url?.let { url ->
                initProject(url, accessTokenAdmin)
            }
        } else null

        if(asset) {
            properties.registry?.url?.let { url ->
             initAsset(accessTokenAdmin, url, projectIds)
            }
        }
    }

    private suspend fun initProject(
        url: String,
        accessTokenAdmin: Actor,
    ): List<ProjectId> {
        return createRandomProject(
            url,
            accessTokenAdmin,
            countRange = 0..properties.nbProject
        )
    }

    private suspend fun InitScript.initAsset(
        accessTokenAdmin: Actor,
        url: String,
        projectIds: List<ProjectId>?
    ) {
        if(!projectIds.isNullOrEmpty()) {
            val actorFactory = ActorBuilder(properties.im.url, properties.auth.url, accessTokenAdmin)
            val orchestrator = actorFactory.create(ActorType.ORCHESTRATOR)
            val projectManager = actorFactory.create(ActorType.PROJECT_MANAGER)
            val offseter = actorFactory.create(ActorType.OFFSETTER)
            val issuer = actorFactory.create(ActorType.ISSUER)
            projectIds.forEach { projectId ->
                initAsset(url, orchestrator, projectManager, issuer, offseter, projectId)
            }
        }
    }

    private suspend fun initAsset(
        url: String,
        accessTokenOrchestrator: Actor,
        projectManager: Actor,
        issuer: Actor,
        offseter: Actor,
        projectId: ProjectId
    ) {
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
