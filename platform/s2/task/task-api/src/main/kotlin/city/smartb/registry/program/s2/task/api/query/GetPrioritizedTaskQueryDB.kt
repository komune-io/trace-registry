package city.smartb.registry.program.s2.task.api.query

import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.task.api.entity.TaskEntity
import city.smartb.registry.program.s2.task.domain.model.TaskType
import org.springframework.stereotype.Repository

@Repository
class GetPrioritizedTaskQueryDB {

    fun execute(
        type: Match<TaskType>? = null
    ): TaskEntity? = TODO()
}
