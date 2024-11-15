package io.komune.registry.f2.asset.order.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.command.OrderSubmitCommandDTO
import kotlin.js.JsExport

/**
 * Delete a transaction order.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.order.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderSubmitCommandDTO]
 */
typealias AssetOrderDeleteFunction = F2Function<AssetOrderDeleteCommandDTOBase, AssetOrderDeletedEventDTOBase>

/**
 * @d2 command
 * @parent [AssetOrderDeleteFunction]
 */
@JsExport
interface AssetOrderDeleteCommandDTO {
    /**
     * Id of the order to delete.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
class AssetOrderDeleteCommandDTOBase (
    override val id: OrderId
): AssetOrderDeleteCommandDTO

/**
 * @d2 event
 * @parent [AssetOrderDeleteFunction]
 */
@JsExport
interface AssetOrderDeletedEventDTO {
    /**
     * Id of the submitted order.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderDeletedEventDTOBase(
    override val id: OrderId
): AssetOrderDeletedEventDTO
