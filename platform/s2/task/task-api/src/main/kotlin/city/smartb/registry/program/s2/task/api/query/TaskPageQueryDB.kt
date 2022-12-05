package city.smartb.registry.program.s2.task.api.query

import city.smartb.registry.program.api.commons.model.Match
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.s2.task.api.entity.TaskEntity
import city.smartb.registry.program.s2.task.domain.model.TaskId
import org.springframework.stereotype.Repository

@Repository
class TaskPageQueryDB {

    fun execute(
        id: Match<TaskId>? = null,
    ): PageDTO<TaskEntity> = TODO()
}
