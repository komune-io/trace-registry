package cccev.f2.requirement.domain.query

import cccev.core.requirement.model.RequirementId
import cccev.f2.requirement.domain.model.RequirementFlat
import cccev.f2.requirement.domain.model.RequirementFlatDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias RequirementGetFunction = F2Function<RequirementGetQueryDTOBase, RequirementGetResultDTOBase>

@JsExport
interface RequirementGetQueryDTO {
    val id: RequirementId
}

@Serializable
data class RequirementGetQueryDTOBase(
    override val id: RequirementId
): RequirementGetQueryDTO

@JsExport
interface RequirementGetResultDTO {
    val item: RequirementFlatDTO?
    val graph: Any // TODO CccevFlatGraphDTO
}

//@Serializable
data class RequirementGetResultDTOBase(
    override val item: RequirementFlat?,
    override val graph: Any // TODO CccevFlatGraph
): RequirementGetResultDTO
