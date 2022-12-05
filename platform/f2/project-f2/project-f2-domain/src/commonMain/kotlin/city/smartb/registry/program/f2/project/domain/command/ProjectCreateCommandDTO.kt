package city.smartb.registry.program.f2.project.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.im.commons.model.AddressDTO
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * TODO
 * @d2 function
 * @parent
 */
typealias ProjectCreateFunction = F2Function<ProjectCreateCommandDTOBase, ProjectCreatedEvent>

/**
 * @d2 command
 * @parent [ProjectCreateFunction]
 */
@JsExport
@JsName("ProjectCreateCommandDTO")
interface ProjectCreateCommandDTO {
	val name: String
	val address: AddressDTO
	val supervisorId: UserId
	val targetRnc: String?
}

data class ProjectCreateCommandDTOBase(
	override val name: String,
	override val address: Address,
	override val supervisorId: UserId,
	override val targetRnc: String?
): ProjectCreateCommandDTO

/**
 * @d2 event
 * @parent [ProjectCreateFunction]
 */
@JsExport
@JsName("ProjectCreatedEventDTO")
interface ProjectCreatedEventDTO: city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEventDTO
