package city.smartb.registry.program.f2.pool.domain.query

import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTOBase
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get an Asset Pool by id.
 * @d2 function
 * @order 10
 */
typealias AssetPoolGetFunction = F2Function<AssetPoolGetQueryDTOBase, AssetPoolGetResultDTOBase>

/**
 * @d2 query
 * @parent [AssetPoolGetFunction]
 */
@JsExport
interface AssetPoolGetQueryDTO {
    /**
     * Id of the asset pool to fetch.
     */
    val id: AssetPoolId
}

/**
 * @d2 inherit
 */
data class AssetPoolGetQueryDTOBase(
    override val id: AssetPoolId
): AssetPoolGetQueryDTO

/**
 * @d2 result
 * @parent [AssetPoolGetFunction]
 */
@JsExport
interface AssetPoolGetResultDTO {
    /**
     * Fetched asset pool, or null if it doesn't exist.
     */
    val item: AssetPoolDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetPoolGetResultDTOBase(
    override val item: AssetPoolDTOBase?
): AssetPoolGetResultDTO
