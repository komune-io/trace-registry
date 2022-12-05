package city.smartb.registry.program.s2.task.domain.automate

import city.smartb.registry.program.s2.task.domain.command.TaskAssignCommand
import city.smartb.registry.program.s2.task.domain.command.TaskCreateCommand
import city.smartb.registry.program.s2.task.domain.command.TaskPrioritizeCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateCommentCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatePropertiesCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateStatusCommand
import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlinx.serialization.Serializable
import s2.dsl.automate.Evt
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.WithId
import s2.dsl.automate.builder.s2
import kotlin.js.JsExport
import kotlin.js.JsName

val s2Task = s2 {
    name = "Task"
    init<TaskCreateCommand> {
        to = TaskS2State.EXISTS
        role = TaskRole.User
    }
    selfTransaction<TaskAssignCommand> {
        states += TaskS2State.EXISTS
        role = TaskRole.User
    }
    selfTransaction<TaskPrioritizeCommand> {
        states += TaskS2State.EXISTS
        role = TaskRole.User
    }
    selfTransaction<TaskUpdateStatusCommand> {
        states += TaskS2State.EXISTS
        role = TaskRole.User
    }
    selfTransaction<TaskUpdatePropertiesCommand> {
        states += TaskS2State.EXISTS
        role = TaskRole.User
    }
    selfTransaction<TaskUpdateCommentCommand> {
        states += TaskS2State.EXISTS
        role = TaskRole.User
    }
}

enum class TaskS2State(override val position: Int): S2State {
    EXISTS(0)
}

@Serializable
enum class TaskState {
    PENDING,
    WAITING,
    TRANSFERRED,
    DONE,
    REJECTED,
    CANCELED
}

enum class TaskRole(val value: String): S2Role {
    User("user");
    override fun toString() = value
}

@JsExport
@JsName("TaskInitCommand")
interface TaskInitCommand: S2InitCommand

@JsExport
@JsName("TaskCommand")
interface TaskCommand: S2Command<TaskId>

@JsExport
@JsName("TaskEvent")
interface TaskEvent: Evt, WithId<TaskId>
