package io.komune.registry.f2.organization.domain.model

import io.komune.registry.s2.commons.model.OrganizationId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface OrganizationRefDTO {
    val id: OrganizationId
    val name: String
}

@Serializable
data class OrganizationRef(
    override val id: OrganizationId,
    override val name: String
): OrganizationRefDTO
