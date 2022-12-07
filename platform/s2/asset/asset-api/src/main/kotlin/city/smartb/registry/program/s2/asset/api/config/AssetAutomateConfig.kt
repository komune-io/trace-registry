package city.smartb.registry.program.s2.asset.api.config

import city.smartb.registry.program.s2.asset.api.entity.AssetEntity
import city.smartb.registry.program.s2.asset.api.entity.AssetRepository
import city.smartb.registry.program.s2.asset.domain.automate.AssetState
import city.smartb.registry.program.s2.asset.domain.automate.s2Asset
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.data.S2SpringDataConfigurerAdapter
import s2.spring.automate.executor.S2AutomateExecutorSpring

@Configuration
class AssetAutomateConfig(
	private val aggregate: AssetAutomateExecutor,
	repository: AssetRepository
): S2SpringDataConfigurerAdapter<AssetState, AssetId, AssetEntity, AssetAutomateExecutor>(repository) {
	override fun automate() = s2Asset
	override fun executor() = aggregate
}

@Service
class AssetAutomateExecutor: S2AutomateExecutorSpring<AssetState, AssetId, AssetEntity>()
