package city.smartb.registry.program.f2.project.domain.command

import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import f2.dsl.fnc.F2Function

/**
 * Create Project
 * @d2 function
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEventDTO]
 */
typealias ProjectCreateFunction = F2Function<ProjectUpdateCommand, ProjectUpdatedEvent>
