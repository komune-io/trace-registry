package city.smartb.registry.program.s2.project.api.config

import city.smartb.registry.program.s2.project.api.entity.project.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.project.ProjectRepository
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.automate.s2Project
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.data.S2SpringDataConfigurerAdapter
import s2.spring.automate.executor.S2AutomateExecutorSpring

@Configuration
class ProjectAutomateConfig(
	private val aggregate: ProjectAutomateExecutor,
	repository: ProjectRepository
): S2SpringDataConfigurerAdapter<ProjectState, ProjectId, ProjectEntity, ProjectAutomateExecutor>(repository) {
	override fun automate() = s2Project
	override fun executor() = aggregate
}

@Service
class ProjectAutomateExecutor: S2AutomateExecutorSpring<ProjectState, ProjectId, ProjectEntity>()
