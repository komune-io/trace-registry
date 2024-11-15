package io.komune.registry.f2.asset.pool.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommandDTO
import kotlin.js.JsExport

/**
 * Resume an asset pool that had been put on hold, re-enabling new transactions to be emitted.
 * @d2 function
 * @order 30
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 * @child [io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommandDTO]
 */
typealias AssetPoolResumeFunction = F2Function<AssetPoolResumeCommandDTOBase, AssetPoolResumedEventDTOBase>

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
): AssetPoolResumedEventDTO
