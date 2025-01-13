package io.komune.registry.f2.asset.pool.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommandDTO
import kotlin.js.JsExport

/**
 * Put an asset on hold, disabling new transactions to be emitted.
 * @d2 function
 * @order 20
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 * @child [io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommandDTO]
 */
typealias AssetPoolHoldFunction = F2Function<AssetPoolHoldCommandDTOBase, AssetPoolHeldEventDTOBase>

@JsExport
interface AssetPoolHoldCommandDTO: AssetPoolHoldCommandDTO

/**
 * @d2 inherit
 */
typealias AssetPoolHoldCommandDTOBase = AssetPoolHoldCommand

/**
 * @d2 event
 * @parent [AssetPoolHoldFunction]
 */
@JsExport
interface AssetPoolHeldEventDTO {
    /**
     * Id of the pool that has been put on hold
     */
    val id: AssetPoolId
}

/**
 * @d2 inherit
 */
data class AssetPoolHeldEventDTOBase(
    override val id: AssetPoolId
): AssetPoolHeldEventDTO
