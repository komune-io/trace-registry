package city.smartb.registry.f2.pool.domain.query

import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Get an Asset Pool by id.
 * @d2 function
 * @order 10
 */
typealias AssetPoolGetFunction = F2Function<city.smartb.registry.f2.pool.domain.query.AssetPoolGetQueryDTOBase, city.smartb.registry.f2.pool.domain.query.AssetPoolGetResultDTOBase>

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
): city.smartb.registry.f2.pool.domain.query.AssetPoolGetQueryDTO

/**
 * @d2 result
 * @parent [AssetPoolGetFunction]
 */
@JsExport
interface AssetPoolGetResultDTO {
    /**
     * Fetched asset pool, or null if it doesn't exist.
     */
    val item: city.smartb.registry.f2.pool.domain.model.AssetPoolDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetPoolGetResultDTOBase(
    override val item: city.smartb.registry.f2.pool.domain.model.AssetPoolDTOBase?
): city.smartb.registry.f2.pool.domain.query.AssetPoolGetResultDTO
