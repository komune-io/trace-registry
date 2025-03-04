package io.komune.registry.s2.concept.api.entity

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.concept.api.ConceptEvolver
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptState
import io.komune.registry.s2.concept.domain.command.ConceptCreatedEvent
import io.komune.registry.s2.concept.domain.command.ConceptEvent
import io.komune.registry.s2.concept.domain.command.ConceptUpdatedEvent
import io.komune.registry.s2.concept.domain.s2Concept
import kotlin.reflect.KClass
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring

@Configuration
class ConceptAutomateConfig(
    aggregate: ConceptAutomateExecutor,
    evolver: ConceptEvolver,
    projectSnapRepository: ConceptSnapRepository,
): RegistryS2SourcingSpringDataAdapter<ConceptEntity, ConceptState, ConceptEvent, ConceptId, ConceptAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository,
	ConceptEntity::class
) {


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
