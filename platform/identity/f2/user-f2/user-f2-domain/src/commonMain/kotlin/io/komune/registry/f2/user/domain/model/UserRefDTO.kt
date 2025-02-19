package io.komune.registry.f2.user.domain.model

import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface UserRefDTO {
    val id: UserId
    val email: String
    val givenName: String
    val familyName: String
    val memberOf: OrganizationId
}

@Serializable
data class UserRef(
    override val id: UserId,
    override val email: String,
    override val givenName: String,
    override val familyName: String,
    override val memberOf: OrganizationId
): UserRefDTO
