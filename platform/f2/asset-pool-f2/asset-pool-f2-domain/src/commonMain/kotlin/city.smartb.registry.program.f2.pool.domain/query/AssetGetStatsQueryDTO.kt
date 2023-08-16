package city.smartb.registry.program.f2.pool.domain.query

import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Get a Transaction by id.
 * @d2 function
 */
typealias AssetStatsGetFunction = F2Function<AssetStatsGetQueryDTOBase, AssetStatsGetResultDTOBase>

@JsExport
interface AssetStatsGetQueryDTO {
    val projectId: ProjectId
}

data class AssetStatsGetQueryDTOBase(
    override val projectId: ProjectId
): AssetStatsGetQueryDTO

@JsExport
interface AssetStatsGetResultDTO {
    val available: BigDecimalAsString
    val retired: BigDecimalAsString
    val transferred: BigDecimalAsString
}

data class AssetStatsGetResultDTOBase(
    override val available: BigDecimalAsString,
    override val retired: BigDecimalAsString,
    override val transferred: BigDecimalAsString
): AssetStatsGetResultDTO
