package city.smartb.registry.program.f2.project.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent

/**
 * Update basic details of the project.
 * @d2 function
 * @parent
 */
typealias ProjectUpdateDetailsFunction = F2Function<ProjectUpdateCommand, ProjectUpdatedEvent>
