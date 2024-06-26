package io.komune.registry.script.init.actor

import io.komune.im.apikey.client.ApiKeyClient
import io.komune.im.apikey.domain.command.ApiKeyOrganizationAddKeyCommand
import io.komune.im.commons.auth.ImRole
import io.komune.im.f2.organization.client.OrganizationClient
import io.komune.im.f2.organization.domain.command.OrganizationCreateCommand
import io.komune.im.f2.organization.domain.model.OrganizationStatus
import io.komune.im.f2.organization.domain.query.OrganizationGetQuery
import f2.dsl.fnc.invokeWith
import java.util.UUID

class ActorBuilder(private val imUrl: String, private val authUrl: String,  orchestrator: Actor){

    val organizationClient = OrganizationClient(imUrl) {
        orchestrator.accessToken.access_token
    }
    val apikeyClient = ApiKeyClient(imUrl) {
        orchestrator.accessToken.access_token
    }

    suspend fun create(
        type: ActorType,
        name: String? =  null
    ): Actor {

        val projectManagerCreated = organizationClient.organizationCreate(listOf(
            OrganizationCreateCommand(
                name = "${name ?: type.name}-${UUID.randomUUID()}",
                roles = type.organizationRoles,
                status = OrganizationStatus.VALIDATED.name
            )
        )).first()


        val projectManager = organizationClient.organizationGet(
            listOf(
                OrganizationGetQuery(
                    id = projectManagerCreated.id,
                )
            )
        ).first()

        val projectManagerKey = ApiKeyOrganizationAddKeyCommand(
            organizationId = projectManagerCreated.id,
            name = "${UUID.randomUUID()}",
            roles = listOf(ImRole.ORCHESTRATOR_ADMIN.identifier)
        ).invokeWith(apikeyClient.apiKeyCreate())

        val nameProjectManager = projectManager.item!!.name
        val clientProjectManager = projectManagerKey.keyIdentifier
        val secretProjectManager = projectManagerKey.keySecret

        val accessTokenProjectManager =
            ActorAuth.getActor(authUrl, nameProjectManager, clientProjectManager, secretProjectManager)
        return accessTokenProjectManager
    }

}
