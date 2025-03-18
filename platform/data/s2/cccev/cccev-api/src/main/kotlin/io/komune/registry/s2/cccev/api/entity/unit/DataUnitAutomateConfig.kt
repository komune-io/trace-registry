package io.komune.registry.s2.cccev.api.entity.unit

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.cccev.domain.DataUnitState
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitEvent
import io.komune.registry.s2.cccev.domain.s2DataUnit
import io.komune.registry.s2.commons.model.DataUnitId
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import kotlin.reflect.KClass

@Configuration
class DataUnitAutomateConfig(
	aggregate: DataUnitAutomateExecutor,
	evolver: DataUnitEvolver,
	projectSnapRepository: DataUnitSnapRepository,
): RegistryS2SourcingSpringDataAdapter<DataUnitEntity, DataUnitState, DataUnitEvent, DataUnitId, DataUnitAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository,
	DataUnitEntity::class
) {
	override fun automate() = s2DataUnit
	override fun entityType(): KClass<DataUnitEvent> = DataUnitEvent::class
}

@Service
class DataUnitAutomateExecutor: S2AutomateDeciderSpring<DataUnitEntity, DataUnitState, DataUnitEvent, DataUnitId>()
