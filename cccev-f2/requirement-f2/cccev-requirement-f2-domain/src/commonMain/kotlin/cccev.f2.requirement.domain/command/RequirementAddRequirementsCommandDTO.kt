package cccev.f2.requirement.domain.command

import cccev.core.requirement.command.RequirementAddRequirementsCommand
import cccev.core.requirement.command.RequirementAddedRequirementsEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

typealias RequirementAddRequirementsFunction = F2Function<RequirementAddRequirementsCommand, RequirementAddedRequirementsEvent>

@JsExport
@JsName("RequirementAddRequirementsCommandDTO")
interface RequirementAddRequirementsCommandDTO: cccev.core.requirement.command.RequirementAddRequirementsCommandDTO

@JsExport
@JsName("RequirementAddedRequirementsEventDTO")
interface RequirementAddedRequirementsEventDTO: cccev.core.requirement.command.RequirementAddedRequirementsEventDTO
