package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * List available themes for a given type of catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 45
 */
typealias CatalogueListAvailableThemesFunction = F2Function<CatalogueListAvailableThemesQuery, CatalogueListAvailableThemesResult>

/**
 * @d2 query
 * @parent [CatalogueListAvailableThemesFunction]
 */
@JsExport
@JsName("CatalogueListAvailableThemesQueryDTO")
interface CatalogueListAvailableThemesQueryDTO {
    val type: String
    val language: Language
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAvailableThemesQuery(
    override val type: String,
    override val language: Language
): CatalogueListAvailableThemesQueryDTO

/**
 * @d2 event
 * @parent [CatalogueListAvailableThemesFunction]
 */
@JsExport
@JsName("CatalogueListAvailableThemesResultDTO")
interface CatalogueListAvailableThemesResultDTO {
    val items: List<ConceptTranslatedDTO>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAvailableThemesResult(
    override val items: List<ConceptTranslatedDTOBase>,
): CatalogueListAvailableThemesResultDTO
