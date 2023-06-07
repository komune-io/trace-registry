package city.smartb.registry.program.f2.pool.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommand
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Close an asset pool, definitely disabling any new transaction to be emitted.
 * @d2 function
 * @order 40
 * @child [city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommandDTO]
 */
typealias AssetPoolCloseFunction = F2Function<AssetPoolCloseCommandDTOBase, AssetPoolClosedEventDTOBase>

@JsExport
interface AssetPoolCloseCommandDTO: city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommandDTO

/**
 * @d2 inherit
 */
typealias AssetPoolCloseCommandDTOBase = AssetPoolCloseCommand

/**
 * @d2 event
 * @parent [AssetPoolCloseFunction]
 */
@JsExport
interface AssetPoolClosedEventDTO {
    /**
     * Id of the pool that has been resumed
     */
    val id: AssetPoolId
}

/**
 * @d2 inherit
 */
data class AssetPoolClosedEventDTOBase(
    override val id: AssetPoolId
): AssetPoolClosedEventDTO
