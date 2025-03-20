package io.komune.registry.s2.concept.api.entity

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.concept.api.ConceptEvolver
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptState
import io.komune.registry.s2.concept.domain.command.ConceptEvent
import io.komune.registry.s2.concept.domain.s2Concept
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import kotlin.reflect.KClass

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
	override fun entityType(): KClass<ConceptEvent> = ConceptEvent::class
}

@Service
class ConceptAutomateExecutor: S2AutomateDeciderSpring<ConceptEntity, ConceptState, ConceptEvent, ConceptId>()
