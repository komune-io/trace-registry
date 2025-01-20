package io.komune.registry.program.s2.catalogue.api

import io.komune.registry.program.s2.catalogue.api.config.CatalogueAutomateExecutor
import io.komune.registry.s2.catalogue.domain.CatalogueAggregate
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import org.springframework.stereotype.Service

@Service
class CatalogueAggregateService(
	private val automate: CatalogueAutomateExecutor,
): CatalogueAggregate {

	override suspend fun create(cmd: CatalogueCreateCommand): CatalogueCreatedEvent = automate.init(cmd) {
		CatalogueCreatedEvent(
			id = "${cmd.identifier}:${cmd.language}",
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			title = cmd.title,
			type = cmd.type,
			language = cmd.language,
			description = cmd.description,
			themes = cmd.themes,
			homepage = cmd.homepage,
			structure = cmd.structure,
			catalogues = cmd.catalogues,
			datasets = cmd.datasets,
			creator = cmd.creator,
			publisher = cmd.publisher,
			validator = cmd.validator,
			accessRights = cmd.accessRights,
			license = cmd.license,
		)
	}

	override suspend fun setImageCommand(cmd: CatalogueSetImageCommand) = automate.transition(cmd) {
		CatalogueSetImageEvent(
			id = cmd.id,
			date = System.currentTimeMillis(),
			img = cmd.img,
		)
	}

	override suspend fun linkCatalogues(
		cmd: CatalogueLinkCataloguesCommand
	): CatalogueLinkedCataloguesEvent = automate.transition(cmd) {
		CatalogueLinkedCataloguesEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			catalogues = cmd.catalogues
		)
	}
	override suspend fun linkDatasets(
		cmd: CatalogueLinkDatasetsCommand
	): CatalogueLinkedDatasetsEvent = automate.transition(cmd) {
		CatalogueLinkedDatasetsEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			datasets = cmd.datasets
		)
	}

	override suspend fun linkThemes(
		cmd: CatalogueLinkThemesCommand
	): CatalogueLinkedThemesEvent = automate.transition(cmd) {
		CatalogueLinkedThemesEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			themes = cmd.themes
		)
	}

	override suspend fun update(cmd: CatalogueUpdateCommand): CatalogueUpdatedEvent = automate.transition(cmd) {
		CatalogueUpdatedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			title = cmd.title,
			type = cmd.type,
			language = cmd.language,
			description = cmd.description,
			themes = cmd.themes,
			homepage = cmd.homepage,
			structure = cmd.structure,
			catalogues = cmd.catalogues,
			datasets = cmd.datasets,
			creator = cmd.creator,
			publisher = cmd.publisher,
			validator = cmd.validator,
			accessRights = cmd.accessRights,
			license = cmd.license,
		)
	}

	override suspend fun delete(cmd: CatalogueDeleteCommand): CatalogueDeletedEvent = automate.transition(cmd) {
		CatalogueDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}
}
