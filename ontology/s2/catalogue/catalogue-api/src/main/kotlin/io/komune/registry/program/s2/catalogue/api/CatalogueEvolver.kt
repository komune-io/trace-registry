package io.komune.registry.program.s2.catalogue.api

import io.komune.registry.program.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class CatalogueEvolver: View<CatalogueEvent, CatalogueEntity> {

	override suspend fun evolve(event: CatalogueEvent, model: CatalogueEntity?): CatalogueEntity? = when (event) {
		is CatalogueCreatedEvent -> create(event)
		is CatalogueUpdatedEvent -> model?.update(event)
		is CatalogueLinkedCataloguesEvent -> model?.addCatalogues(event)
		is CatalogueLinkedDatasetsEvent -> model?.linkDataset(event)
		is CatalogueLinkedThemesEvent -> model?.addThemes(event)
		is CatalogueDeletedEvent -> model?.delete(event)
		is CatalogueSetImageEvent -> model?.setImageEvent(event)
	}

	private suspend fun create(event: CatalogueCreatedEvent) = CatalogueEntity().apply {
		id = event.id
		title = event.title
		identifier = event.identifier
		type = event.type
		structure = event.structure
		description = event.description
		homepage = event.homepage
		themes = event.themes?.toHashSet() ?: emptySet()
		catalogues = event.catalogues?.toHashSet() ?: emptySet()
		lastUpdate = event.date
		status = CatalogueState.ACTIVE
	}
	private suspend fun CatalogueEntity.setImageEvent(event: CatalogueSetImageEvent) = apply {
		img = event.img
		lastUpdate = event.date
	}
	private suspend fun CatalogueEntity.delete(event: CatalogueDeletedEvent) = apply {
		status = CatalogueState.DELETED
		lastUpdate = event.date
	}
	private suspend fun CatalogueEntity.update(event: CatalogueUpdatedEvent) = apply {
		title = event.title
		identifier = event.identifier
		type = event.type
		structure = event.structure
		description = event.description
		lastUpdate = event.date
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

}
