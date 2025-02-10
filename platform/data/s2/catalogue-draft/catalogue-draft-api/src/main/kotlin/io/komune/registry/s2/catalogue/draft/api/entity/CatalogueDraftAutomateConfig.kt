package io.komune.registry.s2.catalogue.draft.api.entity

import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftEvolver
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreatedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestedUpdateEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmittedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidatedEvent
import io.komune.registry.s2.catalogue.draft.domain.s2CatalogueDraft
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
class CatalogueDraftAutomateConfig(
    aggregate: CatalogueDraftAutomateExecutor,
    evolver: CatalogueDraftEvolver,
    projectSnapRepository: CatalogueDraftSnapRepository,
    private val repository: CatalogueDraftRepository
): S2SourcingSpringDataAdapter<
		CatalogueDraftEntity, CatalogueDraftState, CatalogueDraftEvent, CatalogueDraftId, CatalogueDraftAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {

	private val logger = LoggerFactory.getLogger(CatalogueDraftAutomateConfig::class.java)
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay CatalogueDraft history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun automate() = s2CatalogueDraft

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(CatalogueDraftEvent::class) {
				subclass(CatalogueDraftCreatedEvent::class, CatalogueDraftCreatedEvent.serializer())
				subclass(CatalogueDraftRejectedEvent::class, CatalogueDraftRejectedEvent.serializer())
				subclass(CatalogueDraftRequestedUpdateEvent::class, CatalogueDraftRequestedUpdateEvent.serializer())
				subclass(CatalogueDraftSubmittedEvent::class, CatalogueDraftSubmittedEvent.serializer())
				subclass(CatalogueDraftValidatedEvent::class, CatalogueDraftValidatedEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<CatalogueDraftEvent> = CatalogueDraftEvent::class

}

@Service
class CatalogueDraftAutomateExecutor
	: S2AutomateDeciderSpring<CatalogueDraftEntity, CatalogueDraftState, CatalogueDraftEvent, CatalogueDraftId>()
