package city.smartb.registry.program.f2.activity.domain.command

import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedEvent
import f2.dsl.fnc.F2Function


typealias ActivityCreateFunction = F2Function<ActivityUpdateCommand, ActivityUpdatedEvent>
