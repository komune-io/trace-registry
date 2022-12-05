package city.smartb.registry.program.f2.task.api.service

import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.f2.task.api.model.toState
import city.smartb.registry.program.f2.task.api.model.toTaskType
import city.smartb.registry.program.f2.task.domain.command.TaskAssignedEventDTOBase
import city.smartb.registry.program.f2.task.domain.command.TaskPrioritizedEventDTOBase
import city.smartb.registry.program.f2.task.domain.command.TaskSelfAssignCommandDTOBase
import city.smartb.registry.program.f2.task.domain.command.TaskSelfAssignedEventDTOBase
import city.smartb.registry.program.f2.task.domain.command.TaskUpdateStatusCommandDTOBase
import city.smartb.registry.program.f2.task.domain.command.TaskUpdatedStatusEventDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskTypeDTOBase
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.domain.command.TaskAssignCommand
import city.smartb.registry.program.s2.task.domain.command.TaskPrioritizeCommand
import city.smartb.registry.program.s2.task.domain.command.TaskSelfAssignCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateCommentCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateStatusCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatedCommentEvent
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class TaskF2AggregateService(
    private val taskAggregateService: TaskAggregateService,
    private val taskApiFinderService: TaskF2FinderService
) {
    private val logger by Logger()

    suspend fun assign(cmd: TaskAssignCommand) = taskAggregateService.assign(cmd)
        .let { event -> taskApiFinderService.getOrNull(event.id)!! }
        .let(::TaskAssignedEventDTOBase)

    suspend fun selfAssign(command: TaskSelfAssignCommandDTOBase, supervisorId: UserId): TaskSelfAssignedEventDTOBase {
        return try {
            TaskSelfAssignCommand(
                supervisorId = supervisorId,
                types = command.types?.map(TaskTypeDTOBase::toTaskType)
            ).let { taskAggregateService.selfAssign(it) }
                .let { event -> taskApiFinderService.getOrNull(event.id) }
                .let(::TaskSelfAssignedEventDTOBase)
        } catch (e: NotFoundException) {
            logger.info("No task found for self-assignment.")
            TaskSelfAssignedEventDTOBase(null)
        }
    }

    suspend fun prioritize(cmd: TaskPrioritizeCommand) = taskAggregateService.prioritize(cmd)
        .let { event -> taskApiFinderService.getOrNull(event.id)!! }
        .let(::TaskPrioritizedEventDTOBase)

    suspend fun updateStatus(cmd: TaskUpdateStatusCommandDTOBase): TaskUpdatedStatusEventDTOBase {
        return TaskUpdateStatusCommand(
            id = cmd.id,
            status = cmd.status.toState(),
        ).let { taskAggregateService.updateStatus(it) }
            .let { event -> taskApiFinderService.getOrNull(event.id)!! }
            .let(::TaskUpdatedStatusEventDTOBase)
    }

    suspend fun updateComment(cmd: TaskUpdateCommentCommand): TaskUpdatedCommentEvent {
        return taskAggregateService.updateComment(cmd)
    }
}
