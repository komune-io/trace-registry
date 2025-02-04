package io.komune.registry.s2.concept.api.entity

import io.komune.registry.s2.concept.api.ConceptEvolver
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptState
import io.komune.registry.s2.concept.domain.command.ConceptCreatedEvent
import io.komune.registry.s2.concept.domain.command.ConceptEvent
import io.komune.registry.s2.concept.domain.command.ConceptUpdatedEvent
import io.komune.registry.s2.concept.domain.s2Concept
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
class ConceptAutomateConfig(
    aggregate: ConceptAutomateExecutor,
    evolver: ConceptEvolver,
    projectSnapRepository: ConceptSnapRepository,
    private val repository: ConceptRepository
): S2SourcingSpringDataAdapter<ConceptEntity, ConceptState, ConceptEvent, ConceptId, ConceptAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {

	private val logger = LoggerFactory.getLogger(ConceptAutomateConfig::class.java)
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Concept history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun automate() = s2Concept

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(ConceptEvent::class) {
				subclass(ConceptCreatedEvent::class, ConceptCreatedEvent.serializer())
				subclass(ConceptUpdatedEvent::class, ConceptUpdatedEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<ConceptEvent> = ConceptEvent::class

}

@Service
class ConceptAutomateExecutor: S2AutomateDeciderSpring<ConceptEntity, ConceptState, ConceptEvent, ConceptId>()
