package city.smartb.registry.program.s2.task.api

import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.api.commons.model.CollectionMatch
import city.smartb.registry.program.s2.task.api.config.TaskAutomateExecutor
import city.smartb.registry.program.s2.task.api.entity.TaskEntity
import city.smartb.registry.program.s2.task.api.query.GetPrioritizedTaskQueryDB
import city.smartb.registry.program.s2.task.domain.TaskAggregate
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.command.TaskAssignCommand
import city.smartb.registry.program.s2.task.domain.command.TaskAssignedEvent
import city.smartb.registry.program.s2.task.domain.command.TaskCreateCommand
import city.smartb.registry.program.s2.task.domain.command.TaskCreatedEvent
import city.smartb.registry.program.s2.task.domain.command.TaskPrioritizeCommand
import city.smartb.registry.program.s2.task.domain.command.TaskPrioritizedEvent
import city.smartb.registry.program.s2.task.domain.command.TaskSelfAssignCommand
import city.smartb.registry.program.s2.task.domain.command.TaskSelfAssignedEvent
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateCommentCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatePropertiesCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateStatusCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatedCommentEvent
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatedPropertiesEvent
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatedStatusEvent
import city.smartb.registry.program.s2.task.domain.model.TaskType
import org.springframework.stereotype.Service
import java.util.Date
import java.util.UUID

@Service
class TaskAggregateService(
    private val automate: TaskAutomateExecutor,
    private val getPrioritizedTaskQueryDB: GetPrioritizedTaskQueryDB
): TaskAggregate {

    override suspend fun create(command: TaskCreateCommand) = automate.createWithEvent(command) {
        val entity = TaskEntity().apply {
            id = UUID.randomUUID().toString()
            type = command.type
            metaTaskId = command.metaTaskId
            targetId = command.targetId
            friendlyId = command.friendlyId
            contact = command.contact
            supervisor = command.supervisorId
            status = TaskState.PENDING
            priority = 0
            properties = command.properties.toMutableMap()
        }
        entity to TaskCreatedEvent(
            id = entity.id
        )
    }

    override suspend fun assign(command: TaskAssignCommand): TaskAssignedEvent = automate.doTransition(command) {
        supervisor = command.supervisor

        if (metaTaskId != null) {
            assign(command.copy(id = metaTaskId!!))
        }

        this to TaskAssignedEvent(id)
    }

    override suspend fun selfAssign(command: TaskSelfAssignCommand): TaskSelfAssignedEvent {
        val metaTaskFilter = CollectionMatch(TaskType.metaTasks()).not()
        val task = getPrioritizedTaskQueryDB.execute(
            type = command.types?.let(::CollectionMatch)
                ?.and(metaTaskFilter)
                ?: metaTaskFilter
        ) ?: throw NotFoundException("Task", "TaskToPrioritize")

        assign(TaskAssignCommand(
            id = task.id,
            supervisor = command.supervisorId
        ))

        return TaskSelfAssignedEvent(task.id)
    }

    override suspend fun prioritize(command: TaskPrioritizeCommand) = automate.doTransition(command) {
        priority = Date().time
        this to TaskPrioritizedEvent(id)
    }

    override suspend fun updateStatus(command: TaskUpdateStatusCommand) = automate.doTransition(command) {
        val event = TaskUpdatedStatusEvent(
            id = id,
            status = command.status,
            previousStatus = status,
            type = type,
            targetId = targetId
        )
        status = command.status
        this to event
    }

    override suspend fun updateComment(command: TaskUpdateCommentCommand): TaskUpdatedCommentEvent = automate.doTransition(command) {
        if (metaTaskId == null) {
            comment = command.comment
        } else {
            updateComment(command.copy(id = metaTaskId!!))
        }
        this to TaskUpdatedCommentEvent(id)
    }

    override suspend fun updateProperties(command: TaskUpdatePropertiesCommand) = automate.doTransition(command) {
        properties = command.properties.toMutableMap()
        this to TaskUpdatedPropertiesEvent(id)
    }
}
