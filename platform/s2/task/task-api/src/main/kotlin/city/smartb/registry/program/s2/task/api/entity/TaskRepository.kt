package city.smartb.registry.program.s2.task.api.entity

import com.redis.om.spring.repository.RedisDocumentRepository
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.TaskType
import java.util.Optional

interface TaskRepository: RedisDocumentRepository<TaskEntity, TaskId> {
    fun findByTypeAndTargetId(type: TaskType?, target: String): Optional<TaskEntity>
}
