package io.komune.registry.program.s2.dataset.api.config

import io.komune.registry.program.s2.dataset.api.DatasetEvolver
import io.komune.registry.program.s2.dataset.api.entity.DatasetEntity
import io.komune.registry.program.s2.dataset.api.entity.DatasetRepository
import io.komune.registry.program.s2.dataset.api.entity.DatasetSnapRepository
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.automate.s2Dataset
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemovedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import s2.spring.sourcing.data.S2SourcingSpringDataAdapter
import kotlin.reflect.KClass

@Configuration
class DatasetAutomateConfig(
    aggregate: DatasetAutomateExecutor,
    evolver: DatasetEvolver,
    projectSnapRepository: DatasetSnapRepository,
    private val repository: DatasetRepository
): S2SourcingSpringDataAdapter<DatasetEntity, DatasetState, DatasetEvent, DatasetId, DatasetAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {

	private val logger = LoggerFactory.getLogger(DatasetAutomateConfig::class.java)
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Dataset history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun automate() = s2Dataset

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(DatasetEvent::class) {
				subclass(DatasetCreatedEvent::class, DatasetCreatedEvent.serializer())
				subclass(DatasetDeletedEvent::class, DatasetDeletedEvent.serializer())
				subclass(DatasetUpdatedEvent::class, DatasetUpdatedEvent.serializer())
				subclass(DatasetLinkedDatasetsEvent::class, DatasetLinkedDatasetsEvent.serializer())
				subclass(DatasetLinkedThemesEvent::class, DatasetLinkedThemesEvent.serializer())
				subclass(DatasetSetImageEvent::class, DatasetSetImageEvent.serializer())
				subclass(DatasetAddedDistributionEvent::class, DatasetAddedDistributionEvent.serializer())
				subclass(DatasetUpdatedDistributionEvent::class, DatasetUpdatedDistributionEvent.serializer())
				subclass(DatasetRemovedDistributionEvent::class, DatasetRemovedDistributionEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<DatasetEvent> = DatasetEvent::class

}

@Service
class DatasetAutomateExecutor: S2AutomateDeciderSpring<DatasetEntity, DatasetState, DatasetEvent, DatasetId>()
