package io.komune.registry.program.s2.dataset.api.config

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.program.s2.dataset.api.DatasetEvolver
import io.komune.registry.program.s2.dataset.api.entity.DatasetEntity
import io.komune.registry.program.s2.dataset.api.entity.DatasetSnapRepository
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.automate.s2Dataset
import io.komune.registry.s2.dataset.domain.command.DatasetEvent
import kotlin.reflect.KClass
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring

@Configuration
class DatasetAutomateConfig(
    aggregate: DatasetAutomateExecutor,
    evolver: DatasetEvolver,
    datasetSnapRepository: DatasetSnapRepository,
): RegistryS2SourcingSpringDataAdapter<DatasetEntity, DatasetState, DatasetEvent, DatasetId, DatasetAutomateExecutor>(
	aggregate,
	evolver,
	datasetSnapRepository,
	DatasetEntity::class
) {
	override fun automate() = s2Dataset
	override fun entityType(): KClass<DatasetEvent> = DatasetEvent::class
}

@Service
class DatasetAutomateExecutor: S2AutomateDeciderSpring<DatasetEntity, DatasetState, DatasetEvent, DatasetId>()
