package city.smartb.registry.f2.pool.domain.command

import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.command.pool.AssetPoolHoldCommand
import city.smartb.registry.s2.asset.domain.command.pool.AssetPoolHoldCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Put an asset on hold, disabling new transactions to be emitted.
 * @d2 function
 * @order 20
 * @child [city.smartb.registry.s2.asset.domain.command.pool.AssetPoolHoldCommandDTO]
 */
typealias AssetPoolHoldFunction = F2Function<city.smartb.registry.f2.pool.domain.command.AssetPoolHoldCommandDTOBase, city.smartb.registry.f2.pool.domain.command.AssetPoolHeldEventDTOBase>

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
): city.smartb.registry.f2.pool.domain.command.AssetPoolHeldEventDTO
