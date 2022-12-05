package city.smartb.registry.program.s2.task.api.config

import city.smartb.registry.program.s2.task.api.entity.TaskEntity
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.automate.TaskS2State
import city.smartb.registry.program.s2.task.domain.automate.s2Task
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.data.S2SpringDataConfigurerAdapter
import s2.spring.automate.executor.S2AutomateExecutorSpring

@Configuration
class TaskAutomateConfig(
	private val aggregate: TaskAutomateExecutor,
	repository: TaskRepository
): S2SpringDataConfigurerAdapter<TaskS2State, TaskId, TaskEntity, TaskAutomateExecutor>(repository) {
	override fun automate() = s2Task
	override fun executor() = aggregate
}

@Service
class TaskAutomateExecutor: S2AutomateExecutorSpring<TaskS2State, TaskId, TaskEntity>()
