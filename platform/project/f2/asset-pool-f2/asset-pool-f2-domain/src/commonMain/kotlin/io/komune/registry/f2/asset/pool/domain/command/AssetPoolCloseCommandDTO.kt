package io.komune.registry.f2.asset.pool.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommandDTO
import kotlin.js.JsExport

/**
 * Close an asset pool, definitely disabling any new transaction to be emitted.
 * @d2 function
 * @order 40
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 * @child [io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommandDTO]
 */
typealias AssetPoolCloseFunction = F2Function<AssetPoolCloseCommandDTOBase, AssetPoolClosedEventDTOBase>

@JsExport
interface AssetPoolCloseCommandDTO: AssetPoolCloseCommandDTO

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
