package city.smartb.registry.program.f2.task.api.model

import city.smartb.im.organization.domain.model.Organization
import city.smartb.im.user.domain.model.User
import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.f2.task.domain.model.TaskContactDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTO
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskTypeDTO
import city.smartb.registry.program.f2.task.domain.model.TaskTypeDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskUserRef
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.model.Task
import city.smartb.registry.program.s2.task.domain.model.TaskType

suspend fun Task.toDTO(getUser: suspend (UserId) -> User, getOrganization: suspend (OrganizationId) -> Organization) = TaskDTOBase(
    id = id,
    friendlyId = friendlyId,
    type = type.toDTO(),
    priority = priority,
    supervisor = supervisor?.let { getUser(it).toTaskUserRef() },
    targetId = targetId,
    comment = comment,
    properties = properties,
    status = status.toDTO(),
    lastModificationDate = lastModificationDate
)

fun TaskState.toDTO() = TaskStatusDTOBase(name)
fun TaskStatusDTO.toState() = TaskState.valueOf(value)

fun TaskType.toDTO() = TaskTypeDTOBase(name)
fun TaskTypeDTO.toTaskType() = TaskType.valueOf(value)

private fun User.toTaskUserRef() = TaskUserRef(
    id = id,
    givenName = givenName,
    familyName = familyName,
    email = email,
    memberOf = memberOf!!.id
)
