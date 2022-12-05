package city.smartb.registry.program.f2.project.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.im.commons.model.AddressDTO
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedDetailsEvent
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update basic details of the project.
 * @d2 function
 * @parent
 */
typealias ProjectUpdateDetailsFunction = F2Function<ProjectUpdateDetailsCommandDTOBase, ProjectUpdatedDetailsEvent>

/**
 * @d2 command
 * @parent [ProjectUpdateDetailsFunction]
 */
@JsExport
@JsName("ProjectUpdateDetailsCommandDTO")
interface ProjectUpdateDetailsCommandDTO: ProjectCommand {
    /**
     * Identifier of the project to update.
     */
    override val id: ProjectId

    /**
     * New name of the project.
     * @example "Projekt (but better)"
     */
    val name: String

    /**
     * New address of the project.
     */
    val address: AddressDTO

    val targetRnc: String?

    /**
     * Supervisor of the project.
     */
    val supervisorId: UserId
}

data class ProjectUpdateDetailsCommandDTOBase(
    override val id: ProjectId,
    override val name: String,
    override val address: Address,
    override val targetRnc: String?,
    override val supervisorId: UserId
): ProjectUpdateDetailsCommandDTO

@JsExport
@JsName("ProjectUpdatedDetailsEventDTO")
interface ProjectUpdatedDetailsEventDTO: city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedDetailsEventDTO
