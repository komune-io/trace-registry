package io.komune.registry.s2.cccev.api.entity.unit

import io.komune.registry.s2.cccev.domain.DataUnitState
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreatedEvent
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class DataUnitEvolver: View<DataUnitEvent, DataUnitEntity> {

	override suspend fun evolve(event: DataUnitEvent, model: DataUnitEntity?) = when (event) {
		is DataUnitCreatedEvent -> create(event)
	}

	private suspend fun create(event: DataUnitCreatedEvent) = DataUnitEntity().apply {
		id = event.id
		status = DataUnitState.CREATED
		identifier = event.identifier
		name = event.name.toMutableMap()
		abbreviation = event.abbreviation.toMutableMap()
		type = event.type
		issued = event.date
		modified = event.date
	}
}
