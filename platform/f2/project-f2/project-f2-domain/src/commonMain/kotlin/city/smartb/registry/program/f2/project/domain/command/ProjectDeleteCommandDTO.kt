package city.smartb.registry.program.f2.project.domain.command

import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent

/**
 * Delete a project by id.
 * @d2 function
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent]
 */
typealias ProjectDeleteFunction = F2Function<ProjectDeleteCommand, ProjectDeletedEvent>
