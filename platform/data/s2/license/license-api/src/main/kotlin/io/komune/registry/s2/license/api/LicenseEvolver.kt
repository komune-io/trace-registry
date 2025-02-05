package io.komune.registry.s2.license.api

import io.komune.registry.s2.license.api.entity.LicenseEntity
import io.komune.registry.s2.license.domain.LicenseState
import io.komune.registry.s2.license.domain.command.LicenseCreatedEvent
import io.komune.registry.s2.license.domain.command.LicenseDataEvent
import io.komune.registry.s2.license.domain.command.LicenseEvent
import io.komune.registry.s2.license.domain.command.LicenseUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class LicenseEvolver: View<LicenseEvent, LicenseEntity> {

	override suspend fun evolve(event: LicenseEvent, model: LicenseEntity?): LicenseEntity? = when (event) {
		is LicenseCreatedEvent -> create(event)
		is LicenseUpdatedEvent -> model?.update(event)
	}

	private suspend fun create(event: LicenseCreatedEvent) = LicenseEntity().apply {
		applyEvent(event)
		id = event.id
		status = LicenseState.ACTIVE
		identifier = event.identifier
		issued = event.date
	}

	private suspend fun LicenseEntity.update(event: LicenseUpdatedEvent) = apply {
		applyEvent(event)
	}

	private fun LicenseEntity.applyEvent(event: LicenseDataEvent) = apply {
		name = event.name
		url = event.url
		modified = event.date
	}
}
