package io.komune.registry.program.s2.catalogue.api.config

import io.komune.registry.program.s2.catalogue.api.CatalogueEvolver
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueSnapRepository
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.automate.s2Catalogue
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
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
class CatalogueAutomateConfig(
    aggregate: CatalogueAutomateExecutor,
    evolver: CatalogueEvolver,
    projectSnapRepository: CatalogueSnapRepository,
    private val repository: CatalogueRepository
): S2SourcingSpringDataAdapter<CatalogueEntity, CatalogueState, CatalogueEvent, CatalogueId, CatalogueAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {

	private val logger = LoggerFactory.getLogger(CatalogueAutomateConfig::class.java)
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Catalogue history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun automate() = s2Catalogue

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(CatalogueEvent::class) {
				subclass(CatalogueCreatedEvent::class, CatalogueCreatedEvent.serializer())
				subclass(CatalogueDeletedEvent::class, CatalogueDeletedEvent.serializer())
				subclass(CatalogueUpdatedEvent::class, CatalogueUpdatedEvent.serializer())
				subclass(CatalogueAddedTranslationsEvent::class, CatalogueAddedTranslationsEvent.serializer())
				subclass(CatalogueLinkedCataloguesEvent::class, CatalogueLinkedCataloguesEvent.serializer())
				subclass(CatalogueUnlinkedCataloguesEvent::class, CatalogueUnlinkedCataloguesEvent.serializer())
				subclass(CatalogueLinkedThemesEvent::class, CatalogueLinkedThemesEvent.serializer())
				subclass(CatalogueLinkedDatasetsEvent::class, CatalogueLinkedDatasetsEvent.serializer())
				subclass(CatalogueSetImageEvent::class, CatalogueSetImageEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<CatalogueEvent> = CatalogueEvent::class

}

@Service
class CatalogueAutomateExecutor: S2AutomateDeciderSpring<CatalogueEntity, CatalogueState, CatalogueEvent, CatalogueId>()
