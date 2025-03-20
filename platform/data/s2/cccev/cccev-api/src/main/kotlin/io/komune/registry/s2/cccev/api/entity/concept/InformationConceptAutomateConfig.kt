package io.komune.registry.s2.cccev.api.entity.concept

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.cccev.domain.InformationConceptState
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptEvent
import io.komune.registry.s2.cccev.domain.s2InformationConcept
import io.komune.registry.s2.commons.model.InformationConceptId
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import kotlin.reflect.KClass

@Configuration
class InformationConceptAutomateConfig(
	aggregate: InformationConceptAutomateExecutor,
	evolver: InformationConceptEvolver,
	projectSnapRepository: InformationConceptSnapRepository,
): RegistryS2SourcingSpringDataAdapter<
		InformationConceptEntity, InformationConceptState, InformationConceptEvent, InformationConceptId, InformationConceptAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository,
	InformationConceptEntity::class
) {
	override fun automate() = s2InformationConcept
	override fun entityType(): KClass<InformationConceptEvent> = InformationConceptEvent::class
}

@Service
class InformationConceptAutomateExecutor
	: S2AutomateDeciderSpring<InformationConceptEntity, InformationConceptState, InformationConceptEvent, InformationConceptId>()
