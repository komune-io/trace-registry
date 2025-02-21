package io.komune.registry.program.s2.catalogue.api

import io.komune.im.commons.auth.AuthenticationProvider
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
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateVersionNotesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedVersionNotesEvent
import org.springframework.stereotype.Service

@Service
class CatalogueAggregateService(
	private val automate: CatalogueAutomateExecutor,
	private val catalogueRepository: CatalogueRepository,
): CatalogueAggregate {

	override suspend fun create(cmd: CatalogueCreateCommand): CatalogueCreatedEvent = automate.init(cmd) {
		val authedUser = AuthenticationProvider.getAuthedUser()
		CatalogueCreatedEvent(
			id = cmd.identifier,
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			title = cmd.title,
			type = cmd.type,
			language = cmd.language,
			description = cmd.description,
			themeIds = cmd.themeIds,
			homepage = cmd.homepage,
			ownerOrganizationId = cmd.ownerOrganizationId,
			structure = cmd.structure,
			catalogueIds = cmd.catalogueIds,
			datasetIds = cmd.datasetIds,
			creatorId = authedUser?.id,
			creatorOrganizationId = authedUser?.memberOf,
			accessRights = cmd.accessRights,
			licenseId = cmd.licenseId,
			location = cmd.location,
			hidden = cmd.hidden
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

	override suspend fun removeTranslations(cmd: CatalogueRemoveTranslationsCommand) = automate.transition(cmd) {
		CatalogueRemovedTranslationsEvent(
			id = cmd.id,
			date = System.currentTimeMillis(),
			languages = cmd.languages.toSet()
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
			datasets = cmd.datasetIds
		)
	}

	override suspend fun unlinkDatasets(cmd: CatalogueUnlinkDatasetsCommand): CatalogueUnlinkedDatasetsEvent = automate.transition(cmd) {
		CatalogueUnlinkedDatasetsEvent(
			id = cmd.id,
			date = System.currentTimeMillis(),
			datasets = cmd.datasetIds
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
			ownerOrganizationId = cmd.ownerOrganizationId,
			structure = cmd.structure,
			accessRights = cmd.accessRights,
			licenseId = cmd.licenseId,
			location = cmd.location,
			hidden = cmd.hidden,
			versionNotes = cmd.versionNotes
		)
	}

	override suspend fun updateVersionNotes(
		cmd: CatalogueUpdateVersionNotesCommand
	): CatalogueUpdatedVersionNotesEvent = automate.transition(cmd) {
		CatalogueUpdatedVersionNotesEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			versionNotes = cmd.versionNotes
		)
	}

	override suspend fun delete(cmd: CatalogueDeleteCommand): CatalogueDeletedEvent = automate.transition(cmd) {
		CatalogueDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}
}
