package io.komune.registry.s2.cccev.api.entity.value

import io.komune.registry.s2.cccev.domain.SupportedValueState
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueDeprecatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueValidatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class SupportedValueEvolver: View<SupportedValueEvent, SupportedValueEntity> {

	override suspend fun evolve(event: SupportedValueEvent, model: SupportedValueEntity?) = when (event) {
		is SupportedValueCreatedEvent -> create(event)
		is SupportedValueValidatedEvent -> model?.validate(event)
		is SupportedValueDeprecatedEvent -> model?.deprecate(event)
	}

	private suspend fun create(event: SupportedValueCreatedEvent) = SupportedValueEntity().apply {
		id = event.id
		status = SupportedValueState.COMPUTED
		conceptId = event.conceptId
		unit = event.unit
		isRange = event.isRange
		value = event.value
		query = event.query
		description = event.description
		issued = event.date
		modified = event.date
	}

	private suspend fun SupportedValueEntity.validate(event: SupportedValueValidatedEvent) = apply {
		status = SupportedValueState.VALIDATED
		modified = event.date
	}

	private suspend fun SupportedValueEntity.deprecate(event: SupportedValueDeprecatedEvent) = apply {
		status = SupportedValueState.DEPRECATED
		modified = event.date
	}
}
