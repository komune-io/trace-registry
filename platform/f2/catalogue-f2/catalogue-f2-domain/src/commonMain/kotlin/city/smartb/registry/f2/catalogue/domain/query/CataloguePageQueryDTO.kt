package city.smartb.registry.f2.catalogue.domain.query

import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a page of activities.
 * @d2 function
 * @parent [city.smartb.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CataloguePageFunction = F2Function<CataloguePageQuery, CataloguePageResult>

/**
 * @d2 query
 * @parent [CataloguePageFunction]
 */
@JsExport
@JsName("CataloguePageQueryDTO")
interface CataloguePageQueryDTO {
    /**
     * id of the catalogue
     */
    val catalogueId: String?
    val title: String?
    val status: String?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
data class CataloguePageQuery(
    override val catalogueId: String? = null,
    override val title: String? = null,
    override val status: String? = null,
    override val offset: Int?,
    override val limit: Int?,
): CataloguePageQueryDTO

/**
 * @d2 event
 * @parent [CataloguePageFunction]
 */
@JsExport
@JsName("CataloguePageResultDTO")
interface CataloguePageResultDTO: PageDTO<CatalogueModel>

/**
 * @d2 inherit
 */
data class CataloguePageResult(
    override val items: List<CatalogueModel>,
    override val total: Int
): CataloguePageResultDTO
