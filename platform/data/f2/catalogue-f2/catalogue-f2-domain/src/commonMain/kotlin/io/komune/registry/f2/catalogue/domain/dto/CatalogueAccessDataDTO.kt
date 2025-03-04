package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface CatalogueAccessDataDTO {
    val id: String
    val creator: UserRefDTO?
    val creatorOrganization: OrganizationRefDTO?
    val ownerOrganization: OrganizationRefDTO?
    val accessRights: CatalogueAccessRight
}

@Serializable
data class CatalogueAccessData(
    override val id: String,
    override val creator: UserRefDTO?,
    override val creatorOrganization: OrganizationRefDTO?,
    override val ownerOrganization: OrganizationRefDTO?,
    override val accessRights: CatalogueAccessRight
): CatalogueAccessDataDTO
