package io.komune.registry.program.s2.catalogue.api

import io.komune.registry.program.s2.catalogue.api.config.CatalogueAutomateExecutor
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.s2.catalogue.domain.CatalogueAggregate
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedTranslationsEvent
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
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import org.springframework.stereotype.Service

@Service
class CatalogueAggregateService(
	private val automate: CatalogueAutomateExecutor,
	private val catalogueRepository: CatalogueRepository
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
			themeIds = cmd.themeIds,
			homepage = cmd.homepage,
			structure = cmd.structure,
			catalogueIds = cmd.catalogueIds,
			datasetIds = cmd.datasetIds,
			creator = cmd.creator,
			publisher = cmd.publisher,
			validator = cmd.validator,
			accessRights = cmd.accessRights,
			licenseId = cmd.licenseId,
			hidden = cmd.hidden,
		)
	}

	override suspend fun setImageCommand(cmd: CatalogueSetImageCommand) = automate.transition(cmd) {
		CatalogueSetImageEvent(
			id = cmd.id,
			date = System.currentTimeMillis(),
			img = cmd.img,
		)
	}

	override suspend fun addTranslations(cmd: CatalogueAddTranslationsCommand) = automate.transition(cmd) {
		val translations = catalogueRepository.findAllById(cmd.catalogues)
			.associate {
				if (it.language == null) throw IllegalArgumentException("Catalogue ${it.id} has no language")
				it.language!! to it.id
			}

		CatalogueAddedTranslationsEvent(
			id = cmd.id,
			date = System.currentTimeMillis(),
			catalogues = translations
		)
	}

	override suspend fun linkCatalogues(cmd: CatalogueLinkCataloguesCommand): CatalogueLinkedCataloguesEvent = automate.transition(cmd) {
		CatalogueLinkedCataloguesEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			catalogues = cmd.catalogues
		)
	}

	override suspend fun unlinkCatalogues(
		cmd: CatalogueUnlinkCataloguesCommand
	): CatalogueUnlinkedCataloguesEvent = automate.transition(cmd) {
		CatalogueUnlinkedCataloguesEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			catalogues = cmd.catalogues
		)
	}

	override suspend fun linkDatasets(cmd: CatalogueLinkDatasetsCommand): CatalogueLinkedDatasetsEvent = automate.transition(cmd) {
		CatalogueLinkedDatasetsEvent(
			id = cmd.id,
			date = System.currentTimeMillis(),
			datasets = cmd.datasets
		)
	}

	override suspend fun linkThemes(cmd: CatalogueLinkThemesCommand): CatalogueLinkedThemesEvent = automate.transition(cmd) {
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
			language = cmd.language,
			description = cmd.description,
			themeIds = cmd.themeIds,
			homepage = cmd.homepage,
			structure = cmd.structure,
			creator = cmd.creator,
			publisher = cmd.publisher,
			validator = cmd.validator,
			accessRights = cmd.accessRights,
			licenseId = cmd.licenseId,
			hidden = cmd.hidden,
		)
	}

	override suspend fun delete(cmd: CatalogueDeleteCommand): CatalogueDeletedEvent = automate.transition(cmd) {
		CatalogueDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}
}
