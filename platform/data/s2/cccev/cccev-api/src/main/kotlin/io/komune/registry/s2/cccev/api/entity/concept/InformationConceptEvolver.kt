package io.komune.registry.s2.cccev.api.entity.concept

import io.komune.registry.s2.cccev.domain.InformationConceptState
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputedValueEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreatedEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class InformationConceptEvolver: View<InformationConceptEvent, InformationConceptEntity> {

	override suspend fun evolve(event: InformationConceptEvent, model: InformationConceptEntity?) = when (event) {
		is InformationConceptCreatedEvent -> create(event)
		is InformationConceptUpdatedEvent -> model?.update(event)
		is InformationConceptComputedValueEvent -> model
	}

	private suspend fun create(event: InformationConceptCreatedEvent) = InformationConceptEntity().apply {
		id = event.id
		status = InformationConceptState.ACTIVE
		identifier = event.identifier
		name = event.name.toMutableMap()
		unit = event.unit
		aggregator = event.aggregator
		themeIds = event.themeIds.toMutableSet()
		issued = event.date
		modified = event.date
	}

	private suspend fun InformationConceptEntity.update(event: InformationConceptUpdatedEvent) = apply {
		name = event.name.toMutableMap()
		unit = event.unit
		aggregator = event.aggregator
		themeIds = event.themeIds.toMutableSet()
		modified = event.date
	}
}
