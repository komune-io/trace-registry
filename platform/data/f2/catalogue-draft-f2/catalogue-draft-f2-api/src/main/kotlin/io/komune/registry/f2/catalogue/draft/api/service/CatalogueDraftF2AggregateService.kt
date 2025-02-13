package io.komune.registry.f2.catalogue.draft.api.service

import io.komune.registry.f2.catalogue.api.service.CatalogueI18nService
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreateCommandDTOBase
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreatedEvent
import org.springframework.stereotype.Service

@Service
class CatalogueDraftF2AggregateService(
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService,
) {
    suspend fun create(command: CatalogueDraftCreateCommandDTOBase): CatalogueDraftCreatedEvent {
        val now = System.currentTimeMillis()
        val originalCatalogue = catalogueFinderService.get(command.catalogueId)
        val translatedOriginalCatalogue = catalogueI18nService.translate(originalCatalogue, command.language, false)
        val baseCatalogue = translatedOriginalCatalogue ?: originalCatalogue

        // create copy of the translated original catalogue as a draft
        val draftedCatalogueId = CatalogueCreateCommand(
            identifier = "${baseCatalogue.identifier}-${command.language}-draft-$now",
            title = baseCatalogue.title,
            type = baseCatalogue.type,
            language = command.language,
            description = baseCatalogue.description,
            themeIds = baseCatalogue.themeIds?.toSet().orEmpty(),
            homepage = baseCatalogue.homepage,
            structure = baseCatalogue.structure,
            catalogueIds = emptySet(),
            datasetIds = emptySet(), // TODO: copy datasets
            accessRights = baseCatalogue.accessRights,
            licenseId = baseCatalogue.licenseId,
            hidden = true
        ).let { catalogueAggregateService.create(it).id }

        return CatalogueDraftCreateCommand(
            catalogueId = draftedCatalogueId,
            originalCatalogueId = command.catalogueId,
            language = command.language,
            baseVersion = translatedOriginalCatalogue?.version ?: 0,
            datasetIdMap = emptyMap()
        ).let { catalogueDraftAggregateService.create(it) }
    }
}
