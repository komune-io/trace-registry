package io.komune.registry.s2.catalogue.draft.api

import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftEntity
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreatedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestedUpdateEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmittedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class CatalogueDraftEvolver: View<CatalogueDraftEvent, CatalogueDraftEntity> {

	override suspend fun evolve(event: CatalogueDraftEvent, model: CatalogueDraftEntity?): CatalogueDraftEntity? = when (event) {
		is CatalogueDraftCreatedEvent -> create(event)
		is CatalogueDraftRejectedEvent -> model?.reject(event)
		is CatalogueDraftRequestedUpdateEvent -> model?.requestUpdate(event)
		is CatalogueDraftSubmittedEvent -> model?.submit(event)
		is CatalogueDraftValidatedEvent -> model?.validate(event)
	}

	private suspend fun create(event: CatalogueDraftCreatedEvent) = CatalogueDraftEntity().apply {
		id = event.id
		status = CatalogueDraftState.DRAFT
		catalogueId = event.catalogueId
		originalCatalogueId = event.originalCatalogueId
		language = event.language
		baseVersion = event.baseVersion
		creatorId = event.creatorId
		issued = event.date
		modified = event.date
	}

	private suspend fun CatalogueDraftEntity.reject(event: CatalogueDraftRejectedEvent) = apply {
		status = CatalogueDraftState.REJECTED
		modified = event.date
	}

	private suspend fun CatalogueDraftEntity.requestUpdate(event: CatalogueDraftRequestedUpdateEvent) = apply {
		status = CatalogueDraftState.UPDATE_REQUESTED
		modified = event.date
	}

	private suspend fun CatalogueDraftEntity.submit(event: CatalogueDraftSubmittedEvent) = apply {
		status = CatalogueDraftState.SUBMITTED
		modified = event.date
	}

	private suspend fun CatalogueDraftEntity.validate(event: CatalogueDraftValidatedEvent) = apply {
		status = CatalogueDraftState.VALIDATED
		modified = event.date
	}
}
