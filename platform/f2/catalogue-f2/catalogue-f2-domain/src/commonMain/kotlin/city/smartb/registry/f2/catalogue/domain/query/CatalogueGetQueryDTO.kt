package city.smartb.registry.f2.catalogue.domain.query

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get a page of activities.
 * @d2 function
 * @parent [city.smartb.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueGetFunction = F2Function<CatalogueGetQuery, CatalogueGetResult>

/**
 * @d2 query
 * @parent [CatalogueGetFunction]
 */
@JsExport
@JsName("CatalogueGetQueryDTO")
interface CatalogueGetQueryDTO {
    /**
     * id of the catalogue
     */
    val id: CatalogueId?
    /**
     * id of the catalogue
     */
    val identifier: CatalogueId?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetQuery(
    override val id: CatalogueId? = null,
    override val identifier: CatalogueIdentifier? = null,
): CatalogueGetQueryDTO

/**
 * @d2 event
 * @parent [CatalogueGetFunction]
 */
@JsExport
@JsName("CatalogueGetResultDTO")
interface CatalogueGetResultDTO {
    val item: CatalogueModel?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetResult(
    override val item: CatalogueModel?,
): CatalogueGetResultDTO
