package city.smartb.registry.program.s2.activity.api.config

import city.smartb.registry.program.s2.activity.api.entity.ActivityEntity
import city.smartb.registry.program.s2.activity.api.entity.ActivityRepository
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import city.smartb.registry.program.s2.activity.domain.automate.s2Activity
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.data.S2SpringDataConfigurerAdapter
import s2.spring.automate.executor.S2AutomateExecutorSpring

@Configuration
class ActivityAutomateConfig(
	private val aggregate: ActivityAutomateExecutor,
	repository: ActivityRepository
): S2SpringDataConfigurerAdapter<ActivityState, ActivityId, ActivityEntity, ActivityAutomateExecutor>(repository) {
	override fun automate() = s2Activity
	override fun executor() = aggregate
}

@Service
class ActivityAutomateExecutor: S2AutomateExecutorSpring<ActivityState, ActivityId, ActivityEntity>()
