package city.smartb.registry.program.s2.task.domain.model

import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import i2.keycloak.f2.user.domain.model.UserId

typealias TaskId = String

data class Task(
    val id: TaskId,
    val friendlyId: String,
    val type: TaskType,
    val priority: Long,
    val supervisor: UserId?,
    val targetId: String,
    val contact: OrganizationId,
    val comment: String?,
    val properties: Map<String, String>,
    val status: TaskState,
    val lastModificationDate: Long
)
