package city.smartb.registry.program.f2.task.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateCommentCommand
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatedCommentEvent
import kotlin.js.JsExport
import kotlin.js.JsName

typealias TaskUpdateCommentFunction = F2Function<TaskUpdateCommentCommand, TaskUpdatedCommentEvent>

@JsExport
@JsName("TaskUpdateCommentCommandDTO")
interface TaskUpdateCommentCommandDTO: city.smartb.registry.program.s2.task.domain.command.TaskUpdateCommentCommandDTO

@JsExport
@JsName("TaskUpdatedCommentEventDTO")
interface TaskUpdatedCommentEventDTO: city.smartb.registry.program.s2.task.domain.command.TaskUpdatedCommentEventDTO
