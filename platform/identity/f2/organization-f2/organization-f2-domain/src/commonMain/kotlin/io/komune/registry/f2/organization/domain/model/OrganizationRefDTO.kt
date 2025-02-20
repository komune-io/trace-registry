package io.komune.registry.f2.organization.domain.model

import io.komune.registry.s2.commons.model.OrganizationId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

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
