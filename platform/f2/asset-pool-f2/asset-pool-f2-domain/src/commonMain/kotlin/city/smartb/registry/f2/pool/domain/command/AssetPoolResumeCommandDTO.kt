package city.smartb.registry.f2.pool.domain.command

import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.command.pool.AssetPoolResumeCommand
import city.smartb.registry.s2.asset.domain.command.pool.AssetPoolResumeCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Resume an asset pool that had been put on hold, re-enabling new transactions to be emitted.
 * @d2 function
 * @order 30
 * @child [city.smartb.registry.s2.asset.domain.command.pool.AssetPoolResumeCommandDTO]
 */
typealias AssetPoolResumeFunction = F2Function<city.smartb.registry.f2.pool.domain.command.AssetPoolResumeCommandDTOBase, city.smartb.registry.f2.pool.domain.command.AssetPoolResumedEventDTOBase>

@JsExport
interface AssetPoolResumeCommandDTO: AssetPoolResumeCommandDTO

/**
 * @d2 inherit
 */
typealias AssetPoolResumeCommandDTOBase = AssetPoolResumeCommand

/**
 * @d2 event
 * @parent [AssetPoolResumeFunction]
 */
@JsExport
interface AssetPoolResumedEventDTO {
    /**
     * Id of the pool that has been resumed
     */
    val id: AssetPoolId
}

/**
 * @d2 inherit
 */
data class AssetPoolResumedEventDTOBase(
    override val id: AssetPoolId
): city.smartb.registry.f2.pool.domain.command.AssetPoolResumedEventDTO
