package io.komune.registry.f2.asset.order.domain.command

import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.command.OrderDeleteCommand
import io.komune.registry.s2.order.domain.command.OrderDeleteCommandDTO
import io.komune.registry.s2.order.domain.command.OrderSubmitCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Delete a transaction order.
 * @d2 function
 * @parent [import io.komune.registry.f2.asset.order.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderSubmitCommandDTO]
 */
typealias AssetOrderDeleteFunction = F2Function<AssetOrderDeleteCommandDTOBase, AssetOrderDeletedEventDTOBase>

@JsExport
interface AssetOrderDeleteCommandDTO: OrderDeleteCommandDTO

/**
 * @d2 inherit
 */
typealias AssetOrderDeleteCommandDTOBase = OrderDeleteCommand

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
