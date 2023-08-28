package city.smartb.registry.program.f2.asset.domain.query

import city.smartb.registry.program.f2.asset.domain.model.OrderDTO
import city.smartb.registry.program.f2.asset.domain.model.OrderDTOBase
import city.smartb.registry.program.s2.asset.domain.command.pool.OrderId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Get an Asset Pool by id.
 * @d2 function
 * @order 10
 */
typealias AssetOrderGetFunction = F2Function<AssetOrderGetQueryDTOBase, AssetOrderGetResultDTOBase>

/**
 * @d2 query
 * @parent [AssetOrderGetFunction]
 */
@JsExport
interface AssetOrderGetQueryDTO {
    /**
     * Id of the asset order to fetch.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderGetQueryDTOBase(
    override val id: OrderId
): AssetOrderGetQueryDTO

/**
 * @d2 result
 * @parent [AssetOrderGetFunction]
 */
@JsExport
interface AssetOrderGetResultDTO {
    /**
     * Fetched asset order, or null if it doesn't exist.
     */
    val item: OrderDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetOrderGetResultDTOBase(
    override val item: OrderDTOBase?
): AssetOrderGetResultDTO
