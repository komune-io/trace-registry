package city.smartb.registry.f2.asset.order.domain.query

import city.smartb.registry.f2.asset.order.domain.model.OrderDTO
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import f2.dsl.cqrs.page.OffsetPaginationDTO
import f2.dsl.cqrs.page.PageQueryResultDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get page of AssetOrders.
 * @d2 function
 * @order 10
 */
typealias AssetOrderPageFunction = F2Function<AssetOrderPageQueryDTOBase, AssetOrderPageResult>

/**
 * @d2 query
 * @parent [AssetOrderPageFunction]
 */
@JsExport
@JsName("AssetOrderPageQueryDTO")
interface AssetOrderPageQueryDTO {
    val limit: Int?
    val offset: Int?
    val status: String?
    val from: String?
    val to: String?
    val by: String?
    val type: String?
    val poolId: AssetPoolId?
}

/**
 * @d2 inherit
 */
data class AssetOrderPageQueryDTOBase(
    override val limit: Int? = null,
    override val offset: Int? = null,
    override val status: String? = null,
    override val from: String? = null,
    override val to: String? = null,
    override val by: String? = null,
    override val type: String? = null,
    override val poolId: AssetPoolId? = null
): AssetOrderPageQueryDTO

/**
 * @d2 event
 * @parent [AssetOrderPageFunction]
 */
@JsExport
@JsName("AssetOrderPageResultDTO")
interface AssetOrderPageResultDTO: PageQueryResultDTO<OrderDTO>

/**
 * @d2 inherit
 */
@Serializable
data class AssetOrderPageResult(
    override val items: List<OrderDTO>,
    override val total: Int,
    override val pagination: OffsetPaginationDTO
): AssetOrderPageResultDTO
