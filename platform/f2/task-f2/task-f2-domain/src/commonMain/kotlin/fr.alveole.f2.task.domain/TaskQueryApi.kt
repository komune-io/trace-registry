package city.smartb.registry.program.f2.task.domain

import city.smartb.registry.program.f2.task.domain.query.TaskGetFunction
import city.smartb.registry.program.f2.task.domain.query.TaskPageFunction

interface TaskQueryApi {
    fun taskPage(): TaskPageFunction
    fun taskGet(): TaskGetFunction
}
