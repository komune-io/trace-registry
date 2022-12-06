package city.smartb.registry.program.f2.project.domain.command

import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import f2.dsl.fnc.F2Function

/**
 * TODO
 * @d2 function
 * @parent
 */
typealias ProjectCreateFunction = F2Function<ProjectUpdateCommand, ProjectUpdatedEvent>
