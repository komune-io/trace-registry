package io.komune.registry.f2.catalogue.draft.api.service

import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.api.service.CatalogueF2AggregateService
import io.komune.registry.f2.catalogue.api.service.CatalogueI18nService
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreateCommandDTOBase
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.program.s2.dataset.api.entity.toCreateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateVersionNotesCommand
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreatedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmitCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmittedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import org.springframework.stereotype.Service

@Service
class CatalogueDraftF2AggregateService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueF2AggregateService: CatalogueF2AggregateService,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetFinderService: DatasetFinderService,
) {
    suspend fun create(command: CatalogueDraftCreateCommandDTOBase): CatalogueDraftCreatedEvent {
        val now = System.currentTimeMillis()
        val originalCatalogue = catalogueFinderService.get(command.catalogueId)
        val translatedOriginalCatalogue = catalogueI18nService.translate(originalCatalogue, command.language, false)
        val baseCatalogue = translatedOriginalCatalogue ?: originalCatalogue

        // create copy of the translated original catalogue as a draft
        val draftedCatalogueId = CatalogueCreateCommandDTOBase(
            identifier = "${baseCatalogue.identifier}-${command.language}-draft-$now",
            title = baseCatalogue.title,
            description = baseCatalogue.description,
            type = baseCatalogue.type,
            language = command.language,
            catalogues = emptyList(),
            hidden = true
        ).let { catalogueF2AggregateService.createOrphanTranslation(
            command = it,
            originalCatalogueId = baseCatalogue.id,
            inferIdentifier = false,
            inferTranslationType = true,
            // only init datasets in type configuration if no translation exists for the language yet to avoid duplications
            initDatasets = translatedOriginalCatalogue == null
        ).id }

        val datasetIdMap = baseCatalogue.datasetIds.mapAsync { datasetId ->
            val dataset = datasetFinderService.get(datasetId)
            val newId = datasetAggregateService.create(dataset.toCreateCommand("${dataset.identifier}-draft-$now")).id
            dataset.distributions.mapAsync { distribution ->
                DatasetAddDistributionCommand(
                    id = newId,
                    name = distribution.name,
                    distributionId = distribution.id,
                    downloadPath = distribution.downloadPath,
                    mediaType = distribution.mediaType,
                ).let { datasetAggregateService.addDistribution(it) }
            }
            datasetId to newId
        }.toMap()

        CatalogueLinkDatasetsCommand(
            id = draftedCatalogueId,
            datasetIds = datasetIdMap.values.toList()
        ).let { catalogueAggregateService.linkDatasets(it) }

        return CatalogueDraftCreateCommand(
            catalogueId = draftedCatalogueId,
            originalCatalogueId = command.catalogueId,
            language = command.language,
            baseVersion = translatedOriginalCatalogue?.version ?: 0,
            datasetIdMap = datasetIdMap
        ).let { catalogueDraftAggregateService.create(it) }
    }

    suspend fun submit(command: CatalogueDraftSubmitCommand): CatalogueDraftSubmittedEvent {
        val event = catalogueDraftAggregateService.submit(command)

        val draft = catalogueDraftFinderService.get(event.id)
        CatalogueUpdateVersionNotesCommand(
            id = draft.catalogueId,
            versionNotes = event.versionNotes
        ).let { catalogueAggregateService.updateVersionNotes(it) }

        return event
    }
}
