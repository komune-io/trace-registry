package city.smartb.registry.program.f2.activity.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedEvent


typealias ActivityUpdateFunction = F2Function<ActivityUpdateCommand, ActivityUpdatedEvent>
