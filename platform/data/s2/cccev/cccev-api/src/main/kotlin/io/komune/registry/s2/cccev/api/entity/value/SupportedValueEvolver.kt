package io.komune.registry.s2.cccev.api.entity.value

import io.komune.registry.s2.cccev.domain.SupportedValueState
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class SupportedValueEvolver: View<SupportedValueEvent, SupportedValueEntity> {

	override suspend fun evolve(event: SupportedValueEvent, model: SupportedValueEntity?) = when (event) {
		is SupportedValueCreatedEvent -> create(event)
	}

	private suspend fun create(event: SupportedValueCreatedEvent) = SupportedValueEntity().apply {
		id = event.id
		status = SupportedValueState.COMPUTED
		conceptId = event.conceptId
		value = event.value
		query = event.query
		issued = event.date
		modified = event.date
	}
}
