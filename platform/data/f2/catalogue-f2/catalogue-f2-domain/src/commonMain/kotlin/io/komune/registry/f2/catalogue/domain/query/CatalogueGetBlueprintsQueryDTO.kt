package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueBlueprintsDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueBlueprintsDTOBase
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias CatalogueGetBlueprintsFunction = F2Function<CatalogueGetBlueprintsQuery, CatalogueGetBlueprintsResult>

@JsExport
interface CatalogueGetBlueprintsQueryDTO {
    val language: Language
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetBlueprintsQuery(
    override val language: Language
): CatalogueGetBlueprintsQueryDTO

/**
 * @d2 event
 * @parent [CatalogueGetBlueprintsFunction]
 */
@JsExport
interface CatalogueGetBlueprintsResultDTO {
    val item: CatalogueBlueprintsDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetBlueprintsResult(
    override val item: CatalogueBlueprintsDTOBase?,
): CatalogueGetBlueprintsResultDTO
