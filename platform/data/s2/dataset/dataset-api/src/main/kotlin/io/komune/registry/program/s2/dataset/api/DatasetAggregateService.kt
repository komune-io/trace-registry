package io.komune.registry.program.s2.dataset.api

import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.dataset.api.config.DatasetAutomateExecutor
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemovedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageCommand
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class DatasetAggregateService(
	private val automate: DatasetAutomateExecutor,
	private val sequenceRepository: SequenceRepository,
) {

	companion object {
		const val DATASET_ID_SEQUENCE = "dataset_id_sequence"
	}

	suspend fun create(command: DatasetCreateCommand): DatasetCreatedEvent = automate.init(command) {
		DatasetCreatedEvent(
			id = "${sequenceRepository.nextValOf(DATASET_ID_SEQUENCE)}-${command.identifier}",
			date = System.currentTimeMillis(),
			identifier = command.identifier,
			title = command.title,
			type = command.type,
			description = command.description,
			language = command.language,
			wasGeneratedBy = command.wasGeneratedBy,
			source = command.source,
			creator = command.creator,
			publisher = command.publisher,
			validator = command.validator,
			accessRights = command.accessRights,
			license = command.license,
			temporalResolution = command.temporalResolution,
			conformsTo = command.conformsTo,
			format = command.format,
			theme = command.theme,
			keywords = command.keywords,
			homepage = command.homepage,
			landingPage = command.landingPage,
			version = command.version,
			versionNotes = command.versionNotes,
			length = command.length,
			releaseDate = command.releaseDate,
		)
	}

	suspend fun setImageCommand(command: DatasetSetImageCommand) = automate.transition(command) {
		DatasetSetImageEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			img = command.img,
		)
	}

	suspend fun linkDatasets(
		command: DatasetLinkDatasetsCommand
	): DatasetLinkedDatasetsEvent = automate.transition(command) {
		DatasetLinkedDatasetsEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			datasets = command.datasets
		)
	}

	suspend fun linkThemes(command: DatasetLinkThemesCommand): DatasetLinkedThemesEvent = automate.transition(command) {
		DatasetLinkedThemesEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			themes = command.themes
		)
	}

	suspend fun update(command: DatasetUpdateCommand): DatasetUpdatedEvent = automate.transition(command) {
		DatasetUpdatedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			title = command.title,
			type = command.type,
			description = command.description,
			language = command.language,
			wasGeneratedBy = command.wasGeneratedBy,
			source = command.source,
			creator = command.creator,
			publisher = command.publisher,
			validator = command.validator,
			accessRights = command.accessRights,
			license = command.license,
			temporalResolution = command.temporalResolution,
			conformsTo = command.conformsTo,
			format = command.format,
			theme = command.theme,
			keywords = command.keywords,
			homepage = command.homepage,
			landingPage = command.landingPage,
			version = command.version,
			versionNotes = command.versionNotes,
			length = command.length,
			releaseDate = command.releaseDate,
		)
	}

	suspend fun delete(command: DatasetDeleteCommand): DatasetDeletedEvent = automate.transition(command) {
		DatasetDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}

	suspend fun addDistribution(command: DatasetAddDistributionCommand) = automate.transition(command) {
		DatasetAddedDistributionEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			name = command.name,
			distributionId = command.distributionId ?: UUID.randomUUID().toString(),
			downloadPath = command.downloadPath,
			mediaType = command.mediaType
		)
	}

	suspend fun updateDistribution(command: DatasetUpdateDistributionCommand) = automate.transition(command) {
		DatasetUpdatedDistributionEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			distributionId = command.distributionId,
			name = command.name,
			downloadPath = command.downloadPath,
			mediaType = command.mediaType
		)
	}

	suspend fun removeDistribution(command: DatasetRemoveDistributionCommand) = automate.transition(command) {
		DatasetRemovedDistributionEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			distributionId = command.distributionId
		)
	}
}
