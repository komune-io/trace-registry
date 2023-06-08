package city.smartb.registry.program.f2.pool.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Create an AssetPool
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
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
data class AssetPoolCreateCommandDTOBase(
        override val vintage: String,
        override val indicator: String,
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
data class AssetPoolCreatedEventDTOBase(
    override val id: AssetPoolId
): AssetPoolCreatedEventDTO
