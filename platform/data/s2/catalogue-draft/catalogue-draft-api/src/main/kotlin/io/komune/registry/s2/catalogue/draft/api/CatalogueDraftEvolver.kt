package io.komune.registry.s2.catalogue.draft.api

import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftEntity
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreatedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftDeletedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestedUpdateEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmittedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdatedLinksEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdatedTitleEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class CatalogueDraftEvolver: View<CatalogueDraftEvent, CatalogueDraftEntity> {

	override suspend fun evolve(event: CatalogueDraftEvent, model: CatalogueDraftEntity?): CatalogueDraftEntity? = when (event) {
		is CatalogueDraftCreatedEvent -> create(event)
		is CatalogueDraftUpdatedLinksEvent -> model?.updateLinks(event)
		is CatalogueDraftUpdatedTitleEvent -> model?.updateTitle(event)
		is CatalogueDraftRejectedEvent -> model?.reject(event)
		is CatalogueDraftRequestedUpdateEvent -> model?.requestUpdate(event)
		is CatalogueDraftSubmittedEvent -> model?.submit(event)
		is CatalogueDraftValidatedEvent -> model?.validate(event)
		is CatalogueDraftDeletedEvent -> model?.delete(event)
	}

	private suspend fun create(event: CatalogueDraftCreatedEvent) = CatalogueDraftEntity().apply {
		id = event.id
		catalogueId = event.catalogueId
		status = CatalogueDraftState.DRAFT
		originalCatalogueId = event.original.id
		originalCatalogueIdentifier = event.original.identifier
		originalCatalogueType = event.original.type
		language = event.language
		baseVersion = event.baseVersion
		datasetIdMap += event.datasetIdMap
		creatorId = event.creatorId
		issued = event.date
		modified = event.date
	}

	private suspend fun CatalogueDraftEntity.updateLinks(event: CatalogueDraftUpdatedLinksEvent) = apply {
		addedParentIds += event.addedParentIds
		removedParentIds -= event.addedParentIds

		addedParentIds -= event.removedParentIds
		removedParentIds += event.removedParentIds

		event.addedExternalReferencesToDatasets.forEach { (catalogueId, datasetIds) ->
			addedExternalReferencesToDatasets.getOrPut(catalogueId) { mutableSetOf() } += datasetIds
			removedExternalReferencesToDatasets[catalogueId]?.removeAll(datasetIds)
		}

		event.removedExternalReferencesToDatasets.forEach { (catalogueId, datasetIds) ->
			removedExternalReferencesToDatasets.getOrPut(catalogueId) { mutableSetOf() } += datasetIds
			addedExternalReferencesToDatasets[catalogueId]?.removeAll(datasetIds)
		}

		modified = event.date
	}

	private suspend fun CatalogueDraftEntity.reject(event: CatalogueDraftRejectedEvent) = apply {
		status = CatalogueDraftState.REJECTED
		modified = event.date
		rejectReason = event.reason
	}

	private suspend fun CatalogueDraftEntity.requestUpdate(event: CatalogueDraftRequestedUpdateEvent) = apply {
		status = CatalogueDraftState.UPDATE_REQUESTED
		modified = event.date
	}
	private suspend fun CatalogueDraftEntity.updateTitle(event: CatalogueDraftUpdatedTitleEvent) = apply {
		modified = event.date
		title = event.title
	}

	private suspend fun CatalogueDraftEntity.submit(event: CatalogueDraftSubmittedEvent) = apply {
		status = CatalogueDraftState.SUBMITTED
		modified = event.date
		versionNotes = event.versionNotes
	}

	private suspend fun CatalogueDraftEntity.validate(event: CatalogueDraftValidatedEvent) = apply {
		status = CatalogueDraftState.VALIDATED
		modified = event.date
	}

	private suspend fun CatalogueDraftEntity.delete(event: CatalogueDraftDeletedEvent) = apply {
		deleted = true
		modified = event.date
	}
}
