package io.komune.registry.s2.catalogue.api

import io.komune.registry.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedBadgesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDataEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedMetadataDatasetEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferencedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplacedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueStartedCertificationEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferencedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedAccessRightsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedVersionNotesEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class CatalogueEvolver: View<CatalogueEvent, CatalogueEntity> {

	@Suppress("CyclomaticComplexMethod")
	override suspend fun evolve(event: CatalogueEvent, model: CatalogueEntity?): CatalogueEntity? = when (event) {
		is CatalogueCreatedEvent -> create(event)
		is CatalogueUpdatedEvent -> model?.update(event)
		is CatalogueUpdatedAccessRightsEvent -> model?.updateAccessRights(event)
		is CatalogueUpdatedVersionNotesEvent -> model?.updateVersionNotes(event)
		is CatalogueAddedTranslationsEvent -> model?.addTranslations(event)
		is CatalogueRemovedTranslationsEvent -> model?.removeTranslations(event)
		is CatalogueLinkedCataloguesEvent -> model?.addCatalogues(event)
		is CatalogueUnlinkedCataloguesEvent -> model?.removeCatalogues(event)
		is CatalogueAddedRelatedCataloguesEvent -> model?.addRelatedCatalogues(event)
		is CatalogueReplacedRelatedCataloguesEvent -> model?.replaceRelatedCatalogues(event)
		is CatalogueRemovedRelatedCataloguesEvent -> model?.removeRelatedCatalogues(event)
		is CatalogueLinkedDatasetsEvent -> model?.addDatasets(event)
		is CatalogueLinkedMetadataDatasetEvent -> model?.linkMetadataDataset(event)
		is CatalogueUnlinkedDatasetsEvent -> model?.removeDatasets(event)
		is CatalogueReferencedDatasetsEvent -> model?.referenceDatasets(event)
		is CatalogueUnreferencedDatasetsEvent -> model?.unreferenceDatasets(event)
		is CatalogueLinkedThemesEvent -> model?.addThemes(event)
		is CatalogueSetImageEvent -> model?.setImage(event)
		is CatalogueDeletedEvent -> model?.delete(event)
		is CatalogueStartedCertificationEvent -> model?.startCertification(event)
        is CatalogueAddedBadgesEvent -> model?.addBadges(event)
	}

	private suspend fun create(event: CatalogueCreatedEvent) = CatalogueEntity().apply {
		applyEvent(event)
		id = event.id
		status = CatalogueState.ACTIVE
		identifier = event.identifier
		type = event.type
		childrenCatalogueIds += event.catalogueIds
		childrenDatasetIds += event.datasetIds
		isTranslationOf = event.isTranslationOf
		creatorId = event.creatorId
		creatorOrganizationId = event.creatorOrganizationId
		issued = event.date
	}

	private suspend fun CatalogueEntity.setImage(event: CatalogueSetImageEvent) = update(event) {
		img = event.img
	}

	private suspend fun CatalogueEntity.delete(event: CatalogueDeletedEvent) = update(event) {
		status = CatalogueState.DELETED
	}

	private suspend fun CatalogueEntity.update(event: CatalogueUpdatedEvent) = update(event) {
		applyEvent(event)
	}

	private suspend fun CatalogueEntity.updateAccessRights(event: CatalogueUpdatedAccessRightsEvent) = update(event) {
		accessRights = event.accessRights
	}

	private suspend fun CatalogueEntity.updateVersionNotes(event: CatalogueUpdatedVersionNotesEvent) = update(event) {
		versionNotes = event.versionNotes
	}

	private suspend fun CatalogueEntity.addTranslations(event: CatalogueAddedTranslationsEvent) = update(event) {
		translationIds += event.catalogues
	}

	private suspend fun CatalogueEntity.removeTranslations(event: CatalogueRemovedTranslationsEvent) = update(event) {
		translationIds -= event.languages
	}

	private suspend fun CatalogueEntity.addThemes(event: CatalogueLinkedThemesEvent) = update(event) {
		themeIds += event.themes
	}

	private suspend fun CatalogueEntity.addDatasets(event: CatalogueLinkedDatasetsEvent) = update(event) {
		childrenDatasetIds += event.datasets
	}

	private suspend fun CatalogueEntity.linkMetadataDataset(event: CatalogueLinkedMetadataDatasetEvent) = update(event) {
		metadataDatasetId = event.datasetId
	}

	private suspend fun CatalogueEntity.removeDatasets(event: CatalogueUnlinkedDatasetsEvent) = update(event) {
		childrenDatasetIds -= event.datasets.toSet()
	}

	private suspend fun CatalogueEntity.referenceDatasets(event: CatalogueReferencedDatasetsEvent) = update(event) {
		referencedDatasetIds += event.datasets
	}

	private suspend fun CatalogueEntity.unreferenceDatasets(event: CatalogueUnreferencedDatasetsEvent) = update(event) {
		referencedDatasetIds -= event.datasets.toSet()
	}

	private suspend fun CatalogueEntity.addCatalogues(event: CatalogueLinkedCataloguesEvent) = update(event) {
		childrenCatalogueIds += event.catalogueIds
	}

	private suspend fun CatalogueEntity.removeCatalogues(event: CatalogueUnlinkedCataloguesEvent) = update(event) {
		childrenCatalogueIds -= event.catalogueIds.toSet()
	}

	private suspend fun CatalogueEntity.addRelatedCatalogues(event: CatalogueAddedRelatedCataloguesEvent) = update(event) {
		event.relatedCatalogueIds.forEach { (relation, catalogueIds) ->
			relatedCatalogueIds.getOrPut(relation) { mutableSetOf() } += catalogueIds
		}
	}

	private suspend fun CatalogueEntity.replaceRelatedCatalogues(event: CatalogueReplacedRelatedCataloguesEvent) = update(event) {
		relatedCatalogueIds = event.relatedCatalogueIds
			.mapValues { it.value.toMutableSet() }
			.filter { it.value.isNotEmpty() }
			.toMutableMap()
	}

	private suspend fun CatalogueEntity.removeRelatedCatalogues(event: CatalogueRemovedRelatedCataloguesEvent) = update(event) {
		event.relatedCatalogueIds.forEach { (relation, catalogueIds) ->
			relatedCatalogueIds[relation]?.removeAll(catalogueIds)
			if (relatedCatalogueIds[relation]?.isEmpty() == true) {
				relatedCatalogueIds.remove(relation)
			}
		}
	}

	private suspend fun CatalogueEntity.startCertification(event: CatalogueStartedCertificationEvent) = update(event) {
		certificationIds.add(event.certificationId)
	}

    private suspend fun CatalogueEntity.addBadges(event: CatalogueAddedBadgesEvent) = update(event) {
        event.badges.forEach { newBadge ->
            val index = badges.indexOfFirst { it.id == newBadge.id }
            if (index >= 0) {
                badges[index] = newBadge
            } else {
                badges.add(newBadge)
            }
        }
    }

	private fun CatalogueEntity.applyEvent(event: CatalogueDataEvent) = apply {
		title = event.title
		language = event.language
		event.configuration?.let { configuration = it }
		description = event.description
		themeIds = event.themeIds.toMutableSet()
		homepage = event.homepage
		ownerOrganizationId = event.ownerOrganizationId
		event.validatorId?.let { validatorId = it }
		event.validatorOrganizationId?.let { validatorOrganizationId = it }
		stakeholder = event.stakeholder
		accessRights = event.accessRights
		licenseId = event.licenseId
		location = event.location
		versionNotes = event.versionNotes
		order = event.order
		hidden = event.hidden
		integrateCounter = event.integrateCounter
		version++
	}

	private fun CatalogueEntity.update(event: CatalogueEvent, block: CatalogueEntity.() -> Unit) = apply {
		modified = event.date
		block()
	}
}
