package city.smartb.registry.f2.pool.domain.command

import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create an AssetPool
 * @d2 function
 * @parent [city.smartb.registry.f2.asset.domain.D2AssetF2Page]
 * @order 10
 */
typealias AssetPoolCreateFunction = F2Function<city.smartb.registry.f2.pool.domain.command.AssetPoolCreateCommandDTOBase, city.smartb.registry.f2.pool.domain.command.AssetPoolCreatedEventDTOBase>

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
     * @example carbon
     */
    val indicator: String

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
        override val indicator: String,
        override val granularity: Double
): city.smartb.registry.f2.pool.domain.command.AssetPoolCreateCommandDTO

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
): city.smartb.registry.f2.pool.domain.command.AssetPoolCreatedEventDTO
