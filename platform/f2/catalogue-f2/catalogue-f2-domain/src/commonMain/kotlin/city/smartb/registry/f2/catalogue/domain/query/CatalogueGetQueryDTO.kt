package city.smartb.registry.f2.catalogue.domain.query

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.model.DCatApCatalogueModel
import city.smartb.registry.s2.catalogue.domain.model.DcatApCatalogue
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

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
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
data class CatalogueGetQuery(
    override val id: CatalogueId,
): CatalogueGetQueryDTO

/**
 * @d2 event
 * @parent [CatalogueGetFunction]
 */
@JsExport
@JsName("CatalogueGetResultDTO")
interface CatalogueGetResultDTO {
    val item: DcatApCatalogue?
}

/**
 * @d2 inherit
 */
data class CatalogueGetResult(
    override val item: DCatApCatalogueModel?,
): CatalogueGetResultDTO
