package io.komune.registry.f2.asset.pool.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.BigDecimalAsString
import io.komune.registry.s2.project.domain.model.ProjectId
import kotlin.js.JsExport

/**
 * Get a Transaction by id.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 */
typealias AssetStatsGetFunction = F2Function<AssetStatsGetQueryDTOBase, AssetStatsGetResultDTOBase>

/**
 * @d2 query
 * @parent [AssetStatsGetFunction]
 */
@JsExport
interface AssetStatsGetQueryDTO {
    val projectId: ProjectId
}

/**
 * @d2 inherit
 */
data class AssetStatsGetQueryDTOBase(
    override val projectId: ProjectId
): AssetStatsGetQueryDTO

/**
 * @d2 result
 * @parent [AssetStatsGetFunction]
 */
@JsExport
interface AssetStatsGetResultDTO {
    val available: BigDecimalAsString
    val retired: BigDecimalAsString
    val transferred: BigDecimalAsString
}

/**
 * @d2 inherit
 */
data class AssetStatsGetResultDTOBase(
    override val available: BigDecimalAsString,
    override val retired: BigDecimalAsString,
    override val transferred: BigDecimalAsString
): AssetStatsGetResultDTO
