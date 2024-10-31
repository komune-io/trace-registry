package io.komune.registry.script.init.actor

import f2.client.domain.AuthRealmClientSecret
import f2.dsl.fnc.invoke
import io.komune.im.apikey.domain.command.ApiKeyOrganizationAddKeyCommand
import io.komune.im.commons.auth.ImRole
import io.komune.im.f2.organization.domain.command.OrganizationCreateCommand
import io.komune.im.f2.organization.domain.model.OrganizationStatus
import io.komune.im.f2.organization.domain.query.OrganizationGetQuery
import f2.dsl.fnc.invokeWith
import io.komune.im.f2.apikey.client.apiKeyClient
import io.komune.im.f2.organization.client.organizationClient
import java.util.UUID
import kotlinx.coroutines.runBlocking

class ActorBuilder(
    private val imUrl: String,
    private val authUrl: String,
    private val actor: Actor,
){

    fun organizationClient() = runBlocking {
        organizationClient(imUrl) { actor.authRealm }.invoke()
    }
    fun apikeyClient() =  runBlocking {
        apiKeyClient(imUrl) {
            actor.authRealm
        }.invoke()
    }

    suspend fun create(
        type: ActorType,
        name: String? =  null
    ): Actor {

        val projectManagerCreated = organizationClient().organizationCreate().invoke(
            OrganizationCreateCommand(
                name = "${name ?: type.name}-${UUID.randomUUID()}",
                roles = type.organizationRoles,
                status = OrganizationStatus.VALIDATED.name
            )
        )


        val projectManager = organizationClient().organizationGet().invoke(
                OrganizationGetQuery(
                    id = projectManagerCreated.id,
                )
        )

        val projectManagerKey = ApiKeyOrganizationAddKeyCommand(
            organizationId = projectManagerCreated.id,
            name = "${UUID.randomUUID()}",
            roles = listOf(ImRole.ORCHESTRATOR_ADMIN.identifier)
        ).invokeWith(apikeyClient().apiKeyCreate())

        val nameProjectManager = projectManager.item!!.name
        val clientProjectManager = projectManagerKey.keyIdentifier
        val secretProjectManager = projectManagerKey.keySecret
        val authRealm = AuthRealmClientSecret(
            clientId = clientProjectManager,
            clientSecret = secretProjectManager,
            serverUrl = authUrl,
            realmId = projectManagerCreated.id
        )
        val accessTokenProjectManager =
            ActorAuth.getActor(nameProjectManager, authRealm)
        return accessTokenProjectManager
    }
}
