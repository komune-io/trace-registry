package city.smartb.registry.program.f2.task.domain

import city.smartb.registry.program.f2.task.domain.command.TaskAssignFunction
import city.smartb.registry.program.f2.task.domain.command.TaskPrioritizeFunction
import city.smartb.registry.program.f2.task.domain.command.TaskSelfAssignFunction
import city.smartb.registry.program.f2.task.domain.command.TaskUpdateCommentFunction
import city.smartb.registry.program.f2.task.domain.command.TaskUpdateStatusFunction

interface TaskCommandApi {
    fun taskAssign(): TaskAssignFunction
    fun taskSelfAssign(): TaskSelfAssignFunction
    fun taskPrioritize(): TaskPrioritizeFunction
    fun taskUpdateStatus(): TaskUpdateStatusFunction
    fun taskUpdateComment(): TaskUpdateCommentFunction
}
