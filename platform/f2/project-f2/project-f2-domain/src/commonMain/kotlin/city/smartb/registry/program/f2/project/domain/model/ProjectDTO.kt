package city.smartb.registry.program.f2.project.domain.model

import city.smartb.im.commons.model.Address
import city.smartb.im.commons.model.AddressDTO
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.model.WithS2State

@JsExport
@JsName("ProjectDTO")
interface ProjectDTO: WithS2State<ProjectState> {
	/**
	 * Identifier of the project.
	 */
	val id: ProjectId

	/**
	 * Human-readable identifier of the project.
	 */
	val friendlyId: String

	/**
	 * Beneficiary doing the project.
	 */
	val beneficiary: ProjectOrganizationRefDTO

	/**
	 * Supervisor of the project.
	 */
	val supervisor: ProjectUserRefDTO

	/**
	 * Name of the project.
	 */
	val name: String

	/**
	 * Address of the project.
	 */
	val address: AddressDTO?

	/**
	 * Status of the project.
	 */
	val status: ProjectState
}

data class ProjectDTOBase(
	override val id: ProjectId,
	override val friendlyId: String,
	override val beneficiary: ProjectOrganizationRef,
	override val supervisor: ProjectUserRef,
	override val name: String,
	override val address: Address?,
	override val status: ProjectState,
): ProjectDTO {
	override fun s2State() = status
}
