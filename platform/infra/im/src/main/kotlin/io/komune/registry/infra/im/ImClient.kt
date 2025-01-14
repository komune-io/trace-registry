package io.komune.registry.infra.im

import f2.client.domain.AuthRealmClientSecret
import io.komune.im.f2.organization.client.OrganizationClient
import io.komune.im.f2.organization.client.organizationClient
import io.komune.im.f2.privilege.client.PrivilegeClient
import io.komune.im.f2.privilege.client.privilegeClient
import io.komune.im.f2.space.client.SpaceClient
import io.komune.im.f2.space.client.spaceClient
import io.komune.im.f2.user.client.UserClient
import io.komune.im.f2.user.client.userClient
import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.stereotype.Service

@Service
@EnableConfigurationProperties(ImProperties::class)
class ImClient(
    imProperties: ImProperties
) {
    val auth = AuthRealmClientSecret(
        serverUrl = imProperties.auth.url,
        realmId = imProperties.auth.realm,
        redirectUrl = null,
        clientId = imProperties.auth.clientId,
        clientSecret = imProperties.auth.clientSecret
    )

    val organization: OrganizationClient = runBlocking { organizationClient(imProperties.url) { auth }.invoke() }
    val privilege: PrivilegeClient = runBlocking { privilegeClient(imProperties.url) { auth }.invoke() }
    val space: SpaceClient = runBlocking { spaceClient(imProperties.url) { auth }.invoke() }
    val user: UserClient = runBlocking { userClient(imProperties.url) { auth }.invoke() }
}
