package io.komune.registry.f2.asset.pool.domain.command

import cccev.dsl.model.InformationConcept
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create an AssetPool
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 * @order 10
 */
typealias AssetPoolCreateFunction = F2Function<AssetPoolCreateCommandDTOBase, AssetPoolCreatedEventDTOBase>

/**
 * @d2 command
 * @parent [AssetPoolCreateFunction]
 */
@JsExport
interface AssetPoolCreateCommandDTO {
    /**
     * Vintage of the assets issued inside the pool
     * @example "2023"
     */
    val vintage: String

    /**
     * Indicator of the assets issued inside the pool
     * @example "carbon"
     */
    val indicator: InformationConcept

    /**
     *
     * @example 0.1
     */
    val granularity: Double
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetPoolCreateCommandDTOBase(
    override val vintage: String,
    override val indicator: InformationConcept,
    override val granularity: Double
): AssetPoolCreateCommandDTO

/**
 * @d2 event
 * @parent [AssetPoolCreateFunction]
 */
@JsExport
interface AssetPoolCreatedEventDTO {
    /**
     * Id of the created pool
     */
    val id: AssetPoolId
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetPoolCreatedEventDTOBase(
    override val id: AssetPoolId
): AssetPoolCreatedEventDTO
