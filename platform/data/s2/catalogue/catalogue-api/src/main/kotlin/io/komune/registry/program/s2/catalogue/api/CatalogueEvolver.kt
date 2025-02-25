package io.komune.registry.program.s2.catalogue.api

import io.komune.registry.program.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDataEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedAccessRightsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedVersionNotesEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class CatalogueEvolver: View<CatalogueEvent, CatalogueEntity> {

	override suspend fun evolve(event: CatalogueEvent, model: CatalogueEntity?): CatalogueEntity? = when (event) {
		is CatalogueCreatedEvent -> create(event)
		is CatalogueUpdatedEvent -> model?.update(event)
		is CatalogueUpdatedAccessRightsEvent -> model?.updateAccessRights(event)
		is CatalogueUpdatedVersionNotesEvent -> model?.updateVersionNotes(event)
		is CatalogueAddedTranslationsEvent -> model?.addTranslations(event)
		is CatalogueRemovedTranslationsEvent -> model?.removeTranslations(event)
		is CatalogueLinkedCataloguesEvent -> model?.addCatalogues(event)
		is CatalogueUnlinkedCataloguesEvent -> model?.removeCatalogues(event)
		is CatalogueLinkedDatasetsEvent -> model?.addDataset(event)
		is CatalogueUnlinkedDatasetsEvent -> model?.removeDataset(event)
		is CatalogueLinkedThemesEvent -> model?.addThemes(event)
		is CatalogueDeletedEvent -> model?.delete(event)
		is CatalogueSetImageEvent -> model?.setImage(event)
	}

	private suspend fun create(event: CatalogueCreatedEvent) = CatalogueEntity().apply {
		applyEvent(event)
		id = event.id
		status = CatalogueState.ACTIVE
		identifier = event.identifier
		type = event.type
		catalogueIds = event.catalogueIds
		datasetIds = event.datasetIds
		creatorId = event.creatorId
		creatorOrganizationId = event.creatorOrganizationId
		issued = event.date
	}

	private suspend fun CatalogueEntity.setImage(event: CatalogueSetImageEvent) = apply {
		img = event.img
		this.modified = event.date
	}

	private suspend fun CatalogueEntity.delete(event: CatalogueDeletedEvent) = apply {
		status = CatalogueState.DELETED
		this.modified = event.date
	}

	private suspend fun CatalogueEntity.update(event: CatalogueUpdatedEvent) = apply {
		applyEvent(event)
	}

	private suspend fun CatalogueEntity.updateAccessRights(event: CatalogueUpdatedAccessRightsEvent) = apply {
		accessRights = event.accessRights
		modified = event.date
	}

	private suspend fun CatalogueEntity.updateVersionNotes(event: CatalogueUpdatedVersionNotesEvent) = apply {
		versionNotes = event.versionNotes
		modified = event.date
	}

	private suspend fun CatalogueEntity.addTranslations(event: CatalogueAddedTranslationsEvent) = apply {
		translationIds += event.catalogues
	}

	private suspend fun CatalogueEntity.removeTranslations(event: CatalogueRemovedTranslationsEvent) = apply {
		translationIds -= event.languages
	}

	private suspend fun CatalogueEntity.addThemes(event: CatalogueLinkedThemesEvent) = apply {
		themeIds += event.themes
	}

	private suspend fun CatalogueEntity.addDataset(event: CatalogueLinkedDatasetsEvent) = apply {
		datasetIds += event.datasets
	}

	private suspend fun CatalogueEntity.removeDataset(event: CatalogueUnlinkedDatasetsEvent) = apply {
		datasetIds -= event.datasets.toSet()
	}

	private suspend fun CatalogueEntity.addCatalogues(event: CatalogueLinkedCataloguesEvent) = apply {
		catalogueIds += event.catalogues
	}

	private suspend fun CatalogueEntity.removeCatalogues(event: CatalogueUnlinkedCataloguesEvent) = apply {
		catalogueIds -= event.catalogues.toSet()
	}

	private fun CatalogueEntity.applyEvent(event: CatalogueDataEvent) = apply {
		title = event.title
		language = event.language
		description = event.description
		themeIds = event.themeIds
		homepage = event.homepage
		ownerOrganizationId = event.ownerOrganizationId
		structure = event.structure
		accessRights = event.accessRights
		licenseId = event.licenseId
		location = event.location
		versionNotes = event.versionNotes
		hidden = event.hidden
		modified = event.date
		version++
	}
}
