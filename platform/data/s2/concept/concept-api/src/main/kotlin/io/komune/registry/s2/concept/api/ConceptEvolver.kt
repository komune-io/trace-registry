package io.komune.registry.s2.concept.api

import io.komune.registry.s2.concept.api.entity.ConceptEntity
import io.komune.registry.s2.concept.domain.ConceptState
import io.komune.registry.s2.concept.domain.command.ConceptCreatedEvent
import io.komune.registry.s2.concept.domain.command.ConceptDataEvent
import io.komune.registry.s2.concept.domain.command.ConceptEvent
import io.komune.registry.s2.concept.domain.command.ConceptUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class ConceptEvolver: View<ConceptEvent, ConceptEntity> {

	override suspend fun evolve(event: ConceptEvent, model: ConceptEntity?): ConceptEntity? = when (event) {
		is ConceptCreatedEvent -> create(event)
		is ConceptUpdatedEvent -> model?.update(event)
	}

	private suspend fun create(event: ConceptCreatedEvent) = ConceptEntity().apply {
		applyEvent(event)
		id = event.id
		status = ConceptState.ACTIVE
		identifier = event.identifier
		issued = event.date
	}

	private suspend fun ConceptEntity.update(event: ConceptUpdatedEvent) = apply {
		applyEvent(event)
	}

	private fun ConceptEntity.applyEvent(event: ConceptDataEvent) = apply {
		prefLabels = event.prefLabels
		definitions = event.definitions
		schemes = event.schemes
		modified = event.date
	}
}
