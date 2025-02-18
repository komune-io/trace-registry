package io.komune.registry.f2.catalogue.domain.dto

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
    val status: CatalogueDraftState
}

@Serializable
data class CatalogueDraftRefDTOBase(
    override val id: CatalogueDraftId,
    override val originalCatalogueId: CatalogueId,
    override val language: Language,
    override val baseVersion: Int,
    override val status: CatalogueDraftState
) : CatalogueDraftRefDTO
