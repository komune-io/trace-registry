package city.smartb.registry.program.s2.protocol.api.config

import city.smartb.registry.program.s2.protocol.api.entity.ProtocolEntity
import city.smartb.registry.program.s2.protocol.api.entity.ProtocolRepository
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolState
import city.smartb.registry.program.s2.protocol.domain.automate.s2Protocol
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.data.S2SpringDataConfigurerAdapter
import s2.spring.automate.executor.S2AutomateExecutorSpring

@Configuration
class ProtocolAutomateConfig(
	private val aggregate: ProtocolAutomateExecutor,
	repository: ProtocolRepository
): S2SpringDataConfigurerAdapter<ProtocolState, ProtocolId, ProtocolEntity, ProtocolAutomateExecutor>(repository) {
	override fun automate() = s2Protocol
	override fun executor() = aggregate
}

@Service
class ProtocolAutomateExecutor: S2AutomateExecutorSpring<ProtocolState, ProtocolId, ProtocolEntity>()
