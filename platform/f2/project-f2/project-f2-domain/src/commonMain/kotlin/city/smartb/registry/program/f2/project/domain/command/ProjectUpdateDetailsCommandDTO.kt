package city.smartb.registry.program.f2.project.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent

/**
 * Update the project.
 * @d2 function
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent]
 */
typealias ProjectUpdateFunction = F2Function<ProjectUpdateCommand, ProjectUpdatedEvent>
