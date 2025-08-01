package io.komune.registry.s2.catalogue.api

import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.s2.catalogue.api.entity.CatalogueAutomateExecutor
import io.komune.registry.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkMetadataDatasetCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedMetadataDatasetEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferencedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplaceRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplacedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueStartCertificationCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueStartedCertificationEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferencedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateAccessRightsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateVersionNotesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedAccessRightsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedVersionNotesEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.utils.truncateLanguage
import org.springframework.stereotype.Service

@Service
class CatalogueAggregateService(
	private val automate: CatalogueAutomateExecutor,
	private val catalogueRepository: CatalogueRepository,
) {
	suspend fun create(command: CatalogueCreateCommand): CatalogueCreatedEvent = automate.init(command) {
		val authedUser = AuthenticationProvider.getAuthedUser()
		CatalogueCreatedEvent(
			id = command.identifier,
			date = System.currentTimeMillis(),
			identifier = command.identifier,
			title = command.title,
			type = command.type,
			language = command.language?.truncateLanguage(),
			configuration = command.configuration,
			description = command.description,
			themeIds = command.themeIds,
			homepage = command.homepage,
			ownerOrganizationId = command.ownerOrganizationId ?: authedUser?.memberOf,
			validatorId = command.validatorId,
			validatorOrganizationId = command.validatorOrganizationId,
			stakeholder = command.stakeholder,
			isTranslationOf = command.isTranslationOf,
			catalogueIds = command.catalogueIds,
			datasetIds = command.datasetIds,
			creatorId = authedUser?.id,
			creatorOrganizationId = authedUser?.memberOf,
			accessRights = command.accessRights ?: CatalogueAccessRight.PRIVATE,
			licenseId = command.licenseId,
			location = command.location,
			order = command.order,
			hidden = command.hidden,
			versionNotes = command.versionNotes,
			integrateCounter = command.integrateCounter,
		)
	}

	suspend fun update(command: CatalogueUpdateCommand): CatalogueUpdatedEvent = automate.transition(command) {
		CatalogueUpdatedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			title = command.title,
			language = command.language?.truncateLanguage(),
			configuration = command.configuration,
			description = command.description,
			themeIds = command.themeIds,
			homepage = command.homepage,
			ownerOrganizationId = command.ownerOrganizationId,
			validatorId = command.validatorId,
			validatorOrganizationId = command.validatorOrganizationId,
			stakeholder = command.stakeholder,
			accessRights = command.accessRights ?: it.accessRights,
			licenseId = command.licenseId,
			location = command.location,
			order = command.order,
			hidden = command.hidden,
			versionNotes = command.versionNotes,
			integrateCounter = command.integrateCounter
		)
	}

	suspend fun setImageCommand(command: CatalogueSetImageCommand) = automate.transition(command) {
		CatalogueSetImageEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			img = command.img,
		)
	}

	suspend fun addTranslations(command: CatalogueAddTranslationsCommand) = automate.transition(command) {
		val translations = catalogueRepository.findAllById(command.catalogues)
			.associate {
				if (it.language == null) throw IllegalArgumentException("Catalogue ${it.id} has no language")
				it.language!!.truncateLanguage() to it.id
			}

		CatalogueAddedTranslationsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			catalogues = translations
		)
	}

	suspend fun removeTranslations(command: CatalogueRemoveTranslationsCommand) = automate.transition(command) {
		CatalogueRemovedTranslationsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			languages = command.languages.map { it.truncateLanguage() }.toSet()
		)
	}

	suspend fun linkCatalogues(
		command: CatalogueLinkCataloguesCommand
	): CatalogueLinkedCataloguesEvent = automate.transition(command) {
		CatalogueLinkedCataloguesEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			catalogueIds = command.catalogueIds.toSet()
		)
	}

	suspend fun unlinkCatalogues(
		command: CatalogueUnlinkCataloguesCommand
	): CatalogueUnlinkedCataloguesEvent = automate.transition(command) {
		CatalogueUnlinkedCataloguesEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			catalogueIds = command.catalogueIds.toSet()
		)
	}

	suspend fun addRelatedCatalogues(
		command: CatalogueAddRelatedCataloguesCommand
	): CatalogueAddedRelatedCataloguesEvent = automate.transition(command) {
		CatalogueAddedRelatedCataloguesEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			relatedCatalogueIds = command.relatedCatalogueIds.mapValues { it.value.toSet() }
		)
	}

	suspend fun replaceRelatedCatalogues(
		command: CatalogueReplaceRelatedCataloguesCommand
	): CatalogueReplacedRelatedCataloguesEvent = automate.transition(command) {
		CatalogueReplacedRelatedCataloguesEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			relatedCatalogueIds = command.relatedCatalogueIds.mapValues { it.value.toSet() }
		)
	}

	suspend fun removeRelatedCatalogues(
		command: CatalogueRemoveRelatedCataloguesCommand
	): CatalogueRemovedRelatedCataloguesEvent = automate.transition(command) {
		CatalogueRemovedRelatedCataloguesEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			relatedCatalogueIds = command.relatedCatalogueIds.mapValues { it.value.toSet() }
		)
	}

	suspend fun linkDatasets(command: CatalogueLinkDatasetsCommand): CatalogueLinkedDatasetsEvent = automate.transition(command) {
		CatalogueLinkedDatasetsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			datasets = command.datasetIds
		)
	}

	suspend fun linkMetadataDataset(
		command: CatalogueLinkMetadataDatasetCommand
	): CatalogueLinkedMetadataDatasetEvent = automate.transition(command) {
		CatalogueLinkedMetadataDatasetEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			datasetId = command.datasetId
		)
	}

	suspend fun unlinkDatasets(
		command: CatalogueUnlinkDatasetsCommand
	): CatalogueUnlinkedDatasetsEvent = automate.transition(command) {
		CatalogueUnlinkedDatasetsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			datasets = command.datasetIds
		)
	}

	suspend fun referenceDatasets(
		command: CatalogueReferenceDatasetsCommand
	): CatalogueReferencedDatasetsEvent = automate.transition(command) {
		CatalogueReferencedDatasetsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			datasets = command.datasetIds
		)
	}

	suspend fun unreferenceDatasets(
		command: CatalogueUnreferenceDatasetsCommand
	): CatalogueUnreferencedDatasetsEvent = automate.transition(command) {
		CatalogueUnreferencedDatasetsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			datasets = command.datasetIds
		)
	}

	suspend fun linkThemes(command: CatalogueLinkThemesCommand): CatalogueLinkedThemesEvent = automate.transition(command) {
		CatalogueLinkedThemesEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			themes = command.themes
		)
	}

	suspend fun updateAccessRights(
		command: CatalogueUpdateAccessRightsCommand
	): CatalogueUpdatedAccessRightsEvent = automate.transition(command) {
		CatalogueUpdatedAccessRightsEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			accessRights = command.accessRights
		)
	}

	suspend fun updateVersionNotes(
		command: CatalogueUpdateVersionNotesCommand
	): CatalogueUpdatedVersionNotesEvent = automate.transition(command) {
		CatalogueUpdatedVersionNotesEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			versionNotes = command.versionNotes
		)
	}

	suspend fun startCertification(
		command: CatalogueStartCertificationCommand
	): CatalogueStartedCertificationEvent = automate.transition(command) {
		CatalogueStartedCertificationEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			certificationId = command.certificationId
		)
	}

	suspend fun delete(command: CatalogueDeleteCommand): CatalogueDeletedEvent = automate.transition(command) {
		CatalogueDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}
}
