package io.komune.registry.f2.catalogue.api.model

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.cccev.api.unit.service.DataUnitF2FinderService
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.cccev.api.CccevFinderService
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.concept.api.ConceptFinderService
import kotlin.coroutines.CoroutineContext

internal class CatalogueCacheContext(
    private val catalogueFinderService: CatalogueFinderService,
    private val cccevFinderService: CccevFinderService,
    private val conceptFinderService: ConceptFinderService,
    private val licenseF2FinderService: LicenseF2FinderService,
    private val datasetFinderService: DatasetFinderService,
    private val organizationF2FinderService: OrganizationF2FinderService,
    private val userF2FinderService: UserF2FinderService
) : CoroutineContext.Element {
    override val key: CoroutineContext.Key<CatalogueCacheContext> = Key
    companion object Key : CoroutineContext.Key<CatalogueCacheContext>

    val untranslatedCatalogues = SimpleCache(catalogueFinderService::get)
    val datasets = SimpleCache(datasetFinderService::get)
    val cataloguesReferencingDatasets = SimpleCache<DatasetId, List<CatalogueId>> { datasetId ->
        catalogueFinderService.page(
            referencedDatasetIds = ExactMatch(datasetId),
        ).items
            .onEach { catalogue -> untranslatedCatalogues.register(catalogue.id, catalogue) }
            .map { it.isTranslationOf ?: it.id }.distinct()
    }

    val dataUnits = SimpleCache(cccevFinderService::getUnit)
    val informationConcepts = SimpleCache(cccevFinderService::getConcept)
    val supportedValues = SimpleCache(cccevFinderService::getValue)

    val themes = SimpleCache(conceptFinderService::get)
    val licenses = SimpleCache(licenseF2FinderService::getOrNull)

    val organizations = SimpleCache(organizationF2FinderService::getRef)
    val users = SimpleCache(userF2FinderService::getRef)
}
