package io.komune.registry.f2.asset.order.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.asset.order.domain.model.OrderDTO
import io.komune.registry.f2.asset.order.domain.model.OrderDTOBase
import io.komune.registry.s2.asset.domain.command.pool.OrderId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Get an Asset Pool by id.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.order.domain.D2AssetF2Page]
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
