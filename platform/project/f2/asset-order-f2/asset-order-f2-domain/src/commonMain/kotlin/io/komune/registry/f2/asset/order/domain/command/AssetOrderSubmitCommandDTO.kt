package io.komune.registry.f2.asset.order.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.command.OrderSubmitCommand
import io.komune.registry.s2.order.domain.command.OrderSubmitCommandDTO
import kotlin.js.JsExport

/**
 * Submit a draft transaction order.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.order.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderSubmitCommandDTO]
 */
typealias AssetOrderSubmitFunction = F2Function<AssetOrderSubmitCommandDTOBase, AssetOrderSubmittedEventDTOBase>

@JsExport
interface AssetOrderSubmitCommandDTO: OrderSubmitCommandDTO

/**
 * @d2 inherit
 */
typealias AssetOrderSubmitCommandDTOBase = OrderSubmitCommand

/**
 * @d2 event
 * @parent [AssetOrderSubmitFunction]
 */
@JsExport
interface AssetOrderSubmittedEventDTO {
    /**
     * Id of the submitted order.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderSubmittedEventDTOBase(
    override val id: OrderId
): AssetOrderSubmittedEventDTO
