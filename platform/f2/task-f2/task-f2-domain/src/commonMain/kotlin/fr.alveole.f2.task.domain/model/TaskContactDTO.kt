package city.smartb.registry.program.f2.task.domain.model

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TaskContactDTO")
interface TaskContactDTO {
    /**
     * Roles of the organization in charge of the task.
     */
    val roles: List<String>

    /**
     * Name of the organization in charge of the task.
     */
    val organizationName: String

    /**
     * Phone number of the organization in charge of the task.
     */
    val phone: String?

    /**
     * Organization's supervisor given name in charge of the task.
     */
    val givenName: String

    /**
     * Organization's supervisor family name in charge of the task.
     */
    val familyName: String

    /**
     * Organization's supervisor email in charge of the task.
     */
    val email: String
}

data class TaskContactDTOBase(
    override val roles: List<String>,
    override val organizationName: String,
    override val phone: String?,
    override val givenName: String,
    override val familyName: String,
    override val email: String
): TaskContactDTO
