package city.smartb.registry.program.f2.project.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Delete a project by id.
 * @d2 function
 * @parent
 */
typealias ProjectDeleteFunction = F2Function<ProjectDeleteCommandDTOBase, ProjectDeletedEvent>

/**
 * @d2 command
 * @parent [ProjectDeleteFunction]
 */
@JsExport
@JsName("ProjectDeleteCommandDTO")
interface ProjectDeleteCommandDTO: ProjectCommand {
    /**
     * Identifier of the project to delete.
     */
    override val id: ProjectId
}

data class ProjectDeleteCommandDTOBase(
    override val id: ProjectId
): ProjectDeleteCommandDTO

@JsExport
@JsName("ProjectDeletedEventDTO")
interface ProjectDeletedEventDTO: city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEventDTO
