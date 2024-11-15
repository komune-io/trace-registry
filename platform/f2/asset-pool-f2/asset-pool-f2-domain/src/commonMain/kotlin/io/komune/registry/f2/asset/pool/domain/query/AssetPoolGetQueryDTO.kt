package io.komune.registry.f2.asset.pool.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO
import io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTOBase
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Get an Asset Pool by id.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
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
