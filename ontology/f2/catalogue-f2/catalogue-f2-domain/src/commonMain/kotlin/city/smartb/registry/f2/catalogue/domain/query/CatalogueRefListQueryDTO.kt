package city.smartb.registry.f2.catalogue.domain.query

import city.smartb.registry.f2.catalogue.domain.dto.CatalogueRefDTO
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
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
typealias CatalogueRefListFunction = F2Function<CatalogueRefListQuery, CatalogueRefListResult>

/**
 * @d2 query
 * @parent [CatalogueRefListFunction]
 */
@JsExport
@JsName("CatalogueRefListQueryDTO")
interface CatalogueRefListQueryDTO

/**
 * @d2 inherit
 */
@Serializable
class CatalogueRefListQuery: CatalogueRefListQueryDTO

/**
 * @d2 event
 * @parent [CatalogueRefListFunction]
 */
@JsExport
@JsName("CatalogueRefListResultDTO")
interface CatalogueRefListResultDTO {
    val items: List<CatalogueRefDTO>
    val total: Int
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefListResult(
    override val items: List<CatalogueRefDTOBase>,
    override val total: Int
): CatalogueRefListResultDTO
