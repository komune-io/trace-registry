package cccev.f2.requirement.domain.query

import cccev.core.requirement.model.RequirementIdentifier
import cccev.f2.requirement.domain.model.RequirementFlat
import cccev.f2.requirement.domain.model.RequirementFlatDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias RequirementGetByIdentifierFunction = F2Function<RequirementGetByIdentifierQueryDTOBase, RequirementGetByIdentifierResultDTOBase>

@JsExport
interface RequirementGetByIdentifierQueryDTO {
    val identifier: RequirementIdentifier
}

@Serializable
data class RequirementGetByIdentifierQueryDTOBase(
    override val identifier: RequirementIdentifier
): RequirementGetByIdentifierQueryDTO

@JsExport
interface RequirementGetByIdentifierResultDTO {
    val item: RequirementFlatDTO?
    val graph: Any // TODO CccevFlatGraphDTO
}

//@Serializable
data class RequirementGetByIdentifierResultDTOBase(
    override val item: RequirementFlat?,
    override val graph: Any // TODO CccevFlatGraph
): RequirementGetByIdentifierResultDTO
