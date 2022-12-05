package city.smartb.registry.program.s2.task.api.entity

import city.smartb.registry.program.s2.task.domain.model.Task
import city.smartb.registry.program.s2.task.domain.model.TaskId

suspend fun TaskEntity.toTask(getTask: suspend (TaskId) -> Task) = Task(
    id = id,
    friendlyId = friendlyId,
    type = type,
    priority = priority,
    supervisor = supervisor,
    targetId = targetId,
    contact = contact,
    comment = metaTaskId?.let { getTask(it) }?.comment ?: comment,
    properties = properties,
    status = status,
    lastModificationDate = lastModificationDate
)
