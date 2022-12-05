package city.smartb.registry.program.s2.task.domain

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

interface TaskAggregate {
    suspend fun create(command: TaskCreateCommand): TaskCreatedEvent
    suspend fun assign(command: TaskAssignCommand): TaskAssignedEvent
    suspend fun selfAssign(command: TaskSelfAssignCommand): TaskSelfAssignedEvent
    suspend fun prioritize(command: TaskPrioritizeCommand): TaskPrioritizedEvent
    suspend fun updateStatus(command: TaskUpdateStatusCommand): TaskUpdatedStatusEvent
    suspend fun updateComment(command: TaskUpdateCommentCommand): TaskUpdatedCommentEvent
    suspend fun updateProperties(command: TaskUpdatePropertiesCommand): TaskUpdatedPropertiesEvent
}
