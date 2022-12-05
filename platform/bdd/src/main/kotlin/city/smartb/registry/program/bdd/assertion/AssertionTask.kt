package city.smartb.registry.program.bdd.assertion

import city.smartb.registry.program.s2.task.api.entity.TaskEntity
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.model.TaskType
import org.assertj.core.api.Assertions

fun AssertionBdd.task(taskRepository: TaskRepository) = AssertionTask(taskRepository)

class AssertionTask(
    override val repository: TaskRepository
): AssertionPostgresEntity<TaskEntity, TaskId, AssertionTask.TaskAssert>() {

    override fun assertThat(entity: TaskEntity) = TaskAssert(entity)

    inner class TaskAssert(
        private val task: TaskEntity
    ) {
        fun hasFields(
            id: TaskId = task.id,
            type: TaskType = task.type,
            priority: Long = task.priority,
            supervisor: String? = task.supervisor,
            targetId: String = task.targetId,
            contact: String = task.contact,
            properties: Map<String, String> = task.properties,
            status: TaskState = task.status,
        ) = also {
            Assertions.assertThat(task.id).isEqualTo(id)
            Assertions.assertThat(task.type).isEqualTo(type)
            Assertions.assertThat(task.priority).isEqualTo(priority)
            Assertions.assertThat(task.supervisor).isEqualTo(supervisor)
            Assertions.assertThat(task.targetId).isEqualTo(targetId)
            Assertions.assertThat(task.contact).isEqualTo(contact)
            Assertions.assertThat(task.properties).containsExactlyInAnyOrderEntriesOf(properties)
            Assertions.assertThat(task.status).isEqualTo(status)
        }

        fun hasNotStatus(status: TaskState) {
            Assertions.assertThat(task.status).isNotEqualTo(status)
        }
    }
}
