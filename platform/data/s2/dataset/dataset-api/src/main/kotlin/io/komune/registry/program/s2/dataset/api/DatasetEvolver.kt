package io.komune.registry.program.s2.dataset.api

import io.komune.registry.program.s2.dataset.api.entity.DatasetEntity
import io.komune.registry.program.s2.dataset.api.entity.DistributionEntity
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDataEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedToDraftEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemovedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionAggregatorValueEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class DatasetEvolver: View<DatasetEvent, DatasetEntity> {

	override suspend fun evolve(event: DatasetEvent, model: DatasetEntity?): DatasetEntity? = when (event) {
		is DatasetCreatedEvent -> create(event)
		is DatasetLinkedToDraftEvent -> model?.linkToDraft(event)
		is DatasetUpdatedEvent -> model?.update(event)
		is DatasetLinkedDatasetsEvent -> model?.addDatasets(event)
		is DatasetUnlinkedDatasetsEvent -> model?.removeDatasets(event)
		is DatasetLinkedThemesEvent -> model?.addThemes(event)
		is DatasetDeletedEvent -> model?.delete(event)
		is DatasetSetImageEvent -> model?.setImage(event)
		is DatasetAddedDistributionEvent -> model?.addDistribution(event)
		is DatasetUpdatedDistributionEvent -> model?.updateDistribution(event)
		is DatasetUpdatedDistributionAggregatorValueEvent -> model?.updateDistributionAggregatorValue(event)
		is DatasetRemovedDistributionEvent -> model?.removeDistribution(event)
	}

	private suspend fun create(event: DatasetCreatedEvent) = DatasetEntity().apply {
		applyEvent(event)
		id = event.id
		status = DatasetState.ACTIVE
		identifier = event.identifier
		issued = event.date
	}

	private suspend fun DatasetEntity.linkToDraft(event: DatasetLinkedToDraftEvent) = apply {
		draftId = event.draftId
	}

	private suspend fun DatasetEntity.setImage(event: DatasetSetImageEvent) = apply {
		img = event.img
		modified = event.date
	}

	private suspend fun DatasetEntity.delete(event: DatasetDeletedEvent) = apply {
		status = DatasetState.DELETED
		modified = event.date
	}

	private suspend fun DatasetEntity.update(event: DatasetUpdatedEvent) = apply {
		applyEvent(event)
	}

	private suspend fun DatasetEntity.addThemes(event: DatasetLinkedThemesEvent) = apply {
		themes = themes + event.themes
	}

	private suspend fun DatasetEntity.addDatasets(event: DatasetLinkedDatasetsEvent) = apply {
		datasetIds += event.datasetIds
	}

	private suspend fun DatasetEntity.removeDatasets(event: DatasetUnlinkedDatasetsEvent) = apply {
		datasetIds -= event.datasetIds
	}

	private suspend fun DatasetEntity.addDistribution(event: DatasetAddedDistributionEvent) = apply {
		distributions = distributions.orEmpty() + DistributionEntity(
			id = event.distributionId,
			name = event.name,
			downloadPath = event.downloadPath.toString(),
			mediaType = event.mediaType,
			aggregators = emptyMap(),
			issued = event.date,
			modified = event.date
		)
		modified = event.date
	}

	private suspend fun DatasetEntity.updateDistribution(event: DatasetUpdatedDistributionEvent) = apply {
		distributions = distributions.orEmpty().map { distribution ->
			distribution.takeIf { it.id == event.distributionId }
				?.copy(
					name = event.name,
					downloadPath = event.downloadPath.toString(),
					mediaType = event.mediaType,
					modified = event.date
				) ?: distribution
		}
		modified = event.date
	}

	private suspend fun DatasetEntity.updateDistributionAggregatorValue(event: DatasetUpdatedDistributionAggregatorValueEvent) = apply {
		distributions = distributions.orEmpty().map { distribution ->
			distribution.takeIf { it.id == event.distributionId }
				?.copy(
					aggregators = if (event.supportedValueId != null) {
						distribution.aggregators + (event.informationConceptId to event.supportedValueId!!)
					} else {
						distribution.aggregators - event.informationConceptId
					},
					modified = event.date
				) ?: distribution
		}
		modified = event.date
	}

	private suspend fun DatasetEntity.removeDistribution(event: DatasetRemovedDistributionEvent) = apply {
		distributions = distributions.orEmpty().filter { it.id != event.distributionId }
		modified = event.date
	}

	private fun DatasetEntity.applyEvent(event: DatasetDataEvent) = apply {
		title = event.title
		type = event.type
		description = event.description
		language = event.language
		wasGeneratedBy = event.wasGeneratedBy
		source = event.source
		creator = event.creator
		publisher = event.publisher
		validator = event.validator
		accessRights = event.accessRights
		license = event.license
		temporalResolution = event.temporalResolution
		conformsTo = event.conformsTo
		format = event.format
		keywords = event.keywords
		homepage = event.homepage
		landingPage = event.landingPage
		version = event.version
		versionNotes = event.versionNotes
		length = event.length
		modified = event.date
		releaseDate = event.releaseDate
	}
}
