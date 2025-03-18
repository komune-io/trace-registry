package io.komune.registry.s2.cccev.api.entity.concept

import io.komune.registry.s2.cccev.domain.InformationConceptState
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputedValueEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreatedEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class InformationConceptEvolver: View<InformationConceptEvent, InformationConceptEntity> {

	override suspend fun evolve(event: InformationConceptEvent, model: InformationConceptEntity?) = when (event) {
		is InformationConceptCreatedEvent -> create(event)
		is InformationConceptComputedValueEvent -> model
	}

	private suspend fun create(event: InformationConceptCreatedEvent) = InformationConceptEntity().apply {
		id = event.id
		status = InformationConceptState.ACTIVE
		identifier = event.identifier
		name = event.name
		unitId = event.unitId
		issued = event.date
		modified = event.date
	}
}
