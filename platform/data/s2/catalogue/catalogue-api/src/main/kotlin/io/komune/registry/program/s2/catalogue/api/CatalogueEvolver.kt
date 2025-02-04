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
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class CatalogueEvolver: View<CatalogueEvent, CatalogueEntity> {

	override suspend fun evolve(event: CatalogueEvent, model: CatalogueEntity?): CatalogueEntity? = when (event) {
		is CatalogueCreatedEvent -> create(event)
		is CatalogueUpdatedEvent -> model?.update(event)
		is CatalogueAddedTranslationsEvent -> model?.addTranslations(event)
		is CatalogueLinkedCataloguesEvent -> model?.addCatalogues(event)
		is CatalogueUnlinkedCataloguesEvent -> model?.removeCatalogues(event)
		is CatalogueLinkedDatasetsEvent -> model?.linkDataset(event)
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
		catalogues = event.catalogues
		datasets = event.datasets
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

	private suspend fun CatalogueEntity.addTranslations(event: CatalogueAddedTranslationsEvent) = apply {
		translations = translations + event.catalogues
	}

	private suspend fun CatalogueEntity.addThemes(event: CatalogueLinkedThemesEvent) = apply {
		themes = themes + event.themes
	}

	private suspend fun CatalogueEntity.linkDataset(event: CatalogueLinkedDatasetsEvent) = apply {
		datasets = datasets + event.datasets
	}

	private suspend fun CatalogueEntity.addCatalogues(event: CatalogueLinkedCataloguesEvent) = apply {
		catalogues = catalogues + event.catalogues
	}

	private suspend fun CatalogueEntity.removeCatalogues(event: CatalogueUnlinkedCataloguesEvent) = apply {
		catalogues = catalogues - event.catalogues.toSet()
	}

	private fun CatalogueEntity.applyEvent(event: CatalogueDataEvent) = apply {
		title = event.title
		language = event.language
		description = event.description
		themes = event.themes
		homepage = event.homepage
		structure = event.structure
		creator = event.creator
		publisher = event.publisher
		validator = event.validator
		accessRights = event.accessRights
		license = event.license
		hidden = event.hidden
		modified = event.date
	}
}
