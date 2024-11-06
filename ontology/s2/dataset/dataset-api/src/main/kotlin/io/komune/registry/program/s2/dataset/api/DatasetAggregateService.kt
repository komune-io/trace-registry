package io.komune.registry.program.s2.dataset.api

import io.komune.registry.program.s2.dataset.api.config.DatasetAutomateExecutor
import io.komune.registry.s2.dataset.domain.DatasetAggregate
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageCommand
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class DatasetAggregateService(
    private val automate: DatasetAutomateExecutor,
): DatasetAggregate {

	override suspend fun create(cmd: DatasetCreateCommand): DatasetCreatedEvent = automate.init(cmd) {
		DatasetCreatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			description = cmd.description,
			title = cmd.title,
			type = cmd.type,
			accessRights = cmd.accessRights,
			conformsTo = cmd.conformsTo,
			creator = cmd.creator,
			releaseDate = cmd.releaseDate,
			updateDate = cmd.updateDate,
			language = cmd.language,
			publisher = cmd.publisher,
			theme = cmd.theme,
			keywords = cmd.keywords,
			landingPage = cmd.landingPage,
			version = cmd.version,
			versionNotes = cmd.versionNotes,
			length = cmd.length,
			temporalResolution = cmd.temporalResolution,
			wasGeneratedBy = cmd.wasGeneratedBy,
		)
	}

	override suspend fun setImageCommand(cmd: DatasetSetImageCommand) = automate.transition(cmd) {
		DatasetSetImageEvent(
			id = cmd.id,
			date = System.currentTimeMillis(),
			img = cmd.img,
		)
	}

	override suspend fun linkDatasets(
		cmd: DatasetLinkDatasetsCommand
	): DatasetLinkedDatasetsEvent = automate.transition(cmd) {
		DatasetLinkedDatasetsEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			datasets = cmd.datasets
		)
	}

	override suspend fun linkThemes(cmd: DatasetLinkThemesCommand): DatasetLinkedThemesEvent = automate.transition(cmd) {
		DatasetLinkedThemesEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			themes = cmd.themes
		)
	}

	override suspend fun update(cmd: DatasetUpdateCommand): DatasetUpdatedEvent = automate.transition(cmd) {
		DatasetUpdatedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			description = cmd.description,
			title = cmd.title,
			type = cmd.type,
			accessRights = cmd.accessRights,
			conformsTo = cmd.conformsTo,
			creator = cmd.creator,
			releaseDate = cmd.releaseDate,
			updateDate = cmd.updateDate,
			language = cmd.language,
			publisher = cmd.publisher,
			theme = cmd.theme,
			keywords = cmd.keywords,
			landingPage = cmd.landingPage,
			version = cmd.version,
			versionNotes = cmd.versionNotes,
			length = cmd.length,
			temporalResolution = cmd.temporalResolution,
			wasGeneratedBy = cmd.wasGeneratedBy,
			img = cmd.img,
		)
	}

	override suspend fun delete(cmd: DatasetDeleteCommand): DatasetDeletedEvent = automate.transition(cmd) {
		DatasetDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}
}
