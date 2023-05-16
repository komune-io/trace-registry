package city.smartb.registry.program.f2.asset.domain.query

import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlin.js.JsExport

@JsExport
interface AssetGetStatsQueryDTO {
    val projectId: ProjectId
}

data class AssetGetStatsQueryDTOBase(
    override val projectId: ProjectId
): AssetGetStatsQueryDTO

@JsExport
interface AssetGetStatsResultDTO {
    val available: Double
    val retired: Double
    val traded: Double
}

data class AssetGetStatsResultDTOBase(
    override val available: Double,
    override val retired: Double,
    override val traded: Double
): AssetGetStatsResultDTO
