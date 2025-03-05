package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface CatalogueDraftRefDTO {
    val id: CatalogueDraftId
    val originalCatalogueId: CatalogueId
    val language: Language
    val baseVersion: Int
    val creator: UserRefDTO
    val status: CatalogueDraftState
}

@Serializable
data class CatalogueDraftRefDTOBase(
    override val id: CatalogueDraftId,
    override val originalCatalogueId: CatalogueId,
    override val language: Language,
    override val baseVersion: Int,
    override val creator: UserRef,
    override val status: CatalogueDraftState
) : CatalogueDraftRefDTO
