package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueDraftRefDTO {
    val id: CatalogueDraftId
    val originalCatalogueId: CatalogueId
    val language: Language
    val baseVersion: Int
    val creator: UserRefDTO?
    val validator: UserRefDTO?
    val validatorOrganization: OrganizationRefDTO?
    val status: CatalogueDraftState
}

@Serializable
data class CatalogueDraftRefDTOBase(
    override val id: CatalogueDraftId,
    override val originalCatalogueId: CatalogueId,
    override val language: Language,
    override val baseVersion: Int,
    override val creator: UserRef?,
    override val validator: UserRef?,
    override val validatorOrganization: OrganizationRef?,
    override val status: CatalogueDraftState
) : CatalogueDraftRefDTO
