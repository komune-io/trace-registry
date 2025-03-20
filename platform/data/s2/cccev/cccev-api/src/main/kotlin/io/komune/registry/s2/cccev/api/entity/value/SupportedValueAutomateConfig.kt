package io.komune.registry.s2.cccev.api.entity.value

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.cccev.domain.SupportedValueState
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueEvent
import io.komune.registry.s2.cccev.domain.s2SupportedValue
import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import kotlin.reflect.KClass

@Configuration
class SupportedValueAutomateConfig(
    aggregate: SupportedValueAutomateExecutor,
    evolver: SupportedValueEvolver,
    projectSnapRepository: SupportedValueSnapRepository,
): RegistryS2SourcingSpringDataAdapter<
        SupportedValueEntity, SupportedValueState, SupportedValueEvent, SupportedValueId, SupportedValueAutomateExecutor>(
    aggregate,
    evolver,
    projectSnapRepository,
    SupportedValueEntity::class
) {
    override fun automate() = s2SupportedValue
    override fun entityType(): KClass<SupportedValueEvent> = SupportedValueEvent::class
}

@Service
class SupportedValueAutomateExecutor
    : S2AutomateDeciderSpring<SupportedValueEntity, SupportedValueState, SupportedValueEvent, SupportedValueId>()
