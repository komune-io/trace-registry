package city.smartb.registry.f2.asset.pool.domain.query

import city.smartb.registry.f2.asset.pool.domain.model.AssetPoolDTO
import f2.dsl.cqrs.page.OffsetPaginationDTO
import f2.dsl.cqrs.page.PageQueryResultDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get page of AssetPools.
 * @d2 function
 * @order 10
 */
typealias AssetPoolPageFunction = F2Function<AssetPoolPageQueryDTOBase, AssetPoolPageResult>

/**
 * @d2 query
 * @parent [AssetPoolPageFunction]
 */
@JsExport
@JsName("AssetPoolPageQueryDTO")
interface AssetPoolPageQueryDTO {
    val limit: Int?
    val offset: Int?
    val status: String?
    val vintage: String?
}

/**
 * @d2 inherit
 */
data class AssetPoolPageQueryDTOBase(
    override val limit: Int? = null,
    override val offset: Int? = null,
    override val status: String? = null,
    override val vintage: String? = null
): AssetPoolPageQueryDTO

/**
 * @d2 event
 * @parent [AssetPoolPageFunction]
 */
@JsExport
@JsName("AssetPoolPageResultDTO")
interface AssetPoolPageResultDTO: PageQueryResultDTO<AssetPoolDTO>

/**
 * @d2 inherit
 */
@Serializable
data class AssetPoolPageResult(
    override val items: List<AssetPoolDTO>,
    override val total: Int,
    override val pagination: OffsetPaginationDTO
): AssetPoolPageResultDTO
