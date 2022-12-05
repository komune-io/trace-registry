package city.smartb.registry.program.f2.task.domain.model

import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TaskDTO")
interface TaskDTO {
	/**
	 * Unique identifier of the task.
	 */
	val id: TaskId

	/**
	 * Human-readable identifier of the task computed from its target. It may not be unique.
	 */
	val friendlyId: String

	/**
	 * Type of the task.
	 */
	val type: TaskTypeDTO

	/**
	 * Priority sequence of the task.
	 */
	val priority: Long

	/**
	 * ID of the user in charge of the task.
	 */
	val supervisor: TaskUserRefDTO?

	/**
	 * ID of the entity concerned by the task.
	 */
	val targetId: String

	/**
	 * Organization's information in charge of the task.
	 */
//	val contact: TaskContactDTO

	/**
	 * Comment of the task.
	 */
	val comment: String?

	/**
	 * Properties of the task.
	 */
	val properties: Map<String, String>

	/**
	 * Last modification date of the task.
	 */
	val lastModificationDate: Long

	/**
	 * Status of the task.
	 */
	val status: TaskStatusDTO
}

data class TaskDTOBase(
	override val id: TaskId,
	override val friendlyId: String,
	override val type: TaskTypeDTOBase,
	override val priority: Long,
	override val supervisor: TaskUserRef?,
	override val targetId: String,
//	override val contact: TaskContactDTO,
	override val comment: String?,
	override val properties: Map<String, String>,
	override val lastModificationDate: Long,
	override val status: TaskStatusDTO
): TaskDTO
