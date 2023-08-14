package city.smartb.registry.program.cccev.actor

import city.smartb.im.apikey.client.ApiKeyClient
import city.smartb.im.apikey.domain.features.command.ApiKeyOrganizationAddKeyCommand
import city.smartb.im.apikey.domain.model.ApiKey
import city.smartb.im.organization.client.OrganizationClient
import city.smartb.im.organization.domain.features.command.OrganizationCreateCommand
import city.smartb.im.organization.domain.features.query.OrganizationGetQuery
import city.smartb.im.organization.domain.model.Organization
import f2.dsl.fnc.invokeWith
import java.util.UUID

class ActorBuilder(private val imUrl: String, private val authUrl: String,  orchestrator: Actor){

    val organizationClient = OrganizationClient<Organization>(imUrl) {
        orchestrator.accessToken.access_token
    }
    val apikeyClient = ApiKeyClient<ApiKey>(imUrl) {
        orchestrator.accessToken.access_token
    }

    suspend fun create(
        type: ActorType,
        name: String? =  null
    ): Actor {

        val projectManagerCreated = organizationClient.organizationCreate(listOf(
            OrganizationCreateCommand(
            name = "${name ?: type.name}-${UUID.randomUUID()}",
            withApiKey = false,
            roles = listOf("tr_project_manager_admin")
        )
        )).first()


        val projectManager = organizationClient.organizationGet<Organization>(
            listOf(
                OrganizationGetQuery(
                    id = projectManagerCreated.id,
                )
            )
        ).first()

        val projectManagerKey = ApiKeyOrganizationAddKeyCommand(
            organizationId = projectManagerCreated.id,
            name = "tr-smartb-ver-${UUID.randomUUID()}",
        ).invokeWith(apikeyClient.apiKeyCreate())

        val nameProjectManager = projectManager.item!!.name
        val clientProjectManager = projectManagerKey.keyIdentifier
        val secretProjectManager = projectManagerKey.keySecret

        val accessTokenProjectManager =
            ActorAuth.getActor(authUrl, nameProjectManager, clientProjectManager, secretProjectManager)
        return accessTokenProjectManager
    }

}

