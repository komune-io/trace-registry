package cccev.f2.requirement.domain.command

import cccev.core.requirement.command.RequirementUpdateCommand
import cccev.core.requirement.command.RequirementUpdatedEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

typealias RequirementUpdateFunction = F2Function<RequirementUpdateCommand, RequirementUpdatedEvent>

@JsExport
@JsName("RequirementUpdateCommandDTO")
interface RequirementUpdateCommandDTO: cccev.core.requirement.command.RequirementUpdateCommandDTO

@JsExport
@JsName("RequirementUpdatedEventDTO")
interface RequirementUpdatedEventDTO: cccev.core.requirement.command.RequirementUpdatedEventDTO
