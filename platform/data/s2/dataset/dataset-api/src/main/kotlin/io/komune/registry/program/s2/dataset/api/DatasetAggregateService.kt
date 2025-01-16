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
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class DatasetAggregateService(
    private val automate: DatasetAutomateExecutor,
): DatasetAggregate {

	override suspend fun create(cmd: DatasetCreateCommand): DatasetCreatedEvent = automate.init(cmd) {
		DatasetCreatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			title = cmd.title,
			type = cmd.type,
			description = cmd.description,
			language = cmd.language,
			wasGeneratedBy = cmd.wasGeneratedBy,
			source = cmd.source,
			creator = cmd.creator,
			publisher = cmd.publisher,
			validator = cmd.validator,
			accessRights = cmd.accessRights,
			license = cmd.license,
			temporalResolution = cmd.temporalResolution,
			conformsTo = cmd.conformsTo,
			format = cmd.format,
			theme = cmd.theme,
			keywords = cmd.keywords,
			homepage = cmd.homepage,
			landingPage = cmd.landingPage,
			version = cmd.version,
			versionNotes = cmd.versionNotes,
			length = cmd.length,
			releaseDate = cmd.releaseDate,
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
			title = cmd.title,
			type = cmd.type,
			description = cmd.description,
			language = cmd.language,
			wasGeneratedBy = cmd.wasGeneratedBy,
			source = cmd.source,
			creator = cmd.creator,
			publisher = cmd.publisher,
			validator = cmd.validator,
			accessRights = cmd.accessRights,
			license = cmd.license,
			temporalResolution = cmd.temporalResolution,
			conformsTo = cmd.conformsTo,
			format = cmd.format,
			theme = cmd.theme,
			keywords = cmd.keywords,
			homepage = cmd.homepage,
			landingPage = cmd.landingPage,
			version = cmd.version,
			versionNotes = cmd.versionNotes,
			length = cmd.length,
			releaseDate = cmd.releaseDate,
		)
	}

	override suspend fun delete(cmd: DatasetDeleteCommand): DatasetDeletedEvent = automate.transition(cmd) {
		DatasetDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}
}
