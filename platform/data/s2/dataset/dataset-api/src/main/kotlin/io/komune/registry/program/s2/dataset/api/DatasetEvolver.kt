package io.komune.registry.program.s2.dataset.api

import io.komune.registry.program.s2.dataset.api.entity.DatasetEntity
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class DatasetEvolver: View<DatasetEvent, DatasetEntity> {

	override suspend fun evolve(event: DatasetEvent, model: DatasetEntity?): DatasetEntity? = when (event) {
		is DatasetCreatedEvent -> create(event)
		is DatasetUpdatedEvent -> model?.update(event)
		is DatasetLinkedDatasetsEvent -> model?.addDatasets(event)
		is DatasetLinkedThemesEvent -> model?.addThemes(event)
		is DatasetDeletedEvent -> model?.delete(event)
		is DatasetSetImageEvent -> model?.setImageEvent(event)
	}

	private suspend fun create(event: DatasetCreatedEvent) = DatasetEntity().apply {
		id = event.id
		identifier = event.identifier
		description = event.description
		title = event.title
		type = event.type
		accessRights = event.accessRights
		conformsTo = event.conformsTo
		creator = event.creator
		releaseDate = event.releaseDate
		updateDate = event.updateDate
		language = event.language
		publisher = event.publisher
		theme = event.theme
		keywords = event.keywords
		landingPage = event.landingPage
		version = event.version
		versionNotes = event.versionNotes
		length = event.length
		temporalResolution = event.temporalResolution
		wasGeneratedBy = event.wasGeneratedBy
		lastUpdate = event.date
		status = DatasetState.ACTIVE
	}
	private suspend fun DatasetEntity.setImageEvent(event: DatasetSetImageEvent) = apply {
		img = event.img
		lastUpdate = event.date
	}
	private suspend fun DatasetEntity.delete(event: DatasetDeletedEvent) = apply {
		status = DatasetState.DELETED
		lastUpdate = event.date
	}
	private suspend fun DatasetEntity.update(event: DatasetUpdatedEvent) = apply {
		id = event.id
		identifier = event.identifier
		description = event.description
		title = event.title
		type = event.type
		accessRights = event.accessRights
		conformsTo = event.conformsTo
		creator = event.creator
		releaseDate = event.releaseDate
		updateDate = event.updateDate
		language = event.language
		publisher = event.publisher
		theme = event.theme
		keywords = event.keywords
		landingPage = event.landingPage
		version = event.version
		versionNotes = event.versionNotes
		length = event.length
		temporalResolution = event.temporalResolution
		wasGeneratedBy = event.wasGeneratedBy
		lastUpdate = event.date
		status = DatasetState.ACTIVE
	}

	private suspend fun DatasetEntity.addThemes(event: DatasetLinkedThemesEvent) = apply {
		themes = themes + event.themes
	}

	private suspend fun DatasetEntity.addDatasets(event: DatasetLinkedDatasetsEvent) = apply {
	}

}
